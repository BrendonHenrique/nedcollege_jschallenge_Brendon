"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import crypto from 'node:crypto'
// import { knex } from './db'
// import { IBlogPost } from './model/posts'
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/api', (req, res) => {
    // const newPost: IBlogPost = {
    //   id: crypto.randomUUID(),
    //   author: 'Brendon',
    //   category: 'Travel',
    //   image: 'data:image/png;base64,iVBORw0KG...',
    //   readTime: 2,
    //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   title: 'Post 1',
    // }
    // const transaction = await knex('posts').insert(newPost)
    res.send('transaction');
});
app.listen(3000, () => {
    console.log(`foo[server]: Server is running at http://localhost:${port}`);
});
