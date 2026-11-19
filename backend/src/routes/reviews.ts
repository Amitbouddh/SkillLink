import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { requireAuth, AuthRequest } from '../middleware/auth';
import { reviewSchema } from '../validation/schemas';
const router = Router();
router.get('/:artisanId', requireAuth, async (req, res) => res.json(await prisma.review.findMany({ where: { artisanId: String(req.params.artisanId) }, include: { author: { select: { name: true, company: true } } }, orderBy: { createdAt: 'desc' } })));
router.post('/', requireAuth, async (req, res) => { const data = reviewSchema.parse(req.body); const item = await prisma.review.create({ data: { ...data, authorId: (req as AuthRequest).user!.userId } }); const reviews = await prisma.review.findMany({ where: { artisanId: data.artisanId } }); await prisma.artisanProfile.update({ where: { userId: data.artisanId }, data: { rating: reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length } }); res.status(201).json(item); });
export default router;
