import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostContainer from './PostContainer';

const Home = () => {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        await axios
            .get('http://localhost:4004/api/getPosts')
            .then((res) => {
                setPosts(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Posts</h1>
            {posts.length > 1 ? posts.map(el => {
                return <PostContainer key={el.postId} postObj={el} />
            }) : null
            }
        </div>
    )
}

export default Home