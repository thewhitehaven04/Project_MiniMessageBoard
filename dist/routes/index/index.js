"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = void 0;
const express_1 = require("express");
const messages = [
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
exports.messages = messages;
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages: messages });
});
exports.default = router;
//# sourceMappingURL=index.js.map