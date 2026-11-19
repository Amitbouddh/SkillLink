import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { requireAuth, requireRole } from '../middleware/auth';
const router = Router();
router.get('/:requirementId', requireAuth, requireRole('MANUFACTURER', 'ADMIN'), async (req, res) => { const requirement = await prisma.requirement.findUnique({ where: { id: String(req.params.requirementId) } }); if (!requirement) return res.status(404).json({ error: 'Requirement not found' }); const profiles = await prisma.artisanProfile.findMany({ include: { user: { select: { id: true, name: true, email: true } } } }); const matches = profiles.map(profile => { const craft = profile.skill.toLowerCase().includes(requirement.type.toLowerCase()) ? 40 : 0; const experience = Math.min(profile.experienceYears / 10, 1) * 20; const location = profile.location.toLowerCase() === requirement.location.toLowerCase() ? 15 : 0; const availability = profile.availability.toLowerCase() === 'available' ? 15 : 0; const rating = (profile.rating / 5) * 10; return { profile, score: Math.round(craft + experience + location + availability + rating) }; }).sort((a, b) => b.score - a.score); res.json(matches); });
export default router;
