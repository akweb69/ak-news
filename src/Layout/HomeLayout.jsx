import React from 'react';
import Header from '../Components/Header';
import Marque from '../Components/Marque';
import Navbar from '../Components/Navbar';
import Main from '../Components/Main';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="">
                <Marque></Marque>
            </div>
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="mt-6">
                <Main></Main>
            </div>
        </div>
    );
};

export default HomeLayout;