import rateLimit from 'express-rate-limit';
import { YES_RESPONSE } from './yes.js';

export function createRateLimitMiddleware(config) {
  return rateLimit({
    windowMs: config.windowMs,
    max: config.max,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (_req, res) => {
      res.status(429).type('text/plain').send(YES_RESPONSE);
    }
  });
}
