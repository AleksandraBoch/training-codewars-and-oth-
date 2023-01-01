import React, {useRef, useState} from "react";

export const UncontrollerInput=()=><input/>

export const TrackValueOfUncontrolledInput=()=>{
    const [value,setValue]=useState('')
    return <><input onChange={(event)=>{
        const actualValue=event.currentTarget.value
        setValue(actualValue)
    }}/>-{value}</>

}
export const GetValueOfUncontrolledInputButtonPress=()=>{
    const [value,setValue]=useState('')
    const inputRef=useRef <HTMLInputElement>(null)
    return <>
    <input  />
       <button onClick={()=>{
           const el=document.getElementById('inputId') as HTMLInputElement;
           setValue(el.value)

       }}> 0 </button>
        -actual value:{value}</>

}
