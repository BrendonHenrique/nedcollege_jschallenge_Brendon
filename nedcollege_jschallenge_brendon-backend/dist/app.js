"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const node_crypto_1 = __importDefault(require("node:crypto"));
const db_1 = require("./db");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/api', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = {
        id: node_crypto_1.default.randomUUID(),
        author: 'Brendon',
        category: 'Travel',
        image: 'data:image/png;base64,iVBORw0KG...',
        readTime: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        title: 'Post 1',
    };
    const transaction = yield (0, db_1.knex)('posts').insert(newPost);
    return transaction;
}));
app.listen(3000, () => {
    console.log(`foo[server]: Server is running at http://localhost:${port}`);
});
