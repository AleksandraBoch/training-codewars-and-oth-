import React from 'react';
import './component.css'
import Button from "./button";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const router = useNavigate()
    return (
        <div className='post'>
            <div className='post-content'>
                <strong> {props.post.id}. {props.post.title}</strong>
                <div>{props.post.text}</div>
            </div>
            <div className='button'>
                <Button onClick={()=>props.removePost(props.post)}>Delete</Button>
                <Button onClick={()=>router(`posts${props.post.id}`)}>Open</Button>
            </div>
        </div>
    );
};

export default PostItem;