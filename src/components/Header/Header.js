import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-around py-8 px-8'>
                <div>
                    <h1 className='text-3xl hidden md:block'>Crypto News</h1>
                </div>
                <div className='CustomLink-container flex justify-around'>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/coins">Coins</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;