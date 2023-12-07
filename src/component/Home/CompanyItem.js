import React from "react";
import { company } from "../../assets";
import { PiCompassLight } from "react-icons/pi";
import { AiOutlineDollar } from "react-icons/ai";

const CompanyItem = () => {
    return (
        <div className="w-3/4 mx-auto flex flex-row items-center justify-center px-3 border shadow rounded-xl cursor-pointer">
            <div
                className="flex justify-center items-center"
                style={{ width: "10%" }}
            >
                <img src={company} alt="company" className="" />
            </div>
            <div className="flex flex-col p-3" style={{ width: "70%" }}>
                <h4 className="text-base font-semibold">
                    Giáo viên tiếng Nhật
                </h4>
                <h5 className="text-sm font-normal">
                    Công Ty TNHH Thương Mại và Phát Triển Nhân Lực Miền Tây
                </h5>
                <div className="flex flex-wrap items-center justify-start gap-1 mt-6">
                    <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal uppercase text-gray-900">
                        <span class="">Trà vinh</span>
                    </div>
                    <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal uppercase text-gray-900">
                        <span class="">Giáo dục</span>
                    </div>
                    <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal uppercase text-gray-900">
                        <span class="">Giáo viên</span>
                    </div>
                    <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal uppercase text-gray-900">
                        <span class="">Thời gian thực tập 3 tháng</span>
                    </div>
                    <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal uppercase text-gray-900">
                        <span class="">Trực tiếp</span>
                    </div>
                    <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal uppercase text-gray-900">
                        <span class="">Khoảng cách 3km</span>
                    </div>
                    <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal uppercase text-gray-900">
                        <span class="">Toàn thời gian</span>
                    </div>
                    <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal uppercase text-gray-900">
                        <span class="">Thời gian cập nhập 12 ngày trước</span>
                    </div>
                    <div class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1 px-2 font-sans text-xs font-normal uppercase text-gray-900">
                        <span class="">Số lượng còn tuyển dụng 4/20</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-24" style={{ width: "20%" }}>
                <div>
                    <p className="flex items-center justify-end text-sm font-semibold text-navActive gap-1">
                        <PiCompassLight className="text-lg text-green-500" />
                        Đang tuyển
                    </p>
                    <p className="flex items-center justify-end text-sm font-semibold text-navActive gap-1">
                        <AiOutlineDollar className="text-lg text-gray-700" />
                        2.000.000 đồng
                    </p>
                </div>
                <p className="text-xs font-normal text-end">
                    12/06/2023 lúc 5:45
                </p>
            </div>
        </div>
    );
};

export default CompanyItem;
