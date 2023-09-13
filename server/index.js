import express from 'express';
const app = express();
import cors from 'cors';

app.use(express.json());
app.use(cors());

import getPosts from './controller.js';
import newPost from './controller.js';



app.get('/api/getPosts', getPosts);
app.post('/api/newPost', newPost);




app.listen(4004, () => console.log('Vibbin on 4004'))
