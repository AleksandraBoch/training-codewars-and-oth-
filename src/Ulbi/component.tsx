import React from 'react';
import './component.css'

export type PostItemType={
   post:{
       id:number
       title:string,
       text:string
   }
}

const PostItem = (props:PostItemType) => {
    return (
        <div className='post'>
            <div className='post-content'>
                <strong> {props.post.id}. {props.post.title}</strong>
                <div>{props.post.text}</div>
            </div>
            <div className='button'>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;