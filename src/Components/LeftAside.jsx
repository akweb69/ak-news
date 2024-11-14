import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftAside = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const url = 'https://openapi.programming-hero.com/api/news/categories';
        fetch(url)
            .then(res => res.json())
            .then(data => setCategory(data.data.news_category))
    }, [])
    console.log(category)


    return (
        <div className="">
            <h1 className=" text-lg font-semibold">All Category</h1>
            <div className='flex md:flex-col flex-row flex-wrap   text-left'>
                {
                    category.map((cate, idx) => <NavLink to={`/category/${cate.category_id}`} key={idx} className='md:w-full  btn btn-ghost justify-start rounded-none '>{cate.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftAside;