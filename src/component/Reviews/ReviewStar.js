import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const ReviewStar = ({ title }) => {
    return (
        <div className="w-80 h-10 flex flex-row justify-between items-center px-2 border rounded-md">
            <p className="text-sm font-light">{title}</p>
            <div className="flex flex-row items-center justify-center gap-x-2">
                <div className="h-5 flex flex-row gap-x-1 px-1 border rounded-md bg-bgStarGroup">
                    <FaStar className="text-starColor" />
                    <FaStar className="text-starColor" />
                    <FaStar className="text-starColor" />
                    <FaStar className="text-starColor" />
                    <FaRegStar className="text-starColor" />
                </div>
                <span>4</span>
            </div>
        </div>
    );
};

export default ReviewStar;
