import React from "react";
import { AiOutlineComment } from "react-icons/ai";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { Link } from 'react-router-dom';


const ReviewItem = (props) => {
  const createdAtDate = new Date(props.createdAtDate);
  const day = createdAtDate.getDate();
  const month = createdAtDate.getMonth() + 1;
  const year = createdAtDate.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;
  const HighlightText = ({ text, keywords }) => {
    // Hàm để thay thế keyword bằng phần được highlight
    const highlightKeywords = (text, keywords) => {
    
    const lowercasedKeywords = keywords.map(keyword => keyword.toLowerCase());
      const regex = new RegExp(`(${lowercasedKeywords.join('|')})`, 'gi');
      const parts = text.split(regex);
      
      return parts.map((part, index) =>
      lowercasedKeywords.includes(part.toLowerCase()) ? (
          <span key={index} className="highlight" style={{backgroundColor:"yellow"}}>
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      );
    };
  
    return <div className="highlight-text">{highlightKeywords(text, keywords)}</div>;
  };

  
  return (
    <div className="flex flex-col justify-center items-start p-3 border shadow rounded-md cursor-pointer"
      style={{ width: "760px" }}
    >
      <Link to={`/reviews/${props.reviewID}`} onClick={() => { window.scrollTo(0, 0); }}>
        <h4 className="text-md font-semibold text-navActive">
          <HighlightText text={props.reviewTitle} keywords={props.listKey} />
        </h4>
      </Link>
      <p className="text-xs mt-1">{formattedDate} | {props.isAnonymous == 1 ? "Người dùng ẩn danh" : props.reviewerName}</p>
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
        <HighlightText text={props.reviewText} keywords={props.listKey} />
      </p>
    </div>
  );
};

export default ReviewItem;
