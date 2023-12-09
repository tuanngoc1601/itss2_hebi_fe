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
import StatusDropdownFilter from "./Dropdown/StatusDropdownFilter";

const JobFilter = () => {
    const [location, setLocation] = useState('Tất cả tỉnh/thành phố');
    const [salary, setSalary] = useState({startSalary:'all', endSalary:'all'});
    const [specialized, setSpecialized] = useState("Tất cả ngành nghề");
    const [field, setField] = useState("Tất cả lĩnh vực");
    const [time, setTime] = useState({startTime:null, endTime:null});
    const [method, setMethod] = useState("Tất cả phương thức");
    const [company, setCompany] = useState("Tất cả công ty");
    const [distance, setDistance] = useState("");
    const [type, setType] = useState("Tất cả hình thức");
    const [status, setStatus] = useState("Tất cả trạng thái");
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
                        <StatusDropdownFilter 
                        status={status}
                        setStatus={setStatus}
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <button className="bg-navActive text-white font-semibold text-base px-3 py-2 rounded"
                    onClick={() =>{
                        console.log({location, salary, time, company, field, specialized, type, method, status})
                    }}
                    >
                        Tìm kiếm
                    </button>
                </div>
            </div>
            <div className="w-11/12 mx-auto flex flex-row justify-start items-center mt-6 pb-12 border-b">
                <div className="w-30 bg-navActive text-white font-semibold uppercase rounded-md px-4 py-2">
                    TỔNG CỘNG 12 KẾT QUẢ
                </div>
            </div>
        </div>
    );
};

export default JobFilter;
