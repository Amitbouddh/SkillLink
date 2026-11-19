import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { requireAuth, AuthRequest } from '../middleware/auth';
const router = Router();
router.get('/me', requireAuth, async (req, res) => { const id = (req as AuthRequest).user!.userId; const user = await prisma.user.findUnique({ where: { id }, include: { artisanProfile: true } }); if (!user) return res.status(404).json({ error: 'User not found' }); const { passwordHash, ...safe } = user; res.json(safe); });
router.get('/:id', requireAuth, async (req, res) => { const user = await prisma.user.findUnique({ where: { id: String(req.params.id) }, include: { artisanProfile: true } }); if (!user) return res.status(404).json({ error: 'User not found' }); const { passwordHash, ...safe } = user; res.json(safe); });
export default router;
