import React, {useState} from "react";
import s from '/src/reactKabzda/select.module.css'

type SelectType = {
    value: any,
    items: ItemType[]
}
type ItemType={
    title:string,
    value:any
}
export let Select = (props: SelectType) => {
const [active,setActive]=useState(false)

    const selectedItem=props.items.find(i=>i.value===props.value)
   const toggleItems=()=>setActive(!active)

    return (
        <div className={'select.main'}>
            <h3>{selectedItem && selectedItem.value}</h3>
            {props.items.map(i=>i.title)}
        </div>


    )
}
