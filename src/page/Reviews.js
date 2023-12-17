import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import SearchTerm from "../component/Reviews/SearchTerm";
import ListReviews from "../component/Reviews/ListReviews";
import axios from "axios";
const Reviews = () => {
    const [sortKey, setSortKey] = React.useState("like");
    const [listKey, setListKey] = React.useState([]);
    const fetchData = async () => {
        try {
          const params = { sort: "like" };
          const response = await axios.get('http://127.0.0.1:8000/api/review-search', {
            params,
          });
          return response.data;
        } catch (error) {
          console.error('Lỗi khi lấy dữ liệu:', error);
        }
      };
    
      const [searchedData, setSearchedData] = React.useState([]);
       

    
      React.useEffect(() => {
        const fetchDataAndSetState = async () => {
          const data = await fetchData();
          if (data) {
            setSearchedData(data);
          }
        };
    
        fetchDataAndSetState(); // Gọi hàm fetchDataAndSetState khi component được mount
    
      }, []);




    return (
        <div className="w-full flex flex-col">
            <Header />
            <div className="w-1/2 mx-auto mt-10">
                <SearchTerm 
                sortKey = {sortKey}
                setSearchedData = {setSearchedData}
                listKey = {listKey}
                setListKey = {setListKey}
                searchedData = {searchedData}
                />
                <ListReviews 
                sortKey = {sortKey}
                setSortKey = {setSortKey}
                listKey = {listKey}
                setListKey = {setListKey}
                searchedData = {searchedData}
                />
            </div>
            <Footer />
        </div>
    );
};

export default Reviews;
