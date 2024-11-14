import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const { data } = useLoaderData();
    console.log(data)

    return (
        <div>
            {
                data.map((news, idx) => <NewsCard key={idx} news={news}></NewsCard>)
            }
        </div>
    );
};

export default CategoryNews;