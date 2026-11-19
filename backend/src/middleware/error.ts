import { ErrorRequestHandler } from 'express';
export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error?.name === 'ZodError') return res.status(400).json({ error: 'Validation failed', details: error.issues });
  console.error(error);
  return res.status(error?.statusCode ?? 500).json({ error: error?.message ?? 'Internal server error' });
};
