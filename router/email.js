import express from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post('/', body('name').isLength({ min: 2 }), (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array()[0].msg });
});

export default router;
