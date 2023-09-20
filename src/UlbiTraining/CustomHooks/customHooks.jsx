import {useEffect, useState} from "react";

export default function useInput(initialValue) {

    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.currentTarget.value)
    }

    return {value, onChange}
}
//хук для события при навккдении на что то
export function useHovering(ref) {
    const [isHovering,setIsHovering]=useState(false)
    const on=()=>{setIsHovering(true)}
    const off=()=>{setIsHovering(false)}

    useEffect(()=>{
        if (!ref.current){
            return
        }
        const node=ref.current;
        node.addEventListener('mouseenter',on)
        node.addEventListener('mousemove',on)
        node.addEventListener('mouseleave',off)
        return function (){
            node.removeEventListener('mouseenter',on)
            node.removeEventListener('mousemove',on)
            node.removeEventListener('mouseleave',off)
        }
    },[])
return isHovering;
}

//динамическая пагинация
const List=()=> {
    const [todoList, setTodoList] = useState([])
    const [page, setPage] = useState(1)
    const limit = 20
}

export function useScroll(parentRef,childRef,callback){
    return
}