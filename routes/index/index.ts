import { Request, Response, Router } from 'express';
import { Message } from './types';

const messages: Message[] = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

export default router;
export { messages };
