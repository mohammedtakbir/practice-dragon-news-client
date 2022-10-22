import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../Shared/NewsSummeryCard/NewsSummeryCard';

const Category = () => {
    // const [emptyNews, setEmptyNews] = useState('')
    const categoriesNews = useLoaderData();
    /* if(categoriesNews.length === 0){
        setEmptyNews('No news fond')
    } */
    return (
        <div>
            {/* <h1>{emptyNews}</h1> */}
            {
                categoriesNews.map(news => <NewsSummeryCard key={news._id} news={news} />)
            }
        </div>
    );
};

export default Category;