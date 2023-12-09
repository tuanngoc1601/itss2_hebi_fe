const JobContainerFormFilter = () => {
  return (
    <div className="w-[844px] flex flex-col items-start justify-start gap-[8px] text-left text-sm text-black font-lexend">
      <div className="self-stretch relative h-[25.8px]">
        <div className="absolute top-[5.8px] left-[0px] overflow-hidden flex flex-row items-center justify-start">
          <img
            className="flex-1 relative max-w-full overflow-hidden h-4"
            alt=""
            src="/frame1.svg"
          />
        </div>
        <img
          className="absolute top-[7.49px] left-[26.05px] w-[269.48px] h-[15.81px]"
          alt=""
          src="/lm-vic-ti-h-ni--other-ha-noi.svg"
        />
        <div className="absolute top-[calc(50%_-_9.1px)] left-[301.2px] flex flex-row items-start justify-start pt-0 px-0 pb-1">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/svg2.svg"
          />
        </div>
      </div>
      <div className="w-[386.66px] flex flex-row items-end justify-start py-0 pr-[289.6000061035156px] pl-0 box-border text-darkslategray-100">
        <div className="flex flex-col items-start justify-center pt-[1.7899999618530273px] px-0 pb-[0.009999275207519531px]">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/svg3.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-[1.05999755859375px] pl-2">
          <div className="relative leading-[14px]">{`Số lượng tuyển dụng : 5 TTS  `}</div>
        </div>
      </div>
      <div className="relative w-[491.64px] h-6 text-base text-gainsboro-300 font-font-awesome-5-free">
        <div className="absolute top-[4px] left-[0px] leading-[16px]"></div>
        <div className="absolute top-[0px] left-[16px] leading-[24px] text-gray-100 font-quicksand">
          <span>{`  `}</span>
          <span className="font-medium">{`Lĩnh vực:  Dịch vụ `}</span>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[674.8500366210938px] pl-0 gap-[8.48px] text-base font-inter">
        <div className="overflow-hidden flex flex-row items-center justify-start">
          <img
            className="flex-1 relative max-w-full overflow-hidden h-4"
            alt=""
            src="/frame2.svg"
          />
        </div>
        <div className="relative flex items-center w-[233px] h-[15px] shrink-0">
          Thời gian thực tập : 2 tháng
        </div>
        <img
          className="relative w-[152.47px] h-[16.19px] hidden"
          alt=""
          src="/ng-24-ngy-trc.svg"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-2 px-0 pb-0">
        <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[674.8500366210938px] pl-0 gap-[8.48px]">
          <div className="overflow-hidden flex flex-row items-center justify-start">
            <img
              className="flex-1 relative max-w-full overflow-hidden h-4"
              alt=""
              src="/frame3.svg"
            />
          </div>
          <img
            className="relative w-[152.47px] h-[16.19px]"
            alt=""
            src="/ng-24-ngy-trc1.svg"
          />
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
      <div className="self-stretch flex flex-row items-start justify-start pt-2 px-0 pb-0 text-center">
        <div className="relative w-[110px] h-7 overflow-hidden shrink-0">
          <div className="absolute top-[0px] left-[6px] rounded-3xs bg-gainsboro-400 w-[98px] h-7" />
          <div className="absolute top-[4.21px] left-[13px] leading-[14px] flex items-center justify-center w-[84px] h-[18px]">
            Online
          </div>
        </div>
        <div className="relative w-[110px] h-7 overflow-hidden shrink-0">
          <div className="absolute top-[0px] left-[6px] rounded-3xs bg-gainsboro-400 w-[98px] h-7" />
          <div className="absolute top-[4.21px] left-[13px] leading-[14px] flex items-center justify-center w-[84px] h-[18px]">
            Part time
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobContainerFormFilter;
