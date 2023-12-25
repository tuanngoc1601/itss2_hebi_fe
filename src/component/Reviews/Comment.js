import React, { useState, useEffect } from "react";
import { IconUser } from "../../assets";

const Comment = ({comments, visibleComments, setVisibleComments }) => {
  const [timeAgoList, setTimeAgoList] = useState([]);

  useEffect(() => {
    setVisibleComments(2);
  }, [comments]);


  useEffect(() => {
    const calculateTimeAgoList = () => {
      const now = new Date();
      const timeAgoArray = comments.map((comment) => {
        const createdDate = new Date(comment.created_at);
        const timeDiff = now - createdDate;
        const seconds = Math.floor(timeDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);

        if (years > 0) {
          return `${years} năm trước`;
        } else if (months > 0) {
          return `${months} tháng trước`;
        } else if (days > 0) {
          return `${days} ngày trước`;
        } else if (hours > 0) {
          return `${hours} giờ trước`;
        } else if (minutes > 0) {
          return `${minutes} phút trước`;
        } else {
          return `${seconds} giây trước`;
        }
      });
      setTimeAgoList(timeAgoArray);
    };

    calculateTimeAgoList();
  }, [comments]);

  return (
    <div>
      {comments.slice(0, visibleComments).map((comment, index) => (
        <div key={index}>
          <div className="w-full h-12 flex flex-row justify-between items-center border-y bg-reviewBg ps-12 pe-4">
            <div className="flex flex-row items-center gap-x-2">
              <img src={comment.avatar} alt="" className="w-8" />
              <span className="font-semibold">{comment.user_name}</span>
            </div>
            <span className="font-light">{timeAgoList[index]}</span>
          </div>
          <div className="flex flex-col my-4 gap-y-1 ps-12 pe-4">
            <h5 className="text-base font-semibold">{comment.title}</h5>
            <div dangerouslySetInnerHTML={{ __html: comment.comment_text }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;

