import React from 'react'

const imgStyleTEMP = {
    height: '200px'
}

const PostContainer = ({ postObj }) => {
    return (
        <div>
            <h3>{postObj.username}</h3>
            <h1>{postObj.content}</h1>
            <img style={imgStyleTEMP} src={postObj.imageUrl} alt='jawbreaker' />
            <h5>Likes: {postObj.likeCount}</h5>
            <h5>Dislike: {postObj.disLikeCount}</h5>
            {postObj.comments.map(el => {
                return <h3 key={el}>{el}</h3>
            })}
        </div>
    )
}

export default PostContainer