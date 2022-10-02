"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
// router handlers
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use('/spec', express_1.default.static(path_1.default.join(__dirname, 'openapi.json')));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
/* GET home page. */
app.get('/', function (_, res) {
    res.render('index', { title: 'Express' });
});
app.use('/v1', index_1.default);
module.exports = app;
