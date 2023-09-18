import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    messageText: { type: String, required: true },
    added: { type: Date, required: true },
  },
  { strict: 'throw' },
);

const MessageModel = mongoose.model('messages', MessageSchema);
export { MessageModel };
