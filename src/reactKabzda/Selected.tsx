import React, {useEffect, useState} from "react";
import './select.module.css'

//14 выпуск

type SelectType = {
    value: any,
    items: ItemType[],
    onChange: (value: any) => void
}
type ItemType = {
    title: string,
    value: any
}
export let Select = React.memo((props: SelectType) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredElement = props.items.find(i => i.value === hoveredElementValue)
    const toggleItems = () => setActive(!active)

    useEffect(()=>{
        setHoveredElementValue(props.value);
    },[props.value])

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    const onKeyUp=(e:KeyboardEvent)=>{
        if(e.key==='ArrowDown'||e.key==='ArrowUp'){
            for (let i=0;i<props.items.length;i++){
                if(props.items[i].value===hoveredElementValue){
                    const pretendentElement=e.key==='ArrowDown'
                    ?props.items[i+1]
                        :props.items[i-1];
                    if (pretendentElement){
                        props.onChange(pretendentElement.value)
                        break
                    }
                }
            }

        }
if (e.key==='Enter'||e.key==='Escape'){setActive(false)}
    }

    return (
        <div className={'select.main'}>
            <select>
                <option>Kiev</option>
                <option>Minsk</option>
                <option>Moscow</option>

            </select>
            <div className={'select' + '' + (active ? 'item.selected' : '')}>
                <h3>{selectedItem && selectedItem.value}</h3>
                {props.items.map(i => <div className={'select' + '' +
                    (hoveredElement === i ? 'selected' : '')}
                                           key={i.value}
                                           onClick={() => {
                                               onItemClick(i.value)
                                           }}
                >{i.title}
                </div>)}
                    </div>


                    </div>


                    )
                })
