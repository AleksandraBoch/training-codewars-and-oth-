import React, {useState} from 'react';
import MyInput from "./MyInput";
import Button from "./button";

const PostForm = ({create},post) => {

    const [newPost, setNewPost] = useState({title:'',body:''})
    const addNewPost = (e) => {
        e.preventDefault()
    const newPostForAdd={
            id:Date.now(),
    }
    create(newPostForAdd)
        setNewPost({title:'',body:''})
    }
    return (
        <div>
            <form>
                <MyInput
                    value={newPost.title}
                    onChange={e => setNewPost({...post,title: e.target.value})}
                    type={"text"}
                    placeholder={'post title'}/>
                <MyInput

                    value={newPost.body}
                    onChange={e => setNewPost({...post,body:e.target.value})}
                    type={"text"}
                    placeholder={'post description'}
                />
                <Button
                    onClick={addNewPost}>Add </Button>

            </form>
        </div>
    );
};

export default PostForm;