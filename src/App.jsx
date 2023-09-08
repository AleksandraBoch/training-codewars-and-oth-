import React, {useMemo, useState} from 'react';
import './App.css';
import PostList from "./Ulbi/postList";
import MyInput from "./Ulbi/MyInput";
import PostForm from "./Ulbi/PostForm";
import Select from "./Ulbi/select";
import MyModal from "./Ulbi/Modal/myModal";
import Button from "./Ulbi/button";

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
    const [modalVisible, setModalVisible] = useState(false)

    const createPost = (newPost) => {
        setPost([...post, newPost])
        setModalVisible(false)
    }
    const removePost = (post) => {
        setPost(post.filter(p => p.id !== post.id))
    }

    const sortedPost = useMemo(() => {
        if (filter.sort) {
            return [...post].sort((a, b) => a.sort.localCompare(b.sort))
        }
    })

    const searchAndSort = useMemo(() => {
        //поиск по сортированным постам
        // return sortedPost.filter(p=>p.title.toLowerCase().includes(searchQuery))


        // return sortedPost.filter(post => post.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPost])

    return (
        <div className="App">
            <Button style={{marginTop:15}} onClick={() => setModalVisible(true)}> Add Post</Button>
            <MyModal visible={modalVisible} setVisible={setModalVisible}>
                <PostForm create={createPost}/>
            </MyModal>

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
                        {value: 'body', name: 'by description'}]}/>
            </div>

            {post.length !== 0
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

