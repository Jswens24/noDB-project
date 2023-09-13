import axios from 'axios';
import React, { useEffect, useState } from 'react'

const NewPost = () => {
    const [username, setUsername] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [title, setTitle] = useState('');



    const newPostHandler = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:4004/api/newPost', { username, imgUrl, title })
            .then((res) => {
                console.log(res.data);
            })
            .catch(err => console.log(err))


    }

    return (
        <div>
            <form onSubmit={newPostHandler}>
                <input onChange={e => setUsername(e.target.value)} placeholder='Enter Username' />
                <input onChange={e => setImgUrl(e.target.value)} placeholder='Enter img URL' />
                <input onChange={e => setTitle(e.target.value)} placeholder='Enter Title' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default NewPost