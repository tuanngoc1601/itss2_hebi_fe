import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import JobFilter from "../component/Home/JobFilter";
import ListCompanies from "../component/Home/ListCompanies";
import axios from "axios";
import { useState,useEffect } from "react";

const Home = () => {   
    const [jobList,setJobList] = useState([]); 
    const [jobFilter, setJobFilter] = useState({
        title: "",
        province: "all",
        salary_start: "all",
        salary_end: "all",
        industry: "all",
        field: "all",
        internship_duration_start: "all",
        internship_duration_end : "all",
        internship_method: "all",
        business_name : "all",
        internship_type : "all",    
        filter: "all"
    })

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post('http://localhost:8000/api/search-job',jobFilter);
            setJobList(response.data);
          } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
          }
        };
        fetchData();
      }, [jobFilter]);

      console.log(jobFilter);

    return (
        <div>
            <Header />
            <JobFilter setJobFilter = {setJobFilter} jobList={jobList}/>
            <ListCompanies jobList = {jobList}/>
            <Footer />
        </div>
        
    );
};

export default Home;
