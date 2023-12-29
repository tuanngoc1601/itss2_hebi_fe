import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import SearchTerm from "../component/Reviews/SearchTerm";
import ListReviews from "../component/Reviews/ListReviews";
import axios from "axios";
const Reviews = () => {
  const [sortKey, setSortKey] = React.useState("like");
  const [listKey, setListKey] = React.useState([]);
  const fetchData = async (x) => {
    try {
      const params = { ...x, sort: sortKey ? sortKey : "like" };
      const response = await axios.get(
        "https://internhubitss2.000webhostapp.com/api/review-search",
        {
          params,
        },
        { x }
      );
      return response.data;
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };

  const [searchedData, setSearchedData] = React.useState([]);

  React.useEffect(() => {
    let x = {};
    listKey.forEach((value, index) => {
      x[`search[${index}]`] = value;
    });
    const fetchDataAndSetState = async () => {
      const data = await fetchData(x);
      if (data) {
        setSearchedData(data);
      }
    };

    fetchDataAndSetState(); // Gọi hàm fetchDataAndSetState khi component được mount
  }, [sortKey, listKey]);

  return (
    <div className="w-full flex flex-col">
      <Header />
      <div className="w-1/2 mx-auto mt-10">
        <SearchTerm
          sortKey={sortKey}
          setSearchedData={setSearchedData}
          listKey={listKey}
          setListKey={setListKey}
          searchedData={searchedData}
        />
        <ListReviews
          sortKey={sortKey}
          setSortKey={setSortKey}
          listKey={listKey}
          setListKey={setListKey}
          searchedData={searchedData}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
