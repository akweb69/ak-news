import React from 'react';
import '../App.css'
import moment from 'moment';

const Header = () => {


    return (
        <div>
            <div className="title text-5xl font-bold text-center pt-5 pb-3 lg:text-6xl text-[#444444]">The Ak News</div>
            <p className="text-sm md:text-base text-center px-4 ">Journalism Without Fear or Favour</p>
            {/* time and date */}
            <div className="md:text-lg font-semibold text-center px-4 ">
                {
                    moment().format("dddd, MMMM Do YYYY")
                }
            </div>
        </div>
    );
};

export default Header;