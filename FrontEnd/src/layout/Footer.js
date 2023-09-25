// src/layout/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-700 h-1/4 flex items-center justify-center">
            <p className="text-white">&copy; {new Date().getFullYear()} Trading Simulator by Aakash Jaswal</p>
        </footer>
    );
};

export default Footer;
