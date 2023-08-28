import React, {useState} from 'react';
import './App.css';
import PostList from "./Ulbi/postList";

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
    return (
        <div className="App">
            <PostList title={'Frontend'} post={post}/>
            <PostList title={'Backend'} post={post2}/>
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

