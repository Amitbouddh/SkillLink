import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { requireAuth, AuthRequest } from '../middleware/auth';
const router = Router();
router.get('/', requireAuth, async (req, res) => res.json(await prisma.notification.findMany({ where: { userId: (req as AuthRequest).user!.userId }, orderBy: { createdAt: 'desc' } })));
router.patch('/:id/read', requireAuth, async (req, res) => { const item = await prisma.notification.updateMany({ where: { id: String(req.params.id), userId: (req as AuthRequest).user!.userId }, data: { read: true } }); res.json({ updated: item.count }); });
router.post('/read-all', requireAuth, async (req, res) => { const result = await prisma.notification.updateMany({ where: { userId: (req as AuthRequest).user!.userId }, data: { read: true } }); res.json({ updated: result.count }); });
export default router;
