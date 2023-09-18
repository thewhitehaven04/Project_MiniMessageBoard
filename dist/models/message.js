"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MessageSchema = new mongoose_1.default.Schema({
    author: { type: String, required: true },
    messageText: { type: String, required: true },
    added: { type: Date, required: true },
}, { strict: 'throw' });
const MessageModel = mongoose_1.default.model('messages', MessageSchema);
exports.MessageModel = MessageModel;
//# sourceMappingURL=message.js.map