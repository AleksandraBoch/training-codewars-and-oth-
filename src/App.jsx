import React from 'react';
import './App.css';
import Posts from "./Ulbi/pages/posts";
import {Route} from "react-router-dom";
import About from "./Ulbi/pages/about";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/about'} component={About}/>
                <Route path={'/posts'} component={Posts}/>
            </Routes>
        </BrowserRouter>
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

