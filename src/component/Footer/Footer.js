import React from "react";
import { Violet, Bka } from "../../assets";

const Footer = () => {
    return (
        <footer className="w-full h-24 bg-white shadow-inner shadow-gray-300">
            <div className="w-4/5 h-full mx-auto flex flex-row justify-between items-center">
                <div className="flex flex-row justify-center items-center gap-x-2">
                    <img src={Violet} alt="violet" className="w-7"/>
                    <p className="font-medium text-lg leading-5">Công ty Violet</p>
                </div>
                <div className="flex flex-row justify-center items-center gap-x-2">
                    <img src={Bka} alt="bka" className="w-7"/>
                    <p className="font-medium text-lg leading-5">D5-306 Đại Học Bách Khoa Hà Nội</p>
                </div>
                <p className="font-light text-sm">©Vietnam. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
