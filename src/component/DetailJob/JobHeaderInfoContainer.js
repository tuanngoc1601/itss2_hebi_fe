const JobHeaderInfoContainer = () => {
  return (
    <div className="self-stretch relative h-[145px] text-left text-base text-darkslategray-100 font-lexend">
      <div className="absolute w-[calc(100%_+_0.33px)] top-[0px] right-[-0.33px] left-[0px] flex flex-col items-start justify-start pt-6 pb-0 pr-[94.33001708984375px] pl-0 box-border">
        <img
          className="relative w-[756.8px] h-[27.16px]"
          alt=""
          src="/vcs--fullstackbackend-developer-golangpython.svg"
        />
      </div>
      <div className="absolute w-[calc(100%_+_0.33px)] top-[82px] right-[-0.33px] left-[0px] flex flex-col items-start justify-start py-0 pr-[749.3300170898438px] pl-0 box-border">
        <img
          className="relative w-[102.29px] h-[15.86px]"
          alt=""
          src="/viettel-group.svg"
        />
      </div>
      <div className="absolute w-[calc(100%_-_469.34px)] top-[121px] right-[469.34px] left-[0px] flex flex-row items-center justify-start py-0 pr-[147.66000366210938px] pl-0 box-border">
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0"
          alt=""
          src="/svg1.svg"
        />
        <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
          <div className="relative [text-decoration:underline] leading-[24px] font-medium">
            Lên tới 2000$
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobHeaderInfoContainer;
