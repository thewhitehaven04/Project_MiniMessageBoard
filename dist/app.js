"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const form_1 = __importDefault(require("./routes/form"));
const logger_1 = __importDefault(require("./utils/logger"));
const app = (0, express_1.default)();
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/', index_1.default);
app.use('/', form_1.default);
app.use(logger_1.default);
app.listen(3000);
//# sourceMappingURL=app.js.map