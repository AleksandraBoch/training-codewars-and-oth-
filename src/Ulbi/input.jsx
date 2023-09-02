import React, {useState} from 'react';
import Button from "./button";
import MyInput from "./MyInput";

const Input = (props) => {

    const [title, seTitle] = useState('')
    const addNewPost = (e) => {
        //тут удаляется обычная работа формы-те этим самым говорим что
        //покнопке мы не делаем перезагрузку страницы
        e.preventDefault()
       seTitle(e.currentTarget.value)
    }
    return (
        <div>
            <form>
                <MyInput
                    value={title}
                    onChange={addNewPost()}
                    type={"text"}
                    placeholder={'post title'} {...props}/>
                <MyInput
                    type={"text"}
                    placeholder={'post description'}
                    {...props}/>
                <Button disabled
                        onClick={addNewPost}>Add </Button>

            </form>

        </div>
    );
};

export default Input;