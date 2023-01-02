import React from "react";

type AccordionPropsType={
    titleValue:string,
    collapsed:boolean,
    onChange:()=>void
    items:string[]
}

export function Accordion(props:AccordionPropsType){
    console.log ('Accordion rendering')
    return <div>
        <AccordionTitle title={props.titleValue}
        onChange={props.onChange}/>
        {!props.collapsed}&&<AccordionBody items={props.items}/>
    </div>
}

type AccordionTittlePtopsType={
    title:string
    onChange:()=>void
}

function AccordionTitle(props:AccordionTittlePtopsType){
    return(

        <h3 onClick={(e)=>props.onChange()}>===</h3>
    )
}
type AccordionBodyPropsType={
    items:string[]
}

function AccordionBody(props:AccordionBodyPropsType){
    return(
    <ul>
        {props.items.map(i=><li>i</li>)}
    </ul>
    )
}

