import React, { useState, useEffect } from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import ReviewStar from "../component/Reviews/ReviewStar";
import Comment from "../component/Reviews/Comment";
import Editor from "../component/Common/Editor";
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";
import { IconUser } from "../assets";
import axios from "axios";
import { useParams } from 'react-router-dom';

const DetailReview = () => {
    const { reviewId } = useParams();
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");
    const [reviewDetail, setReviewDetail] = useState({});
    const [timeAgo, setTimeAgo] = useState('');
    const [visibleComments, setVisibleComments] = useState(1);

    console.log(reviewId);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/review-detail/${reviewId}`)
            .then(response => {
                setReviewDetail(response.data);
            })
            .catch(error => {
                console.error('Error fetching job detail:', error);
            });
    }, [reviewId]);
    console.log(reviewDetail)

    useEffect(() => {
        const calculateTimeAgo = () => {
            const now = new Date();
            const createdDate = new Date(reviewDetail.created_at);

            const timeDiff = now - createdDate;
            const seconds = Math.floor(timeDiff / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
            const months = Math.floor(days / 30);
            const years = Math.floor(days / 365);

            if (years > 0) {
                setTimeAgo(`${years} năm trước`);
            } else if (months > 0) {
                setTimeAgo(`${months} tháng trước`);
            } else if (days > 0) {
                setTimeAgo(`${days} ngày trước`);
            } else if (hours > 0) {
                setTimeAgo(`${hours} giờ trước`);
            } else if (minutes > 0) {
                setTimeAgo(`${minutes} phút trước`);
            } else {
                setTimeAgo(`${seconds} giây trước`);
            }
        };

        calculateTimeAgo();
    }, [reviewDetail.created_at]);

    const loadMoreComments = () => {
        setVisibleComments((prevVisibleComments) => prevVisibleComments + 1);
    };

    useEffect(() => {
        setEditorLoaded(true);
    }, []);

    return (
        <div className="w-full flex flex-col">
            <Header />
            <div className="w-7/12 flex flex-row items-start mx-auto mt-10">
                <div className="w-1/6 flex flex-col justify-center items-center">
                    <button className="w-35 h-35 flex flex-row justify-center items-center rounded-full border">
                        <IoCaretUpSharp />
                    </button>
                    <span className="my-2">109</span>
                    <button className="w-35 h-35 flex flex-row justify-center items-center rounded-full border">
                        <IoCaretDownSharp />
                    </button>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-5/6 border rounded-md">
                        <div className="w-full h-14 flex flex-row justify-between items-center border-b bg-reviewBg px-4">
                            <div className="flex flex-row items-center gap-x-2">
                                <img src={IconUser} alt="" className="w-8" />
                                <span className="font-semibold">
                                    {reviewDetail.is_anonymous == 1 ? "Người dùng ẩn danh" : reviewDetail.user_name}
                                </span>
                            </div>
                            <span className="font-light">{timeAgo}</span>
                        </div>
                        <div className="flex flex-col items-start justify-center px-4 bg-white">
                            <div className="flex flex-col my-4 gap-y-1">
                                <h5 className="text-base font-semibold">
                                    {reviewDetail.title}
                                </h5>
                                <p className="text-base font-light">
                                    {reviewDetail.review_text}
                                </p>
                            </div>
                            {Object.keys(reviewDetail).length === 0 ? (
                                <div style={{ width: "100%", height: "1000px", alignItems: "center", display: "flex", justifyContent: "center" }}>
                                    <p>Loading...</p>
                                </div>
                            ) : (
                                <div className="flex flex-col justify-center items-start gap-y-2">
                                    {
                                        reviewDetail.review_check_list_ratings.map((rating) => (
                                            <ReviewStar rating={rating} />
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                        {Object.keys(reviewDetail).length === 0 ? (
                            <div style={{ width: "100%", height: "1000px", alignItems: "center", display: "flex", justifyContent: "center" }}>
                                <p>Loading...</p>
                            </div>
                        ) : (
                            <div className="mt-10">
                                <Comment comments={reviewDetail.review_comments} visibleComments={visibleComments} setVisibleComments={setVisibleComments} />
                            </div>
                        )}
                    </div>
                    {Object.keys(reviewDetail).length === 0 ? (
                        <div style={{ width: "100%", height: "1000px", alignItems: "center", display: "flex", justifyContent: "center" }}>
                            <p>Loading...</p>
                        </div>
                    ) : (
                        visibleComments < reviewDetail.review_comments.length && (
                            <span className="text-sky-400 hover:underline cursor-pointer my-4" onClick={loadMoreComments} style={{ color: "#127FFF", fontWeight: "bold" }}>
                                Xem thêm
                            </span>
                        )
                    )}
                    <Editor
                        name="description"
                        onChange={(data) => {
                            setData(data);
                        }}
                        editorLoaded={editorLoaded}
                        value={data}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DetailReview;
