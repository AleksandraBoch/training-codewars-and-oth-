import React, {useState} from "react";
// import s from  './onOff.module.css'

type OnOff={
    // on:boolean
}

export const OnOff=(props:OnOff)=>{

    let [on,setOn]=useState(false)

    const OnStyle={
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        backgroundColor: on ?'chartreuse':'white',
    }

    const OffStyle={
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        backgroundColor: on ?'white':'red',
    }

    const Circle={
        width: '30px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        borderRadius:'15px',
        backgroundColor: on ? 'chartreuse':'red'
    }

    return(
        <>

                <div style={OnStyle} onClick={()=>{setOn(true)}}>On</div>


                <div style={OffStyle} onClick={()=>{setOn(false)}}>Off</div>

            <div style={Circle}></div>


        </>

    )
}