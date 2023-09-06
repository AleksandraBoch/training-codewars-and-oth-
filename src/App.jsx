import React, {useMemo, useState} from 'react';
import './App.css';
import PostList from "./Ulbi/postList";
import MyInput from "./Ulbi/MyInput";
import PostForm from "./Ulbi/PostForm";
import Select from "./Ulbi/select";

function App() {
    const [post, setPost] = useState([
        {id: 1, title: 'JS', text: 'Js-язык программирования'},
        {id: 2, title: 'HTML', text: 'HTML-язык программирования'},
        {id: 3, title: 'CSS', text: 'CSS-язык программирования'}
    ])


    // const [post2, setPost2] = useState([
    //     {id: 1, title: 'pyton', text: 'pyton-язык программирования'},
    //     {id: 2, title: 'Ruby', text: 'Ruby-язык программирования'},
    //     {id: 3, title: 'Another', text: 'Another-язык программирования'}
    // ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const createPost = (newPost) => {
        setPost([...post, newPost])
    }
    const removePost = (post) => {
        setPost([post].filter(p => p.id !== post.id))
    }

    const sortedPost = useMemo(() => {
        if (selectedSort) {
            return [...post].sort((a, b) => a[sort].localCompare(b[sort]))
        }
    })

    const searchAndSort = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPost])

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0 '}}/>
            <div>
                <MyInput placeholder={'search'} value={searchAndSort}
                         onChange={e => setSearchQuery(e.target.value)}></MyInput>
                <Select
                    value={selectedSort}
                    onChange={sort => selectedSort(sort)}
                    defaultValue={'Sort'}
                    options={[
                        {value: 'title', name: 'by name'},
                        {value: 'body', name: 'by description'}
                    ]}/>
            </div>

            {searchAndSort.length !== 0
                ? <><PostList removePost={removePost} title={'Frontend'} post={post}/>
                    {/*<PostList title={'Backend'}*/}
                    {/*          post={post2}/>*/}
                </>
                : <div>Посты не найдены</div>}
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

