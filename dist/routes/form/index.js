"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const message_1 = require("../../models/message");
const router = (0, express_1.Router)();
router.get('/new', (req, res) => {
    res.render('form');
});
router.post('/new', (req, res) => {
    try {
        message_1.MessageModel.create({
            author: req.body.author,
            messageText: req.body.text,
            added: new Date(),
        });
    }
    catch (err) {
        console.error(err);
    }
    res.redirect('/');
});
exports.default = router;
//# sourceMappingURL=index.js.map