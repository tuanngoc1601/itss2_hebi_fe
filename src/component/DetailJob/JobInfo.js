import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { AiOutlineDollar } from "react-icons/ai";
import JobImageContainer from "./JobImageContainer";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

function JobInfo({ jobDetail }) {
    const currentDate = new Date();
    const updatedAtDate = new Date(jobDetail.created_at);
    const timeDiffInDays = Math.floor((currentDate - updatedAtDate) / (1000 * 60 * 60 * 24));
    const salaryAsInteger = Math.floor(jobDetail.salary);
    const formattedSalary = salaryAsInteger.toLocaleString('vi-VN');

    return (
        <div >
            <Card sx={{ width: "100%", marginTop: "10px" }}>
                <CardContent>
                    <Typography sx={{ fontSize: 20, fontWeight: "bold" }} color="black" gutterBottom>
                        {jobDetail.title}
                    </Typography>
                    <Typography sx={{ fontSize: 16, marginTop:"10px" }} component="div">
                        {jobDetail.business.name}
                    </Typography>
                    <Typography sx={{ mt: "10px", fontSize: 16 }} color="text.secondary">
                        <p className="flex items-center font-regular" style={{ color: "#414042" }}>
                            <AiOutlineDollar className="text-lg mr-2" />
                            {(() => {
                                if (jobDetail.salary == null) {
                                    return "Thỏa thuận";
                                } else if (jobDetail.salary == 0.0) {
                                    return "Không lương";
                                } else {
                                    return (
                                        <span style={{ textDecoration: "underline", fontSize: "16.5px", fontWeight:"bold"}}>
                                            {formattedSalary} đồng
                                        </span>
                                    );
                                }
                            })()}
                        </p>
                    </Typography>
                    <Typography style={{}}>
                        <JobImageContainer images={jobDetail.images} />
                    </Typography>
                    <Typography sx={{ fontSize: 14, display: 'flex', alignItems: 'center', marginTop: "20px" }}>
                        <LocationOnOutlinedIcon sx={{ fontSize: 16, marginRight: 1, color: "#A6A6A6" }} />
                        Làm việc tại {jobDetail.business.location}
                        <OpenInNewOutlinedIcon sx={{ fontSize: 16, color: "#B511B8" }} />
                    </Typography>
                    <Typography sx={{ fontSize: 14, display: 'flex', alignItems: 'center', marginTop: "10px" }}>
                        <HomeOutlinedIcon sx={{ fontSize: 16, marginRight: 1, color: "#A6A6A6" }} />
                        Số lượng tuyển dụng: {jobDetail.recruitment_number} TTS
                    </Typography>
                    <Typography sx={{ fontSize: 14, display: 'flex', alignItems: 'center', marginTop: "10px" }}>
                        <BusinessCenterOutlinedIcon sx={{ fontSize: 16, marginRight: 1, color: "#A6A6A6" }} />
                        Lĩnh vực: {jobDetail.field}
                    </Typography>
                    <Typography sx={{ fontSize: 14, display: 'flex', alignItems: 'center', marginTop: "10px" }}>
                        <AccessTimeOutlinedIcon sx={{ fontSize: 16, marginRight: 1, color: "#A6A6A6" }} />
                        Thời gian thực tập: {jobDetail.internship_duration} tháng
                    </Typography>
                    <Typography sx={{ fontSize: 14, display: 'flex', alignItems: 'center', marginTop: "10px" }}>
                        <AccessTimeOutlinedIcon sx={{ fontSize: 16, marginRight: 1, color: "#A6A6A6" }} />
                        Đăng {timeDiffInDays} ngày trước
                    </Typography>
                    <Typography>
                        <div className="flex flex-wrap items-center justify-start gap-1 mt-5 ml-2">
                            <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal text-gray-900">
                                <strong class="">
                                    {(() => {
                                        if (jobDetail.internship_method === "online") {
                                            return "Trực tuyến";
                                        } else if (jobDetail.internship_method === "offline") {
                                            return "Trực tiếp";
                                        } else {
                                            return "Kết hợp";
                                        }
                                    })()}
                                </strong>
                            </div>
                            <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal text-gray-900 ml-2">
                                <strong class="">
                                    {(() => {
                                        if (jobDetail.internship_type === "fulltime") {
                                            return "Toàn thời gian";
                                        } else {
                                            return "Bán thời gian";
                                        }
                                    })()}
                                </strong>
                            </div>
                        </div>
                    </Typography>
                    <Typography>
                        <p
                            className={`flex items-center justify-end text-sm font-semibold gap-1 mt-5 ${jobDetail.is_closed === 0 ? 'text-green-500' : 'text-red-500'
                                }`}
                        >
                            {jobDetail.is_closed === 0 ? 'Đang tuyển dụng' : 'Ngừng tuyển dụng'}
                        </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default JobInfo;