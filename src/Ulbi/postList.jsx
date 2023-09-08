import React from 'react';
import PostItem from "./component";
import {CSSTransition, TransitionGroup} from "react-transition-group";


const PostList = ({post, title, removePost}) => {


    return (
        <div>


            <h1 style={{textAlign: 'center'}}> {title}</h1>
            {/*<PostItem  post={{id:1,title:'JS',text:'Js-язык программирования'}}/>*/}
            <TransitionGroup>

                {post.map((post, index) =>
                    <CSSTransition key={post.id}
                                   // nodeRef={nodeRef}
                                   timeout={500}
                                   classNames="post" >

                        <PostItem removePost={removePost} number={index + 1} post={post}/>
                    </CSSTransition>
                )}

            </TransitionGroup>

        </div>
    );
};

export default PostList;