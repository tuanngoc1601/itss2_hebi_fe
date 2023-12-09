import { useCallback } from "react";

const CompanyGroupCard = () => {
  const onDivdFlexContainer1Click = useCallback(() => {
    // Please sync "Company detail" to the project
  }, []);

  return (
    <div className="relative rounded-lg bg-white shadow-[0px_6px_32px_rgba(0,_0,_0,_0.08)] w-[422.66px] h-[433.8px] text-left text-lg text-gray-300 font-lexend">
      <div className="absolute w-[calc(100%_-_40px)] top-[164px] right-[20px] left-[20px] flex flex-col items-start justify-start py-0 pr-[215.66000366210938px] pl-0 box-border">
        <img
          className="relative w-[165.96px] h-[11.52px]"
          alt=""
          src="/show-us-your-way.svg"
        />
      </div>
      <div className="absolute w-[calc(100%_-_40px)] top-[204px] right-[20px] left-[20px] flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-2 px-0 pb-[9px] border-b-[1px] border-dashed border-gainsboro-200">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-[67.33000183105469px] pl-0 box-border max-w-[382.6600036621094px]">
            <img
              className="relative w-[122.43px] h-[15.73px]"
              alt=""
              src="/quy-m-cng-ty.svg"
            />
          </div>
          <div className="self-stretch flex-1 flex flex-col items-end justify-start py-0 pr-0 pl-[64.72650146484375px] box-border max-w-[382.6600036621094px]">
            <img
              className="relative w-[124.29px] h-[12.5px]"
              alt=""
              src="/1000-nhn-vin.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-2 px-0 pb-[7px] border-b-[1px] border-dashed border-gainsboro-200">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0.5 pb-0 pr-[120.33000183105469px] pl-0 box-border max-w-[382.6600036621094px]">
            <img
              className="relative w-[68.15px] h-[18.51px]"
              alt=""
              src="/quc-gia.svg"
            />
          </div>
          <div className="self-stretch flex-1 flex flex-col items-end justify-start py-0 pr-0 pl-[101.52999877929688px] box-border max-w-[382.6600036621094px]">
            <div className="flex flex-row items-start justify-start pt-[3.799999952316284px] px-0 pb-0 gap-[4.1px]">
              <div className="overflow-hidden flex flex-row items-center justify-end">
                <img
                  className="flex-1 relative max-w-full overflow-hidden h-5"
                  alt=""
                  src="/frame.svg"
                />
              </div>
              <img
                className="relative w-[64.34px] h-[12.5px]"
                alt=""
                src="/vietnam.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-2 px-0 pb-[9px] border-b-[1px] border-dashed border-gainsboro-200">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-[49.33000183105469px] pl-0 box-border max-w-[382.6600036621094px]">
            <img
              className="relative w-[140.29px] h-[16.19px]"
              alt=""
              src="/thi-gian-lm-vic.svg"
            />
          </div>
          <div className="self-stretch flex-1 flex flex-col items-end justify-start py-0 pr-0 pl-[92.67272186279297px] box-border max-w-[382.6600036621094px]">
            <img
              className="relative w-[97.64px] h-[12.67px]"
              alt=""
              src="/th-2--th-6.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[370px] left-[6px] w-[417px] h-10 flex flex-row flex-wrap items-start justify-start py-2 px-0 box-border">
        <div className="flex-1 h-6 max-w-[406.6600036621094px]" />
      </div>
      <div
        className="absolute w-[calc(100%_-_40px)] top-[13px] right-[20px] left-[20px] flex flex-row items-start justify-start py-0 pr-[128.66000366210938px] pl-0 box-border cursor-pointer"
        onClick={onDivdFlexContainer1Click}
      >
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
            <b className="relative leading-[27px]">Viettel Group</b>
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

export default CompanyGroupCard;
