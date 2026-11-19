import { RequestHandler } from 'express';
import { Role, verifyToken } from '../lib/jwt';
export type AuthRequest = Express.Request & { user?: { userId: string; role: Role } };
export const requireAuth: RequestHandler = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header?.startsWith('Bearer ')) return res.status(401).json({ error: 'Bearer token required' });
    (req as AuthRequest).user = verifyToken(header.slice(7)); next();
  } catch { res.status(401).json({ error: 'Invalid or expired token' }); }
};
export const requireRole = (...roles: Role[]): RequestHandler => (req, res, next) => {
  const user = (req as AuthRequest).user;
  if (!user || !roles.includes(user.role)) return res.status(403).json({ error: 'Insufficient permissions' });
  next();
};
