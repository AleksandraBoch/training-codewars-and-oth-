import React from 'react';
import {Link} from "react-router-dom";
import '../../App.css'
const NavBAr = () => {
    return (
        <div>
            <div className='navBar'>
                <div className='navBarItems'>
                    <Link to={'/about'}>О сайте </Link>
                    <Link to={'/posts'}>Посты </Link>

                </div>

            </div>
        </div>
    );
};

export default NavBAr;