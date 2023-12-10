import React, { useState } from "react";
import LocationDropdownFilter from "./Dropdown/LocationDropdownFilter";
import SalaryDropdownFilter from "./Dropdown/SalaryDropdownFilter";
import SpecializedDropdownFilter from "./Dropdown/SpecializedDropdownFilter";
import FieldDropdownFilter from "./Dropdown/FieldDropdownFilter";
import TimeDropdownFilter from "./Dropdown/TimeDropdownFilter";
import MethodDropdownFilter from "./Dropdown/MethodDropdownFilter";
import CompanyDropdownFilter from "./Dropdown/CompanyDropdownFilter";
import DistanceDropdownFilter from "./Dropdown/DistanceDropdownFilter";
import TypeDropdownFilter from "./Dropdown/TypeDropdownFilter";

const JobFilter = ({ setJobFilter, jobList }) => {
    const [arrange, setArrange] = React.useState("all");
    const [location, setLocation] = useState("all");
    const [salary, setSalary] = useState({ startSalary: 'all', endSalary: 'all' });
    const [specialized, setSpecialized] = useState("all");
    const [field, setField] = useState("all");
    const [time, setTime] = useState({ startTime: "all", endTime: "all" });
    const [method, setMethod] = useState("all");
    const [company, setCompany] = useState("all");
    //const [distance, setDistance] = useState("");
    const [type, setType] = useState("all");

    const handleSentJobFilter = () => {
        setJobFilter({
            province: location,
            salary_start: salary.startSalary,
            salary_end: salary.endSalary,
            industry: specialized,
            field: field,
            internship_duration_start: time.startTime,
            internship_duration_end: time.endTime,
            internship_method: method,
            business_name: company,
            internship_type: type,
            filter: arrange
        })
    }
    const onChangeArrangeOption = (e) => {
        setArrange(e.target.value);
        setJobFilter({
            province: location,
            salary_start: salary.startSalary,
            salary_end: salary.endSalary,
            industry: specialized,
            field: field,
            internship_duration_start: time.startTime,
            internship_duration_end: time.endTime,
            internship_method: method,
            business_name: company,
            internship_type: type,
            filter: e.target.value
        })
    };

    console.log(JobFilter)
    return (
        <div className="w-full mt-5">
            <h3 className="font-bold text-3xl text-center text-navActive leading-8 mt-10">
                Tìm kiếm công việc thực tập
            </h3>
            <div className="w-11/12 mx-auto flex flex-row mt-8">
                <div className="w-11/12 flex flex-col gap-y-4">
                    <div className="flex flex-row justify-start items-center gap-x-4">
                        <LocationDropdownFilter
                            location={location}
                            setLocation={setLocation}
                        />
                        <SalaryDropdownFilter
                            salary={salary}
                            setSalary={setSalary}
                        />
                        <SpecializedDropdownFilter
                            specialized={specialized}
                            setSpecialized={setSpecialized}
                        />
                        <FieldDropdownFilter
                            field={field}
                            setField={setField}
                        />
                        <TimeDropdownFilter
                            time={time}
                            setTime={setTime}
                        />
                    </div>
                    <div className="flex flex-row justify-start items-center gap-x-4">
                        <MethodDropdownFilter
                            method={method}
                            setMethod={setMethod}
                        />
                        <CompanyDropdownFilter
                            company={company}
                            setCompany={setCompany}
                        />
                        <DistanceDropdownFilter />
                        <TypeDropdownFilter
                            type={type}
                            setType={setType}
                        />

                    </div>
                </div>
                <div className="flex flex-col">
                    <button className="bg-navActive text-white font-semibold text-base px-3 py-2 rounded"
                        onClick={() => {
                            handleSentJobFilter();
                        }}
                    >
                        Tìm kiếm
                    </button>
                </div>
            </div>
            <div className="w-11/12 mx-auto flex flex-row justify-start items-center mt-6 pb-12 border-b">
                <div className="w-30 bg-navActive text-white font-semibold uppercase rounded-md px-4 py-2">
                    TỔNG CỘNG {jobList.length} KẾT QUẢ
                </div>
            </div>
            <div className="w-full mt-6 mb-10">
                <div className="w-11/12 mx-auto flex flex-row justify-center items-center gap-20 text-sm">
                    <p>Ưu tiên hiển thị theo</p>
                    <div className="flex flex-row justify-center items-center gap-x-10">
                        <div className="flex flex-row justify-center items-center gap-x-2">
                            <input
                                type="radio"
                                id="post_date"
                                name="arrange"
                                value="1"
                                checked={arrange === "1"}
                                onChange={onChangeArrangeOption}
                                className="cursor-pointer"
                            />
                            <label htmlFor="post_date" className="cursor-pointer">
                                Ngày đăng
                            </label>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-x-2">
                            <input
                                type="radio"
                                id="update_date"
                                name="arrange"
                                value="2"
                                checked={arrange === "2"}
                                onChange={onChangeArrangeOption}
                                className="cursor-pointer"
                            />
                            <label htmlFor="update_date" className="cursor-pointer">
                                Ngày cập nhật
                            </label>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-x-2">
                            <input
                                type="radio"
                                id="salary"
                                name="arrange"
                                value="3"
                                checked={arrange === "3"}
                                onChange={onChangeArrangeOption}
                                className="cursor-pointer"
                            />
                            <label htmlFor="salary" className="cursor-pointer">
                                Lương cao đến thấp
                            </label>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-x-2">
                            <input
                                type="radio"
                                id="quantity"
                                name="arrange"
                                value="4"
                                checked={arrange === "4"}
                                onChange={onChangeArrangeOption}
                                className="cursor-pointer"
                            />
                            <label htmlFor="quantity" className="cursor-pointer">
                                Số lượng còn tuyển dụng
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobFilter;
