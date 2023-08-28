import React from 'react';
import Button from "./button";

const Input = () => {
    return (
        <div>
            <input type={"text"} placeholder={'post title'}/>
            <input type={"text"} placeholder={'post description'}/>
<Button>Add </Button>
        </div>
    );
};

export default Input;