import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET ?? 'development-secret-change-me';
export type Role = 'MANUFACTURER' | 'ARTISAN' | 'ADMIN';
export type AuthToken = { userId: string; role: Role };
export const signToken = (payload: AuthToken) => jwt.sign(payload, secret, { expiresIn: '7d' });
export const verifyToken = (token: string) => jwt.verify(token, secret) as AuthToken;
