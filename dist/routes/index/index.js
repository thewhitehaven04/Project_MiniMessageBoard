"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const message_1 = require("../../models/message");
const format_1 = __importDefault(require("date-fns/format"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    message_1.MessageModel.find()
        .exec()
        .then(response => {
        const messages = response.map(msg => {
            return {
                messageText: msg.messageText,
                author: msg.author,
                added: (0, format_1.default)(msg.added, 'LLL do yyyy, p'),
            };
        });
        res.render('index', {
            title: 'Mini Messageboard',
            messages: messages,
        });
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map