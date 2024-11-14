import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram, FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h1 className="text-lg font-semibold mt-3">Find Us On</h1>
            <div className="">
                <div className="w-full flex items-center cursor-pointer hover:bg-cyan-100 gap-3 border bg-cyan-50 p-3">
                    <FaFacebook></FaFacebook> Facebook
                </div>
                <div className="w-full flex items-center cursor-pointer hover:bg-cyan-100 gap-3 border bg-cyan-50 p-3">
                    <FaTwitter></FaTwitter> Twitter
                </div>
                <div className="w-full flex items-center cursor-pointer hover:bg-cyan-100 gap-3 border bg-cyan-50 p-3">
                    <FaInstagram></FaInstagram> Instagram
                </div>
            </div>
        </div>
    );
};

export default FindUs;