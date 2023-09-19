import React from 'react';
import './App.css';
import Posts from "./Ulbi/pages/posts";
import {Routes, Route} from "react-router-dom";
import About from "./Ulbi/pages/about";
import NavBAr from "./Ulbi/NavBar/NavBAr";
import Error from "./Ulbi/pages/error";
import PostId from "./Ulbi/pages/PostId";
import {routes} from "./Ulbi/routes";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<NavBAr/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route exact path={'/posts'} element={<Posts/>}/>
            <Route exact path={'/posts/:id'} element={<PostId/>}/>
            <Route path={'/error'} element={<Error/>}/>


        </Routes>
    );
}

export default App;

// возможная маршрутизация
// {routes.map(route =>
//     <Route key={route.path}
//            component={route.component}
//            exact={route.exact}
//            path={route.path}
//     />
// )}

//отрисовываем посты вручную прописывая каждый элемент
// <PostItem  post={{id:1,title:'JS',text:'Js-язык программирования'}}/>


//чтоб каждый раз не прописывать вс, можно создать useState-где initialState будет ассоциативный массив,
//ис помощью метода map отрисовать все новые элементы в необходимой компоненте
//{post.map(post=> <PostItem key={post.id} post={post}/>)}
//для ключа лучше использовать айди


//style={{textAlign:'center'}}-добавляем прямо в тег- это позволяет добавить стиль
// прямо в тег без применения класснэйм
//

