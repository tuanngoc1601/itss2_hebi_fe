import React from "react";
import CompanyItem from "./CompanyItem";
import PaginationPage from "../Common/PaginationPage";
import { useState } from "react";

const ListCompanies = ({jobList}) => {  
    const [currentPage, setCurrentPage] = useState(1);
    const jobPerPage = 4;


    const totalPages = Math.ceil(jobList.length/jobPerPage);  
    const indexOfLastJob = (currentPage) * jobPerPage;
    const indexOfFirstJob = indexOfLastJob - jobPerPage;
    const currentJobs = jobList.slice(indexOfFirstJob, indexOfLastJob);
    return (
        <div className="w-full mt-6 mb-10">
            <div className="w-11/12 mx-auto flex flex-col mt-10 gap-6">
                {currentJobs.map((currentJob) =>(
                    <CompanyItem companyItem={currentJob}/>
                ))}
                
            </div>
            <div className="w-11/12 mx-auto flex flex-row justify-center items-center ">
                <PaginationPage
                    totalPages={totalPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default ListCompanies;
