import React from 'react';
import PostItem from "./component";
import Button from "./button";



const PostList = ({post, title,removePost}) => {


    return (
        <div>

            <h1 style={{textAlign: 'center'}}> {title}</h1>
            {/*<PostItem  post={{id:1,title:'JS',text:'Js-язык программирования'}}/>*/}
            {post.map((post,index) =>
                <PostItem removePost={removePost} number={index+1}key={post.id} post={post}/>
            )}
        </div>
    );
};

export default PostList;