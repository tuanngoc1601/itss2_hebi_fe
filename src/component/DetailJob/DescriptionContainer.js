import React, { useCallback } from "react";

const DescriptionContainer = () => {
  const onDivcolMd8ContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='divcolMd6']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  // Mock data
  const reasonsToJoinCompany = [
    "Dẫn đầu thị trường",
    "Cơ hội thử thách và phát triển bản thân",
    "Môi trường làm việc năng động",
  ];

  const jobDescription = `Công ty An Ninh Mạng Viettel (VCS) là đơn vị tập trung thực hiện,
    nghiên cứu, phát triển chuyên sâu các sản phẩm, giải pháp An toàn
    thông tin, đồng thời cung cấp sản phẩm, dịch vụ ATTT cho các tổ
    chức doanh nghiệp lớn trong và ngoài nước.`;

  const jobRequirements = [
    "Tốt nghiệp Đại học chính quy loại Khá trở lên chuyên ngành: Công nghệ thông tin, Khoa học máy tính, Toán - Tin, Điện tử viễn thông,... hoặc các chuyên ngành kỹ thuật khác liên quan.",
    "Trình độ tiếng Anh tương đương tối thiểu 550 TOEIC.",
    "Từ 2 năm kinh nghiệm lập trình backend.",
  ];

  return (
    <div className="absolute w-[calc(100%_-_1027px)] top-[801px] right-[770px] left-[257px] rounded-lg bg-white shadow-[0px_6px_32px_rgba(0,_0,_0,_0.08)] h-[513px] text-left text-3xl text-gray-300 font-lexend">
      {/* Mô tả công việc */}
      <div className="description-section">
        <div className="title">
          <b>3 Lý do để gia nhập công ty</b>
        </div>
        <div className="reasons">
          {reasonsToJoinCompany.map((reason, index) => (
            <p key={index}>{reason}</p>
          ))}
        </div>
      </div>

      {/* Đường kẻ */}
      <div className="line-border" />

      {/* Mô tả công việc */}
      <div className="job-description-section">
        <div className="title">
          <b>Mô tả công việc</b>
        </div>
        <div className="content">
          <p>{jobDescription}</p>
        </div>
      </div>

      {/* Đường kẻ */}
      <img className="border-line" alt="" src="/divborderbottomdashed.svg" />

      {/* Yêu cầu công việc */}
      <div className="requirements-section">
        <div className="title">
          <b>Yêu cầu công việc</b>
        </div>
        <div className="content">
          {jobRequirements.map((requirement, index) => (
            <p key={index}>{requirement}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DescriptionContainer;
