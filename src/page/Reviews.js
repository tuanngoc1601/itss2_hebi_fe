import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import SearchTerm from "../component/Reviews/SearchTerm";
import ListReviews from "../component/Reviews/ListReviews";

const Reviews = () => {
    const [sortKey, setSortKey] = React.useState("like");
    const [searchedData, setSearchedData]= React.useState([]);


    return (
        <div className="w-full flex flex-col">
            <Header />
            <div className="w-1/2 mx-auto mt-10">
                <SearchTerm 
                sortKey = {sortKey}
                setSearchedData = {setSearchedData}
                
                />
                <ListReviews 
                setSortKey = {setSortKey}
                searchedData = {searchedData}
                />
            </div>
            <Footer />
        </div>
    );
};

export default Reviews;
