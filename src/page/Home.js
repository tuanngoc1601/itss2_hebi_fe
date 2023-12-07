import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import JobFilter from "../component/Home/JobFilter";
import ListCompanies from "../component/Home/ListCompanies";

const Home = () => {
    return (
        <div>
            <Header />
            <JobFilter />
            <ListCompanies />
            <Footer />
        </div>
        
    );
};

export default Home;
