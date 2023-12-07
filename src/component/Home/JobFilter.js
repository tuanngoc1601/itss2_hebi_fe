import React from "react";
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
    const [filterData, setFilterData] = React.useState({
        city: "",
        salary: "",
        specialized: "",
        field: "",
        time: "",
        method: "",
        company: "",
        distance: "",
        type: "",
        recruiting: "",
    });

    return (
        <div className="w-full mt-5">
            <h3 className="font-bold text-3xl text-center text-navActive leading-8 mt-10">
                Tìm kiếm công việc thực tập
            </h3>
            <div className="w-11/12 mx-auto flex flex-row mt-8">
                <div className="w-11/12 flex flex-col gap-y-4">
                    <div className="flex flex-row justify-start items-center gap-x-4">
                        <LocationDropdownFilter />
                        <SalaryDropdownFilter />
                        <SpecializedDropdownFilter />
                        <FieldDropdownFilter />
                        <TimeDropdownFilter />
                    </div>
                    <div className="flex flex-row justify-start items-center gap-x-4">
                        <MethodDropdownFilter />
                        <CompanyDropdownFilter />
                        <DistanceDropdownFilter />
                        <TypeDropdownFilter />
                        <StatusDropdownFilter />
                    </div>
                </div>
                <div className="flex flex-col">
                    <button className="bg-navActive text-white font-semibold text-base px-3 py-2 rounded">
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
