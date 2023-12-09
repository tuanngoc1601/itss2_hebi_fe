const JobImageContainer = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 pr-[0.000030517578125px] pl-0 gap-[4px]">
      <div className="w-[281.77px] flex flex-col items-start justify-start py-0 pr-[5.769989013671875px] pl-0 box-border">
        <div className="flex flex-row items-center justify-start">
          <img
            className="relative w-[276px] h-[184px] object-cover"
            alt=""
            src="/viettel026jpg@2x.png"
          />
        </div>
      </div>
      <div className="w-[281.78px] flex flex-col items-start justify-start py-0 pr-[5.779998779296875px] pl-0 box-border">
        <div className="flex flex-row items-center justify-start">
          <img
            className="relative w-[276px] h-[184px] object-cover"
            alt=""
            src="/viettel014jpg@2x.png"
          />
        </div>
      </div>
      <div className="w-[281.78px] flex flex-col items-start justify-start py-0 pr-[5.779998779296875px] pl-0 box-border relative">
        <div className="flex flex-row items-center justify-start z-[0]">
          <img
            className="relative w-[276px] h-[184px] object-cover"
            alt=""
            src="/viettel033jpg@2x.png"
          />
        </div>
        <img
          className="absolute my-0 mx-[!important] h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0.5] z-[1]"
          alt=""
          src="/divimgoverlay.svg"
        />
        <div className="my-0 mx-[!important] absolute h-[6.17%] w-[6.03%] top-[46.91%] right-[43.61%] bottom-[46.91%] left-[50.36%] flex flex-col items-start justify-start z-[2]">
          <img
            className="relative w-[16.99px] h-[11.36px]"
            alt=""
            src="/2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default JobImageContainer;
