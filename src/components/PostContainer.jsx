import React from 'react';
import styled from 'styled-components';
import { LinkDislikeWrapper, PostWrapper } from './PostContainer.style';

const imgStyleTEMP = {
    height: '200px'
}

const PostContainer = ({ postObj }) => {
    return (
        <PostWrapper>
            <h3>{postObj.username}</h3>
            <h1>{postObj.content}</h1>
            <img src={postObj.imageUrl} alt='jawbreaker' />
            <LinkDislikeWrapper>
                <h5>Likes: {postObj.likeCount}</h5>
                <h5>Dislike: {postObj.disLikeCount}</h5>
            </LinkDislikeWrapper>
            <h4>Comments:</h4>
            {postObj.comments.map(el => {
                return <p key={el}>{el}</p>
            })}
        </PostWrapper>
    )
}

export default PostContainer