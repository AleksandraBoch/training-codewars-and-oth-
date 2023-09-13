import React from 'react';
import './component.css'
import Button from "./button";


const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post-content'>
                <strong> {props.post.id}. {props.post.title}</strong>
                <div>{props.post.text}</div>
            </div>
            <div className='button'>
                <Button onClick={()=>props.removePost(props.post)}>Delete</Button>
            </div>
        </div>
    );
};

export default PostItem;