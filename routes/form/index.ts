import { messages } from '../index';
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/new', (req: Request, res: Response): void => {
  res.render('form');
});

router.post('/new', (req: Request, res: Response): void => {
  messages.push({
    text: req.body.text,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect('/');
});

export default router;
