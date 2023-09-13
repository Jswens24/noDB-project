import { data } from './data.js';

const id = 3;

const getPosts = (req, res) => {
    return res.status(200).send(data)
}

export const newPost = (req, res) => {
    const { username, imgUrl, title } = req.body;

    const newPost = { postId: id, username: username, content: title, imgUrl: imgUrl }
    id++

    data.push(newPost);
    console.log(newPost);
    res.status(200).send(data);
}

export default getPosts

