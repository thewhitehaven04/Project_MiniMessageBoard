"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(req, res, next) {
    console.log(`Request headers:\n`);
    console.dir(req.headers);
    console.log(`Request body:\n`);
    console.dir(req.body);
    next();
}
exports.default = logger;
//# sourceMappingURL=logger.js.map