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

export const ControlledInput=()=>{//контролируемый инпут
    const[parentValue,setParentValue]=useState('')

    return<input value={parentValue} onChange={(e)=>{setParentValue(e.currentTarget.value)}}/>
}

export const ControlledCheckBox=()=>{
    const[parentValue,setParentValue]=useState(true)

    return<input type={'checkbox'} checked={parentValue} onChange={(e)=>{setParentValue(e.currentTarget.checked)}}/>
}

export const ControlledSelect=()=>{
    const[parentValue,setParentValue]=useState<string|undefined>('0')

    return<input type={'checkbox'}  onChange={(e)=>{setParentValue(e.currentTarget.value)}}/>

    return <select>
        <option value={'0'}>none</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Minsk</option>
    </select>
}