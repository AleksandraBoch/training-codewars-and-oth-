import React, {useState} from "react";

export const Count=()=>{

    const [a,setA]=useState<number>(2)
    const [b,setB]=useState<number>(2)


    let resultA=1
    let resultB=1
 for (let i=1;i<=1;i++){
     resultA=resultA*i
 }

 for(let i=1;i<=b;i++){
     resultB=resultB*i
 }

    return(
        <div>
            <input value={a} onChange={(e)=>setA(+e.currentTarget.value)}/> //приведение типа
             <input value={b} onChange={(e)=>setB(Number(e.currentTarget.value))}/> //к числу через Number
        <hr />


            <div>result for a:{resultA}</div>
            <div>result for b:{resultB}</div>
        </div>)

}