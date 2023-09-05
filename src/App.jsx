import React, {useState} from 'react';
import './App.css';
import PostList from "./Ulbi/postList";
import Input from "./Ulbi/input";
import MyInput from "./Ulbi/MyInput";
import Button from "./Ulbi/button";
import PostForm from "./Ulbi/PostForm";

function App() {
    const [post, setPost] = useState([
        {id: 1, title: 'JS', text: 'Js-язык программирования'},
        {id: 2, title: 'HTML', text: 'Js-язык программирования'},
        {id: 3, title: 'CSS', text: 'Js-язык программирования'}
    ])


    const [post2, setPost2] = useState([
        {id: 1, title: 'pyton', text: 'Js-язык программирования'},
        {id: 2, title: 'Ruby', text: 'Js-язык программирования'},
        {id: 3, title: 'Another', text: 'Js-язык программирования'}
    ])

    const createPost = (newPost) => {
        setPost([...post, newPost])
    }
    const removePost = (post) => {
        setPost([post].filter(p=>p.id!==post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            {post.length!==0
          ? <><PostList removePost={removePost} title={'Frontend'} post={post}/><PostList title={'Backend'}
                                                                                          post={post2}/></>
            :<div>Посты не найдены</div>}
        </div>
    );
}

export default App;

//отрисовываем посты вручную прописывая каждый элемент
// <PostItem  post={{id:1,title:'JS',text:'Js-язык программирования'}}/>


//чтоб каждый раз не прописывать вс, можно создать useState-где initialState будет ассоциативный массив,
//ис помощью метода map отрисовать все новые элементы в необходимой компоненте
//{post.map(post=> <PostItem key={post.id} post={post}/>)}
//для ключа лучше использовать айди


//style={{textAlign:'center'}}-добавляем прямо в тег- это позволяет добавить стиль
// прямо в тег без применения класснэйм
//

