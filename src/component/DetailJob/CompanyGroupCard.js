import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const CompanyGroupCard = ({ companyId }) => {
  const [companyDetails, setCompanyDetails] = useState(null);

  const fetchCompanyDetails = useCallback(async () => {
    try {
      const response = await axios.get(`/api/companies/${companyId}`);
      setCompanyDetails(response.data);
    } catch (error) {
      console.error("Error fetching company details:", error);
    }
  }, [companyId]);

  useEffect(() => {
    fetchCompanyDetails();
  }, [fetchCompanyDetails]);

  if (!companyDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative rounded-lg bg-white shadow-[0px_6px_32px_rgba(0,_0,_0,_0.08)] w-[422.66px] h-[433.8px] text-left text-lg text-gray-300 font-lexend">
      {/* Thông tin chung của công ty */}
      <div className="absolute w-[calc(100%_-_40px)] top-[204px] right-[20px] left-[20px] flex flex-col items-center justify-start">
        <CompanyInfoItem
          icon="/quy-m-cng-ty.svg"
          value={companyDetails.employee_number}
        />
        <CompanyInfoItem icon="/1000-nhn-vin.svg" value={companyDetails.name} />
        <CompanyInfoItem icon="/quc-gia.svg" value={companyDetails.country} />
        <CompanyInfoItem
          icon="/thi-gian-lm-vic.svg"
          value={`${companyDetails.start_week_day} - ${companyDetails.end_week_day}`}
        />
      </div>

      {/* Thông tin liên quan đến đội nhóm */}
      <div className="absolute top-[370px] left-[6px] w-[417px] h-10 flex flex-row flex-wrap items-start justify-start py-2 px-0 box-border">
        <div className="flex-1 h-6 max-w-[406.6600036621094px]" />
      </div>

      {/* Logo và tên công ty */}
      <div className="absolute w-[calc(100%_-_40px)] top-[13px] right-[20px] left-[20px] flex flex-row items-start justify-start py-0 pr-[128.66000366210938px] pl-0 box-border cursor-pointer">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-start">
            <img
              className="relative rounded w-[120px] h-[120px] object-cover"
              alt=""
              src="/logo20vietteljpg@2x.png"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-0 pl-3">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <b className="relative leading-[27px]">{companyDetails.name}</b>
          </div>
          <div className="flex flex-row items-start justify-start text-base text-darkorchid">
            <div className="flex flex-row items-center justify-start py-0 pr-[0.55999755859375px] pl-0">
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[24px]">Xem công ty</div>
              </div>
              <div className="flex flex-col items-start justify-start pt-0 pb-0.5 pr-0 pl-2 ml-[-0.61px]">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/svg.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CompanyInfoItem = ({ icon, value }) => (
  <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0.5 pb-0 pr-[67.33000183105469px] pl-0 box-border max-w-[382.6600036621094px]">
    <img className="relative w-[122.43px] h-[15.73px]" alt="" src={icon} />
    <span>{value}</span>
  </div>
);

export default CompanyGroupCard;
