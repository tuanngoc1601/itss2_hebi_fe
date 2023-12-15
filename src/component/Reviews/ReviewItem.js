import React from "react";
import { AiOutlineComment } from "react-icons/ai";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const ReviewItem = () => {
    return (
        <div className="flex flex-col justify-center items-start p-3 border shadow rounded-md cursor-pointer">
            <h4 className="text-md font-semibold text-navActive">
                Review công việc IT tại Sam Sung
            </h4>
            <p className="text-xs mt-1">23-11-2023 | Người dùng ẩn danh</p>
            <div className="flex flex-row justify-start items-center gap-x-6 my-1">
                <p className="flex text-sm items-center cursor-pointer hover:underline hover:decoration-navActive hover:text-navActive px-3 py-1">
                    101{" "}
                    <span className="text-navActive px-1">
                        <AiOutlineComment />
                    </span>
                </p>
                <p className="flex text-sm items-center cursor-pointer hover:underline hover:decoration-green-500 hover:text-green-500 px-3 py-1">
                    101{" "}
                    <span className="text-green-500 px-1">
                        <AiFillLike />
                    </span>
                </p>
                <p className="flex text-sm items-center cursor-pointer hover:underline hover:decoration-red-500 hover:text-red-500 px-3 py-1">
                    1{" "}
                    <span className="text-red-500 px-1">
                        <AiFillDislike />
                    </span>
                </p>
            </div>
            <p className="text-sm">
                Công ty cũng có rất nhiều ưu đãi, phúc lợi dành riêng cho nhân
                viên để nâng cao sự gắn kết, tình cảm của người lao động. Có thể
                nói đây cũng là một trong những công ty IT ...
            </p>
        </div>
    );
};

export default ReviewItem;
