import React from 'react';
import {useMemo} from "react";


export const useSortedPost = (post, sort) => {
    const sortedPost = useMemo(() => {
        if (sort) {
            return [...post].sort((a, b) => a.sort.localCompare(b.sort))
        }
        return post
    }, [sort, post])
    return sortedPost
}

export const usePosts = (post, sort, query) => {
    const sortedPost = useSortedPost(post, sort)
    const searchAndSort = useMemo(() => {
        //поиск по сортированным постам
        return sortedPost.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))


        // return sortedPost.filter(post => post.title.toLowerCase().includes(searchQuery))
    }, [query, sortedPost])

    return searchAndSort
}
