import React, { useState, useEffect } from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import ReviewStar from "../component/Reviews/ReviewStar";
import Comment from "../component/Reviews/Comment";
import Editor from "../component/Common/Editor";
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";
import { IconUser } from "../assets";
import backrground from "../assets/images/BackgroundNew.svg";
import like from "../assets/images/like.svg";
import dislike from "../assets/images/dislike.svg";
import likeColor from "../assets/images/likeColor.svg";
import dislikeColor from "../assets/images/dislikeColor.svg";
//import dislike from "../assets/images/iconamoon_dislike-light.svg";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { set } from "lodash";
import { baseApi } from "../constant";

const DetailReview = () => {
    const { reviewId } = useParams();
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");
    const [reviewDetail, setReviewDetail] = useState({});
    const [timeAgo, setTimeAgo] = useState('');
    const [visibleComments, setVisibleComments] = useState(3);
    const [commentAdded, setCommentAdded] = useState(false);
    const [reaction, setReaction] = useState({});
    const [isLike, setIsLike] = useState("");
    const [getReaction, setGetReaction] = useState(
        {
            user_id: 1,
            review_id: reviewId,

        }
    )

    useEffect(() => {
        axios.get(`${baseApi}/api/review-detail/${reviewId}`)
            .then(response => {
                setReviewDetail(response.data);
            })
            .catch(error => {
                console.error('Error fetching job detail:', error);
            });
    }, [reviewId, commentAdded]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${baseApi}/api/review-reaction`, {
              params: getReaction,
            });
            setReaction(response.data);
            setIsLike(response.data.reaction_type);
          } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
          }

        };
        fetchData();
    }, [getReaction]);

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


    const handleLike = () => {
        if (reaction.reaction_type === 'like') {

        } else {
            setGetReaction(prevState => ({
                ...prevState,
                reaction: 'like'
            }));
            setIsLike('like');
        }

    }
    const handleDislike = () => {
        if (reaction.reaction_type === 'dislike') {

        } else {
            setGetReaction(prevState => ({
                ...prevState,
                reaction: 'dislike'
            }));
            setIsLike('dislike');

        }
    }

    return (
        <div className="w-full flex flex-col">
            <Header />
            <div className="w-7/12 flex flex-row items-start mx-auto mt-10">
                <div className="w-full flex flex-col justify-center items-center">
                    {Object.keys(reviewDetail).length === 0 ? (
                        <div style={{ width: "100%", height: "1000px", alignItems: "center", display: "flex", justifyContent: "center" }}>
                            <p>Loading...</p>
                        </div>
                    ) : (
                        <div className="w-full flex flex-col justify-center items-center">
                            <div className="w-10/12 border rounded-md">
                                <div className="w-full h-14 flex flex-row justify-between items-center border-b bg-reviewBg px-4">
                                    <div className="flex flex-row items-center gap-x-2">
                                        <img src={reviewDetail.is_anonymous == 1 ? IconUser : reviewDetail.avatar} alt="" className="w-8" />
                                        <span className="font-semibold">
                                            {reviewDetail.is_anonymous == 1 ? "Người dùng ẩn danh" : reviewDetail.user_name}
                                        </span>
                                    </div>
                                    <span className="font-light">{timeAgo}</span>
                                </div>
                                <div style={{position: 'relative'}} className="flex flex-col items-start justify-center px-4 bg-white">
                                    <div className="flex flex-col my-4 gap-y-1">
                                        <h5 className="text-base font-semibold">
                                            {reviewDetail.title}
                                        </h5>
                                        <div  
                                        dangerouslySetInnerHTML={{ __html: reviewDetail.review_text }} 
                                        />
                                        
                                    </div>
                                    <div className="flex flex-col justify-center items-start gap-y-2">
                                        {
                                            reviewDetail.review_check_list_ratings.map((rating, index, array) => (
                                                <div style={{
                                                    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'
                                                }}>
                                                    <ReviewStar rating={rating} />

                                                    {index === array.length - 1 && (
                                                        <div style={{
                                                            position: 'absolute',
                                                            bottom: '0',
                                                            right: '16px',
                                                            // marginLeft:"auto",
                                                            width: 128,
                                                            height: 35,
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            flexDirection: 'row',
                                                            backgroundImage: `url("${backrground}")`,
                                                            backgroundRepeat: 'no-repeat'
                                                        }}>
                                                            <img src={isLike==='like'?likeColor:like} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '20%', width: '20px', height: '20px' ,cursor:'pointer'}} onClick={handleLike}/>
                                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '25%', height: '80%', borderRight: '1px solid rgba(0, 0, 0, 0.3)', fontSize: '80%', fontWeight: 'bold' }}>
                                                                {reaction.like_count}
                                                            </div>
                                                            <img src={isLike==='dislike'? dislikeColor:dislike} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '25%', width: '20px', height: '20px', marginLeft: 3 ,cursor:'pointer'}} onClick={handleDislike}/>
                                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '20%', fontSize: '80%', fontWeight: 'bold' }}>
                                                                {reaction.dislike_count}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <Comment comments={reviewDetail.review_comments} visibleComments={visibleComments} setVisibleComments={setVisibleComments} />
                                </div>
                            </div>
                            {visibleComments < reviewDetail.review_comments.length && (
                                <span className="text-sky-400 hover:underline cursor-pointer my-4" onClick={loadMoreComments} style={{ color: "#127FFF", fontWeight: "bold" }}>
                                    Xem thêm
                                </span>
                            )}
                        </div>
                    )}
                    <Editor
                        name="description"
                        onChange={(data) => {
                            setData(data);
                        }}
                        editorLoaded={editorLoaded}
                        value={data}
                        reviewId={reviewId}
                        setCommentAdded={setCommentAdded}
                        commentAdded={commentAdded}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DetailReview;
