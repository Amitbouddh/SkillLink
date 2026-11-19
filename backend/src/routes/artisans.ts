import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { requireAuth } from '../middleware/auth';
const router = Router();
router.get('/', requireAuth, async (req, res) => { const profiles = await prisma.artisanProfile.findMany({ where: { ...(req.query.location ? { location: String(req.query.location) } : {}), ...(req.query.skill ? { skill: { contains: String(req.query.skill) } } : {}) }, include: { user: { select: { id: true, name: true, email: true, company: true } } }, orderBy: { rating: 'desc' } }); res.json(profiles); });
router.get('/:id', requireAuth, async (req, res) => { const profile = await prisma.artisanProfile.findFirst({ where: { userId: String(req.params.id) }, include: { user: true } }); if (!profile) return res.status(404).json({ error: 'Artisan profile not found' }); res.json(profile); });
export default router;
