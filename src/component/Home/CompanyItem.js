import React from "react";
import { AiOutlineDollar } from "react-icons/ai";

const CompanyItem = ({ companyItem }) => {
    const currentDate = new Date();
    const updatedAtDate = new Date(companyItem.updated_at);
    const timeDiffInDays = Math.floor((currentDate - updatedAtDate) / (1000 * 60 * 60 * 24));

    const day = updatedAtDate.getDate();
    const month = updatedAtDate.getMonth() + 1; // Months are zero-based
    const year = updatedAtDate.getFullYear();
    const hours = updatedAtDate.getHours();
    const minutes = updatedAtDate.getMinutes();

    // Format the final string
    const formattedDate = `${day}/${month}/${year} lúc ${hours}:${minutes}`;

    return (
        <div className="w-3/4 mx-auto flex flex-row items-center justify-center px-3 border shadow rounded-xl cursor-pointer">
            <div
                className="flex justify-center items-center"
                style={{ width: "10%" }}
            >
                <img src={companyItem.business_logo} alt="company" className="" />
            </div>
            <div className="flex flex-col p-3" style={{ width: "70%" }}>
                <h4 className="text-base font-semibold">
                    {companyItem.title}
                </h4>
                <h5 className="text-sm font-normal">
                    {companyItem.business_name}
                </h5>
                <div className="flex flex-wrap items-center justify-start gap-1 mt-6">
                    <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal uppercase text-gray-900">
                        <span class="">{companyItem.location}</span>
                    </div>
                    <div class="relative g  rid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal uppercase text-gray-900">
                        <span class="">{companyItem.industry}</span>
                    </div>
                    <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal uppercase text-gray-900">
                        <span class="">{companyItem.field}</span>
                    </div>
                    <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal uppercase text-gray-900">
                        <span class="">Thời gian thực tập {companyItem.internship_duration} tháng</span>
                    </div>
                    <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal uppercase text-gray-900">
                        <span class="">
                            {(() => {
                                if (companyItem.internship_method === "online") {
                                    return "Trực tuyến";
                                } else if (companyItem.internship_method === "offline") {
                                    return "Trực tiếp";
                                } else {
                                    return "Kết hợp";
                                }
                            })()}
                        </span>
                    </div>
                    <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal uppercase text-gray-900">
                        <span class="">Khoảng cách 3km</span>
                    </div>
                    <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal uppercase text-gray-900">
                        <span class="">
                            {(() => {
                                if (companyItem.internship_type === "fulltime") {
                                    return "Toàn thời gian";
                                } else {
                                    return "Bán thời gian";
                                }
                            })()}
                        </span>
                    </div>
                    <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal uppercase text-gray-900">
                        <span class="">Thời gian cập nhật {timeDiffInDays} ngày trước</span>
                    </div>
                    <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal uppercase text-gray-900">
                        <span class="">Số lượng tuyển dụng {companyItem.recruitment_number}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-24" style={{ width: "20%" }}>
                <div>
                    <p className="flex items-center justify-end text-sm font-semibold text-navActive gap-1">
                        <AiOutlineDollar className="text-lg text-gray-700" />
                        {(() => {
                            if (companyItem.salary == null) {
                                return "Thỏa thuận";
                            } else if (companyItem.salary == 0.0) {
                                return "Không lương";
                            } else {
                                return companyItem.salary;
                            }
                        })()}
                    </p>
                </div>
                <p className="text-xs font-normal text-end">
                    {formattedDate}
                </p>
            </div>
        </div>
    );
};

export default CompanyItem;
