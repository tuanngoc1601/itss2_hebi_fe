import React from "react";
import Rating from '@mui/material/Rating';

const ReviewStar = ({ rating }) => {
    return (
        <div className="w-80 h-10 flex flex-row justify-between items-center px-2 border rounded-md" style={{border:"1px solid #7F878F"}}>
            <p className="text-sm font-light">{rating.criteria_name}</p>
            <div className="flex flex-row items-center justify-center gap-x-2">
                <div className=" flex flex-row gap-x-1 px-1 border rounded-md " style={{backgroundColor:"#E9ECEF"}}>
                    <Rating name="read-only" value={rating.rating} readOnly/>
                </div>
                <span>{rating.rating}</span>
            </div>
        </div>
    );
};

export default ReviewStar;
