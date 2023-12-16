import React from "react";
import { AiOutlineComment } from "react-icons/ai";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const ReviewItem = (props) => {
    return (
        <div className="flex flex-col justify-center items-start p-3 border shadow rounded-md cursor-pointer">
            <h4 className="text-md font-semibold text-navActive">
                {props.reviewTitle}
            </h4>
            <p className="text-xs mt-1">23-11-2023 | {props.reviewerName}</p>
            <div className="flex flex-row justify-start items-center gap-x-6 my-1">
                <p className="flex text-sm items-center cursor-pointer hover:underline hover:decoration-navActive hover:text-navActive px-3 py-1">
                    {props.commentCount}{" "}
                    <span className="text-navActive px-1">
                        <AiOutlineComment />
                    </span>
                </p>
                <p className="flex text-sm items-center cursor-pointer hover:underline hover:decoration-green-500 hover:text-green-500 px-3 py-1">
                {props.likeCount}{" "}
                    <span className="text-green-500 px-1">
                        <AiFillLike />
                    </span>
                </p>
                <p className="flex text-sm items-center cursor-pointer hover:underline hover:decoration-red-500 hover:text-red-500 px-3 py-1">
                {props.dislikeCount}{" "}
                    <span className="text-red-500 px-1">
                        <AiFillDislike />
                    </span>
                </p>
            </div>
            <p className="text-sm">
               {props.reviewText}
            </p>
        </div>
    );
};

export default ReviewItem;
