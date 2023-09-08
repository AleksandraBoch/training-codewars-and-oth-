import {post} from "axios";
import {useMemo} from "@types/react";

export const usePost=(post,sort)=>{
    const sortedPost = useMemo(() => {
        if (sort) {
            return [...post].sort((a, b) => a.sort.localCompare(b.sort))
        }
    },[sort,post])
    return sortedPost
}

export const usePosts=