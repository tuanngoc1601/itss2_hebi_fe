import React, { useState, useEffect } from "react";

const JobContainerFormFilter = ({ jobId }) => {
  const [jobInfo, setJobInfo] = useState(null);

  useEffect(() => {
    // Gọi API hoặc thực hiện các xử lý cần thiết để lấy thông tin công việc từ jobId
    // và cập nhật state jobInfo
    const fetchJobInfo = async () => {
      // Example: Sử dụng axios hoặc fetch để gọi API từ backend
      // const response = await axios.get(`/api/job/${jobId}`);
      // setJobInfo(response.data);

      // Mock data
      setJobInfo({
        location: "Hà Nội",
        recruitmentNumber: 5,
        industry: "Dịch vụ",
        internshipDuration: "2 tháng",
        createdAt: "24 ngày trước",
        internshipMethod: "Online",
        internshipType: "Part time",
      });
    };

    fetchJobInfo();
  }, [jobId]);

  if (!jobInfo) {
    // Hiển thị loading hoặc thông báo khác nếu thông tin công việc đang được tải
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[844px] flex flex-col items-start justify-start gap-[8px] text-left text-sm text-black font-lexend">
      <div className="flex items-center gap-[8px]">
        <img className="w-4 h-4" alt="" src="/frame1.svg" />
        <span className="font-medium">{`Làm việc tại: ${jobInfo.location}`}</span>
      </div>
      <div className="flex items-end gap-[8px]">
        <img className="w-4 h-4" alt="" src="/svg3.svg" />
        <div className="font-medium">{`Số lượng tuyển dụng: ${jobInfo.recruitmentNumber} TTS`}</div>
      </div>
      <div className="flex items-center gap-[8px]">
        <img className="w-4 h-4" alt="" src="/industry.svg" />
        <span className="font-medium">{`Lĩnh vực: ${jobInfo.industry}`}</span>
      </div>
      <div className="flex items-center gap-[8px]">
        <img className="w-4 h-4" alt="" src="/frame2.svg" />
        <span className="font-medium">{`Thời gian thực tập: ${jobInfo.internshipDuration}`}</span>
      </div>
      <div className="flex items-start gap-[8px]">
        <img className="w-4 h-4" alt="" src="/frame3.svg" />
        <div>{`Đăng bài: ${jobInfo.createdAt}`}</div>
      </div>
      <div className="flex gap-[8px] text-center">
        <div>{`${jobInfo.internshipMethod}`}</div>
        <div>{`${jobInfo.internshipType}`}</div>
      </div>
    </div>
  );
};

export default JobContainerFormFilter;
