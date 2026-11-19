import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { requireAuth, requireRole } from '../middleware/auth';
const router = Router();
router.use(requireAuth, requireRole('ADMIN'));
router.get('/stats', async (_req, res) => { const [users, artisans, requirements, projects, applications] = await Promise.all([prisma.user.count(), prisma.artisanProfile.count(), prisma.requirement.count(), prisma.project.count(), prisma.application.count()]); res.json({ users, artisans, requirements, projects, applications }); });
router.get('/users', async (_req, res) => res.json(await prisma.user.findMany({ select: { id: true, name: true, email: true, role: true, company: true, createdAt: true } })));
router.patch('/artisans/:id/verify', async (req, res) => { const profile = await prisma.artisanProfile.update({ where: { userId: req.params.id }, data: { availability: req.body.verified === false ? 'Pending verification' : 'Available' } }); res.json(profile); });
export default router;
