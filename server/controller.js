import { data } from './data.js'

const getPosts = (req, res) => {
    return res.status(200).send(data)
}


export default getPosts
