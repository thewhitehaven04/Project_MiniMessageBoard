import { Request, Response, Router } from 'express';
import { MessageModel } from '../../models/message';
import format from 'date-fns/format';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  MessageModel.find()
    .exec()
    .then(response => {
      const messages = response.map(msg => {
        return {
          messageText: msg.messageText,
          author: msg.author,
          added: format(msg.added, 'LLL do yyyy, p'),
        };
      });
      res.render('index', {
        title: 'Mini Messageboard',
        messages: messages,
      });
    });
});

export default router;
