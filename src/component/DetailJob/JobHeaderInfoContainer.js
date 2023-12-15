import React, { useState, useEffect } from "react";

const JobHeaderInfoContainer = ({ jobId }) => {
  const [jobInfo, setJobInfo] = useState(null);

  useEffect(() => {
    // Gọi API hoặc thực hiện các xử lý cần thiết để lấy thông tin công việc từ jobId và cập nhật state jobInfo
    const fetchJobInfo = async () => {
      // Example: Sử dụng axios hoặc fetch để gọi API từ backend : const response = await axios.get(`/api/job/${jobId}`);
      // setJobInfo(response.data);
      // Mock data
      setJobInfo({
        title: "VTNet - Thực tập sinh Java Back - End ",
        salary: 2000,
        companyName: "Viettel Group",
      });
    };

    fetchJobInfo();
  }, [jobId]);

  if (!jobInfo) {
    // Hiển thị loading hoặc thông báo khác nếu thông tin công việc đang được tải
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center h-[145px] text-left text-base text-darkslategray-100 font-lexend">
      {/* Thông tin title, salary và tên công ty */}
      <div className="flex flex-col items-start justify-start md:mr-4">
        <div className="relative leading-[32px] font-bold text-lg">
          {jobInfo.title}
        </div>
        <div className="relative [text-decoration:underline] leading-[24px] font-medium">
          {`Lên tới ${jobInfo.salary}$`}
        </div>
        <div className="relative leading-[24px] font-medium">
          {jobInfo.companyName}
        </div>
      </div>
    </div>
  );
};

export default JobHeaderInfoContainer;
