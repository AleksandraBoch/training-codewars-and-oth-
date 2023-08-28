import React from 'react';
import PostItem, {PostItemType} from "./component";
import Input from "./input";


const PostList = ({post, title}) => {


    return (
        <div>

            <h1 style={{textAlign: 'center'}}> {title}</h1>
            {/*<PostItem  post={{id:1,title:'JS',text:'Js-язык программирования'}}/>*/}
            {post.map((post) =>
                <PostItem key={post.id} post={post}/>
            )}

            <Input/>
        </div>
    );
};

export default PostList;