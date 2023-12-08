import React from "react";
import CompanyItem from "./CompanyItem";
import PaginationPage from "./pagination/PaginationPage";
import axios from "axios";
import { useState } from "react";

const ListCompanies = () => {
    const [arrange, setArrange] = React.useState("");
    const [data, setData] = React.useState([]);
    //const [currentPage, setCurrentPage] = React.useState(0);
    
    const [currentPage, setCurrentPage] = useState(1);
    const jobPerPage = 4;

    const onChangeArrangeOption = (e) => {
        setArrange(e.target.value);
    };

    React.useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://647b0017d2e5b6101db0ba04.mockapi.io/JobPostings');
            setData(response.data);
          } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
          }
        };
        fetchData();
      }, []);

    const totalPages = Math.ceil(data.length/jobPerPage);  
    const indexOfLastJob = (currentPage) * jobPerPage;
    const indexOfFirstJob = indexOfLastJob - jobPerPage;
    const currentJobs = data.slice(indexOfFirstJob, indexOfLastJob);
    return (
        <div className="w-full mt-6 mb-10">
            <div className="w-11/12 mx-auto flex flex-row justify-center items-center gap-20 text-sm">
                <p>Ưu tiên hiển thị theo</p>
                <div className="flex flex-row justify-center items-center gap-x-10">
                    <div className="flex flex-row justify-center items-center gap-x-2">
                        <input
                            type="radio"
                            id="post_date"
                            name="arrange"
                            value="post_date"
                            checked={arrange === "post_date"}
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
                            value="update_date"
                            checked={arrange === "update_date"}
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
                            value="salary"
                            checked={arrange === "salary"}
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
                            value="quantity"
                            checked={arrange === "quantity"}
                            onChange={onChangeArrangeOption}
                            className="cursor-pointer"
                        />
                        <label htmlFor="quantity" className="cursor-pointer">
                            Số lượng còn tuyển dụng
                        </label>
                    </div>
                </div>
            </div>
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
