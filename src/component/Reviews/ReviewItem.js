import React from "react";
import { AiOutlineComment } from "react-icons/ai";
import { AiFillLike, AiFillDislike } from "react-icons/ai";


const ReviewItem = (props) => {

    // const day = props.createdAtDate.getDate();
    // const month = props.createdAtDate.getMonth() + 1; // Months are zero-based
    // const year = props.createdAtDate.getFullYear();
    

    // // Format the final string
    // const formattedDate = `${day}-${month}-${year}`;

    const removeDiacritics = (str) => {
      return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    };
    
    const KeywordHighlighter = ({ text, keywords }) => {
      if (keywords.length === 0) {
        return <span>{text}</span>;
      }
    
      const cleanedText = removeDiacritics(text);
      const cleanedKeywords = keywords.map(keyword => removeDiacritics(keyword));
      const regex = new RegExp(`(${cleanedKeywords.join('|')})`, 'gi');
    
      let lastIndex = 0;
      const result = [];
    
      cleanedText.split(regex).forEach((word, index) => {
        const isKeyword = regex.test(word);
    
        if (isKeyword) {
          const keywordIndex = cleanedKeywords.findIndex(kw => removeDiacritics(kw) === word);
          const keyword = keywords[keywordIndex];
    
          result.push(
            <span key={`${keyword}_${index}`} style={{ backgroundColor: 'yellow' }}>
              {text.substr(lastIndex, word.length)}
            </span>
          );
    
          lastIndex += word.length;
        } else {
          const originalWord = text.substr(lastIndex, word.length);
          result.push(<span key={`${originalWord}_${index}`}>{originalWord}</span>);
          lastIndex += word.length;
        }
      });
    
      return <div>{result}</div>;
    };

    return (
        <div className="flex flex-col justify-center items-start p-3 border shadow rounded-md cursor-pointer"
             style={{width:"760px"}}
        >
            <h4 className="text-md font-semibold text-navActive">
                <KeywordHighlighter text={props.reviewTitle} keywords={props.listKey} />
            </h4>
            <p className="text-xs mt-1">12-12-2012 | {props.isAnonymous == 1? "Người dùng ẩn danh" : props.reviewerName}</p>
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
               
               <KeywordHighlighter text={props.reviewText} keywords={props.listKey} />
            </p>
        </div>
    );
};

export default ReviewItem;
