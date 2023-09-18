import { Router, Request, Response } from 'express';
import { MessageModel } from '../../models/message';

const router = Router();

router.get('/new', (req: Request, res: Response): void => {
  res.render('form');
});

router.post('/new', (req: Request, res: Response): void => {
  try {
    MessageModel.create({
      author: req.body.author,
      messageText: req.body.text,
      added: new Date(),
    });
  } catch (err) {
    console.error(err);
  }
  res.redirect('/');
});

export default router;
