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

export const Selector=(props:SelectType)=>{
    let selectedItem=props.items.find(i=>i.value===props.value)
    return(

        <>
        <div>{selectedItem &&selectedItem.value}</div>
            <div>{props.items.map(i=>i.title)}</div>
        </>
    )
}