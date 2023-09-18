import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import useFetching from "../hooks/useFetching";
import PostService from "../API/postService";
import Loader from "../Loader/Loader";

const PostId = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [com, setCom] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchCommentsById, isComLoading, errorCom] = useFetching(async (id) => {
        const response = await PostService.getComById(id)
        setCom(response.data)
    })
    useEffect(() => {
        fetchPostById(params.id)
        fetchCommentsById(params.id)
    }, [])
    return (
        <div>
            <h1>Вы открыли страницу поста `{params.id}`</h1>
            {isLoading ?
                <Loader/>
                : <div>{post.id}.{post.title}</div>
            }
            <div> Комментарии</div>
            <>{
                isLoading
                    ? <Loader/>
                    : <div>
                        {com.map(c =>
                            <div>
                                <h5>c.email</h5>
                                <h5>c.body</h5>
                            </div>)}
                    </div>
            } </>

        </div>
    );
};

export default PostId;