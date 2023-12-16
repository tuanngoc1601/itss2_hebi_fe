import React, { useState } from "react";
import ReviewItem from "./ReviewItem";
import PaginationPage from "../Common/PaginationPage";

const ListReviews = (props) => {
    const [arrange, setArrange] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const reviewData = props.searchedData

    const totalPages = 10;

    const onChangeArrangeOption = (e) => {
        setArrange(e.target.value);
        props.setSortKey(e.target.value);
    }

    return (
        <div className="w-full flex flex-col mb-10">
            <div className="flex flex-row justify-start items-center gap-20 text-sm mt-3">
                <p>Ưu tiên hiển thị theo</p>
                <div className="flex flex-row justify-center items-center gap-x-10">
                    <div className="flex flex-row justify-center items-center gap-x-2">
                        <input
                            type="radio"
                            id="like_quantity"
                            name="arrange"
                            value="like"
                            checked={arrange === "like"}
                            onChange={onChangeArrangeOption}
                            className="cursor-pointer"
                        />
                        <label htmlFor="like_quantity" className="cursor-pointer">
                            Số lượng like
                        </label>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-x-2">
                        <input
                            type="radio"
                            id="post_date"
                            name="arrange"
                            value="date"
                            checked={arrange === "date"}
                            onChange={onChangeArrangeOption}
                            className="cursor-pointer"
                        />
                        <label htmlFor="post_date" className="cursor-pointer">
                            Ngày đăng
                        </label>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-3 mt-4">
            {reviewData.map((review, index) => (
                <ReviewItem
                key={index} 
                reviewTitle={review.review_title}
                reviewerName={review.reviewer_name}
                commentCount={review.comment_count}
                likeCount={review.like_count}
                dislikeCount={review.dislike_count}
                reviewText={review.review_text}
                />
            ))}
                
            </div>
            <div className="w-full flex flex-row justify-center items-center">
                <PaginationPage
                    totalPages={totalPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default ListReviews;
