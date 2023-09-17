"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/new', (req, res) => {
    res.render('form');
});
router.post('/new', (req, res) => {
    index_1.messages.push({
        text: req.body.text,
        user: req.body.author,
        added: new Date(),
    });
    res.redirect('/');
});
exports.default = router;
//# sourceMappingURL=index.js.map