import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { requireAuth, AuthRequest } from '../middleware/auth';
import { messageSchema } from '../validation/schemas';
const router = Router();
router.get('/', requireAuth, async (req, res) => { const id = (req as AuthRequest).user!.userId; res.json(await prisma.message.findMany({ where: { OR: [{ senderId: id }, { recipientId: id }] }, orderBy: { createdAt: 'asc' } })); });
router.post('/', requireAuth, async (req, res) => { const data = messageSchema.parse(req.body); const senderId = (req as AuthRequest).user!.userId; const recipient = await prisma.user.findUnique({ where: { id: data.recipientId } }); if (!recipient) return res.status(404).json({ error: 'Recipient not found' }); const message = await prisma.message.create({ data: { ...data, senderId } }); await prisma.notification.create({ data: { userId: data.recipientId, text: 'You have a new message.' } }); res.status(201).json(message); });
export default router;
