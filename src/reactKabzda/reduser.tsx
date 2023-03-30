import React from "react";

type ActionType={
type:string
}

export const TOGGLE_CONST='TOGGLE-COLLAPSED'

type StateType={
    collapsed:boolean
}

export const reduser=(state:StateType,action:ActionType):StateType=>{
    switch (action.type){
        case TOGGLE_CONST:
            const stateCope={...state}
            stateCope.collapsed=!state.collapsed;
            return stateCope
        default:
            throw new Error('Bad action type')
    }
    return state
}
