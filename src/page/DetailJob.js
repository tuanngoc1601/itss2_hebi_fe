import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import CompanyGroupCard from "../component/DetailJob/CompanyGroupCard";
import JobHeaderInfoContainer from "../component/DetailJob//JobHeaderInfoContainer";
import JobImageContainer from "../component/DetailJob//JobImageContainer";
import JobContainerFormFilter from "../component/DetailJob//JobContainerFormFilter";
import DescriptionContainer from "../component/DetailJob//DescriptionContainer";
import Header from "../component/DetailJob/Header";

const DetailJob = () => {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      default:
        // Handle other cases if needed
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div className="relative bg-white w-full h-[1888px] overflow-hidden">
      <div className="absolute top-[1809px] left-[354px] w-[1170px] h-[79px]">
        <div className="absolute w-[calc(100%_-_195px)] top-[0px] right-[195px] left-[0px] h-[91px] flex flex-col items-start justify-start pt-0 px-[15px] pb-2 box-border min-h-[1px]">
          <div className="self-stretch" />
        </div>
        <div className="absolute top-[12px] left-[0px] w-[1151px] h-[33px] overflow-hidden">
          <div className="absolute top-[3px] left-[466px] flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
            <img
              className="relative w-[227.13px] h-[13.58px]"
              alt=""
              src="/strong--ta-fs--goldseason-s-47-nguyn-tun-pthanh-xun-trung-qthanh-xun-h-ni.svg"
            />
          </div>
          <div className="absolute top-[5px] left-[44px] flex flex-col items-start justify-start py-0 pr-1.5 pl-0">
            <img
              className="relative w-[120.38px] h-[17.69px]"
              alt=""
              src="/strong--ta-fs--goldseason-s-47-nguyn-tun-pthanh-xun-trung-qthanh-xun-h-ni1.svg"
            />
          </div>
          <img
            className="absolute top-[9.66px] left-[calc(50%_+_376.86px)] w-[197.27px] h-[13.36px]"
            alt=""
            src="/-vietnam-all-rights-reserved.svg"
          />
          <img
            className="absolute top-[3px] left-[9px] w-[26px] h-[25px] object-cover"
            alt=""
            src="/image-1@2x.png"
          />
          <img
            className="absolute top-[0px] left-[433px] w-[25px] h-[25px] object-cover"
            alt=""
            src="/image-2@2x.png"
          />
        </div>
      </div>
      <div className="absolute w-full top-[1785px] right-[38px] left-[-38px] box-border h-[34px] border-t-[1px] border-solid border-gainsboro-100" />
      <div className="absolute top-[1809px] left-[354px] w-[1170px] h-[79px]" />
      <main className="absolute top-[0px] left-[14px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1921px] h-[1780px] overflow-hidden text-left text-base text-gray-100 font-font-awesome-5-free">
        <div className="absolute top-[47px] left-[calc(50%_+_173.5px)] w-[791px] h-[260px] flex flex-col items-start justify-start max-w-[1340px]">
          <div className="relative w-[491.64px] h-6">
            <div className="absolute top-[4px] left-[0px] leading-[16px]">
              
            </div>
            <div className="absolute top-[0px] left-[16px] leading-[24px] font-quicksand">{` Dịch vụ `}</div>
            <div className="absolute top-[4px] left-[83.78px] leading-[16px]">
              
            </div>
            <div className="absolute top-[0px] left-[108.15px] leading-[24px] font-quicksand">
              10-40
            </div>
          </div>
        </div>
        <div className="absolute top-[82px] left-[calc(50%_+_353.67px)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] h-[394px] overflow-hidden flex flex-col items-end justify-start p-4 box-border">
          <CompanyGroupCard />
        </div>
        <div className="absolute h-[calc(100%_-_1180px)] w-[calc(100%_-_1027px)] top-[93px] right-[773px] bottom-[1087px] left-[254px] rounded-lg bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-start pt-0 px-5 pb-3 box-border">
          <JobHeaderInfoContainer />
        </div>
        <div className="absolute top-[307px] left-[254px] rounded-t-none rounded-b-lg bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[893px] h-[466px] flex flex-col items-start justify-start pt-4 px-5 pb-[35.99998474121094px] box-border gap-[24px] text-[15px] text-forestgreen font-lexend">
          <JobImageContainer />
          <JobContainerFormFilter />
          <div className="w-[865px] h-[17px] flex flex-col items-end justify-end pt-2 px-0 pb-0 box-border gap-[10px]">
            <div className="relative leading-[16px] flex items-center w-[142px] h-[17px] shrink-0">
              Đang tuyển dụng
            </div>
            <div className="self-stretch relative h-[21px] hidden">
              <img
                className="absolute top-[9.43px] left-[1.37px] w-[57.55px] h-[13.79px]"
                alt=""
                src="/ng-24-ngy-trc.svg"
              />
              <div className="absolute top-[0px] left-[76.59px] flex flex-row items-start justify-start py-0 pr-[4.4499969482421875px] pl-0">
                <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] px-[11px] border-[1px] border-solid border-gainsboro-200">
                  <img
                    className="relative w-[38.97px] h-[11.64px]"
                    alt=""
                    src="/ng-24-ngy-trc.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[0px] left-[144.05px] flex flex-row items-start justify-start py-0 pr-[4.340000152587891px] pl-0">
                <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] px-[11px] border-[1px] border-solid border-gainsboro-200">
                  <img
                    className="relative w-[27.39px] h-[8.52px]"
                    alt=""
                    src="/ng-24-ngy-trc.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[0px] left-[199.39px] rounded-xl bg-white flex flex-row items-center justify-center py-[5px] px-[11px] border-[1px] border-solid border-gainsboro-200">
                <img
                  className="relative w-[40.54px] h-[11.64px]"
                  alt=""
                  src="/ng-24-ngy-trc.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <DescriptionContainer />
        <img
          className="absolute top-[19px] left-[1636px] w-[50px] h-[49px] object-cover"
          alt=""
          src="/image-14@2x.png"
        />
        <Header />
      </main>
    </div>
  );
};

export default DetailJob;
