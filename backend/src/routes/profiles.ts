import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { requireAuth, requireRole, AuthRequest } from '../middleware/auth';
const router = Router();
router.get('/me', requireAuth, requireRole('ARTISAN'), async (req, res) => res.json(await prisma.artisanProfile.findUnique({ where: { userId: (req as AuthRequest).user!.userId } })));
router.put('/me', requireAuth, requireRole('ARTISAN'), async (req, res) => { const id = (req as AuthRequest).user!.userId; const profile = await prisma.artisanProfile.upsert({ where: { userId: id }, create: { userId: id, skill: String(req.body.skill), skillsJson: JSON.stringify(req.body.skills ?? []), experienceYears: Number(req.body.experienceYears), location: String(req.body.location), availability: String(req.body.availability ?? 'Available'), bio: String(req.body.bio ?? ''), languagesJson: JSON.stringify(req.body.languages ?? []), certificatesJson: JSON.stringify(req.body.certificates ?? []), portfolioJson: JSON.stringify(req.body.portfolio ?? []) }, update: { skill: req.body.skill, skillsJson: JSON.stringify(req.body.skills ?? []), experienceYears: Number(req.body.experienceYears), location: req.body.location, availability: req.body.availability, bio: req.body.bio } }); res.json(profile); });
export default router;
