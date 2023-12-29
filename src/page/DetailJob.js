import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CompanyGroupCard from "../component/DetailJob/CompanyGroupCard";
import DescriptionContainer from "../component/DetailJob//DescriptionContainer";
import Header from "../component/Header/Header.js";
import JobInfo from '../component/DetailJob/JobInfo.js';
import SimilarJob from '../component/DetailJob/SimilarJob.js';
import Footer from "../component/Footer/Footer";

const DetailJob = () => {
  const { companyId } = useParams();
  const [jobDetail, setJobDetail] = useState({});

  useEffect(() => {
    axios.get(`https://internhubitss2.000webhostapp.com/api/job-detail/${companyId}`)
      .then(response => {
        setJobDetail(response.data);
      })
      .catch(error => {
        console.error('Error fetching job detail:', error);
      });
  }, [companyId]);

  return (
    <div>
      <Header />
      {Object.keys(jobDetail).length === 0 ? (
        <div style={{width:"100%", height:"1000px", alignItems:"center", display: "flex", justifyContent:"center"}}>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 10%' }}>
            <div style={{ flex: '0 0 62.5%' }}>
              <JobInfo jobDetail={jobDetail} />
            </div>
            <div style={{ flex: '0 0 30%' }}>
              <CompanyGroupCard company={jobDetail.business} />
            </div>
          </div>
          <DescriptionContainer jobDescription={jobDetail.description} />
          <div style={{ flex: '0 0 30%' }}>
            <SimilarJob jobDetail={jobDetail} />
          </div>
        </div>
      )}  
      <Footer />
    </div>
  );
};

export default DetailJob;
