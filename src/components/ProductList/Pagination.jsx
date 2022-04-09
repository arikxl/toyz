import React from 'react'
import { Link } from 'react-router-dom';

export const Pagination = (props) => {
    const { page, pages, searchWord = '' } = props;



    return (
        pages > 1 && (

            <nav>
                <ul className='pagination'>
                    {
                        [...Array(pages).keys()].map((x) => (
                            <li key={x + 1}
                                className={`${x + 1 === page ? 'active' : ''}`}>
                                <Link to={`${searchWord && `/search/${searchWord}`}/page/${x + 1}`}>
                                    {x + 1}
                                </Link>
                                &nbsp;
                            </li>

                        ))
                    }
                </ul>
            </nav>
        )
    )
}
