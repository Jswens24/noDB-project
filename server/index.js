import express from 'express';
const app = express();
import cors from 'cors';

app.use(express.json());
app.use(cors());

import { getPosts } from './controller'

//data??
const data = {
    username: 'Bob',
    content: 'Check this out',
    imageUrl: 'https://hips.hearstapps.com/del.h-cdn.co/assets/16/17/1600x813/gallery-1461797286-screen-shot-2016-04-27-at-64748-pm.png?resize=1200:*',
    comments: [
        'Wow, this is really neat Bob', 'borrrring'
    ]
}


app.get('/api/getPosts', getPosts)




app.listen(4004, () => console.log('Vibbin on 4004'))