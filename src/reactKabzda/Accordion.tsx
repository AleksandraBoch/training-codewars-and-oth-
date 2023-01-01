import React from "react";

type AccordionPropsType={
    titleValue:string,
    collapsed:boolean,
    onChange:()=>void
}

export function Accordion(props:AccordionPropsType){
    console.log ('Accordion rendering')
    return <div>
        <AccordionTitle title={props.titleValue}
        onChange={props.onChange}/>
        {!props.collapsed}&&<AccordionBody/>
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

function AccordionBody(){
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}