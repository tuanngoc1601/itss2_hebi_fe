import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { AiOutlineDollar } from "react-icons/ai";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


function SimilarJob({ jobDetail }) {
    const [jobList, setJobList] = useState([]);

    const JobFilter = ({
        province: "all",
        salary_start: "all",
        salary_end: "all",
        industry: jobDetail.industry,
        field: jobDetail.field,
        internship_duration_start: "all",
        internship_duration_end: "all",
        internship_method: "all",
        business_name: "all",
        internship_type: "all",
        filter: "1"
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:8000/api/search-job', JobFilter);
                setJobList(response.data);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
            }
        };
        fetchData();
    }, []);

    console.log(jobList);

    function diffinDays(job) {
        const currentDate = new Date();
        const updatedAtDate = new Date(job.created_at);
        const timeDiffInDays = Math.floor((currentDate - updatedAtDate) / (1000 * 60 * 60 * 24));
        return timeDiffInDays;
    }

    return (
        <Box sx={{ width: "50%", marginLeft: "10%", marginTop: "20px", marginBottom: "20px" }}>
            <p style={{ fontSize: 20, fontWeight: "bold", marginBottom: "20px    " }}>Việc làm tương tự dành cho bạn</p>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {jobList
                    .filter(job => job.id !== jobDetail.id)
                    .slice(0, 2)
                    .map((job, index) => (
                        <Grid item xs={6} key={index}>
                            <Card sx={{ width: "100%", marginTop: "5px", backgroundColor: "#FFF4E9", height: "100%" }}>
                                <CardContent>
                                    <Typography>
                                        <p style={{ fontSize: "18px", fontWeight: "bold", height: "20%" }}>{job.title}</p>
                                    </Typography>
                                    <Typography sx={{ fontSize: 20, fontWeight: "bold", maxHeight: '100px', marginTop: "10px" }} color="black" gutterBottom>
                                        <div className="flex items-center">
                                            <img
                                                src={job.business_logo}
                                                alt="company"
                                                style={{ width: "50px", height: "50px", marginRight: "10px", border: "1px solid #DEE2E6", objectFit: 'contain', backgroundColor: "#FFF" }}
                                            />
                                            <div>
                                                <p className="text-base" style={{ fontSize: "14px" }}>{job.business_name}</p>
                                            </div>
                                        </div>
                                    </Typography>
                                    <Typography sx={{ mt: "5px", fontSize: 16, padding: "5px 0", borderBottom: '1px dashed #DEDEDE' }} color="text.secondary">
                                        <p className="flex items-center font-regular" style={{ color: "#414042", fontWeight: "semi-bold" }}>
                                            <AiOutlineDollar className="text-lg mr-2" />
                                            {(() => {
                                                if (job.salary == null) {
                                                    return "Thỏa thuận";
                                                } else if (job.salary == 0.0) {
                                                    return "Không lương";
                                                } else {
                                                    return (
                                                        <span style={{ textDecoration: "underline", fontSize: "16.5px" }}>
                                                            {job.salary}<span style={{ fontSize: "15px" }}>$</span>
                                                        </span>
                                                    );
                                                }
                                            })()}
                                        </p>
                                    </Typography>
                                    <Typography sx={{ fontSize: 14, display: 'flex', alignItems: 'center', marginTop: "10px" }}>
                                        <LocationOnOutlinedIcon sx={{ fontSize: 16, marginRight: 1, color: "#A6A6A6" }} />
                                        {job.location}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14, display: 'flex', alignItems: 'center', marginTop: "5px" }}>
                                        <AccessTimeOutlinedIcon sx={{ fontSize: 16, marginRight: 1, color: "#A6A6A6" }} />
                                        Đăng {diffinDays(job)} ngày trước
                                    </Typography>
                                    <Typography>
                                        <p
                                            className={`flex items-center justify-end text-sm font-semibold gap-1 mt-4`}
                                        >
                                            <Link to={`/detail-job/${job.id}`} onClick={() => {window.scrollTo(0, 0);}} >
                                                <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal ml-2" style={{ backgroundColor: "#E995EB" }}>
                                                    <strong class="">
                                                        Xem chi tiết
                                                    </strong>
                                                </div>
                                            </Link>
                                        </p>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        </Box>
    );
}

export default SimilarJob;