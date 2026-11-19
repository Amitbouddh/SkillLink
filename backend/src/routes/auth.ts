import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { prisma } from '../lib/prisma';
import { Role, signToken } from '../lib/jwt';
import { registerSchema, loginSchema } from '../validation/schemas';
const router = Router();
router.post('/register', async (req, res) => { const data = registerSchema.parse(req.body); const passwordHash = await bcrypt.hash(data.password, 12); const user = await prisma.user.create({ data: { name: data.name, email: data.email, passwordHash, role: data.role, company: data.company } }); res.status(201).json({ user: { id: user.id, name: user.name, email: user.email, role: user.role, company: user.company }, token: signToken({ userId: user.id, role: data.role as Role }) }); });
router.post('/login', async (req, res) => { const data = loginSchema.parse(req.body); const user = await prisma.user.findUnique({ where: { email: data.email } }); if (!user || !(await bcrypt.compare(data.password, user.passwordHash))) return res.status(401).json({ error: 'Invalid email or password' }); res.json({ user: { id: user.id, name: user.name, email: user.email, role: user.role, company: user.company }, token: signToken({ userId: user.id, role: user.role as Role }) }); });
export default router;
