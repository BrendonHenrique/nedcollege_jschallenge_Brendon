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
const db_1 = require("./src/db");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/api', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPost = {
            id: node_crypto_1.default.randomUUID(),
            image: 'data:image/png;base64,iVBORw0KG...',
            category: 'Travel',
            title: 'Post 1',
            author: 'Brendon',
            read_time: 2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        };
        yield (0, db_1.knex)(db_1.tables.POSTS).insert(newPost);
        const posts = yield (0, db_1.knex)(db_1.tables.POSTS).select('*');
        return res.json(posts);
    }
    catch (error) {
        console.error('Failed to fetch posts:', error);
        return res.status(500).json({ error: 'Failed to fetch posts' });
    }
}));
app.listen(port, () => {
    console.log(`foo[server]: Server is running at http://localhost:${port}`);
});
