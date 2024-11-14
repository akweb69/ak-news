import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Marque = () => {
    return (
        <div className='w-11/12 mx-auto flex gap-2 p-2 bg-base-200 mt-3'>
            <p className="text-base-100  bg-pink-700 py-1 px-2  font-semibold   ">Updates:</p>
            <Marquee pauseOnHover={true} className='space-x-10'>
                <Link to={'/news'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, asperiores!</Link >
                <Link to={'/news'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, asperiores!</Link >
                <Link to={'/news'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, asperiores!</Link >
                <Link to={'/news'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, asperiores!</Link >
                <Link to={'/news'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, asperiores!</Link >
            </Marquee>
        </div>
    );
};

export default Marque;