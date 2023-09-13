import React from 'react';
import {getPagesArray} from "../utils/pages";

const Pagination = ({totalPages,page,ChangePage}) => {
    let pagesArray = getPagesArray(totalPages)
    return (

            <div className='page_wrapper'>

                {pagesArray.map(p =>
                    <span key={p}
                        //меняется подсветка страницы на нажатие
                          onClick={ChangePage(p)}
                        //если выбрана текущая страница то подключается другой класс
                          className={page === p ? 'page_current' : 'page'}>
                        {p}
                    </span>)}
            </div>
    );
};

export default Pagination;