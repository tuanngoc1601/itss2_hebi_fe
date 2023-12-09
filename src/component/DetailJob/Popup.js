import { useCallback } from "react";

const Popup = () => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    // Please sync "Lịch sủ gửi mail và thêm mail" to the project
  }, []);

  return (
    <div className="relative bg-white w-[241px] h-[134px] overflow-auto max-w-full max-h-full text-center text-sm text-black font-inter">
      <div
        className="absolute top-[0px] left-[0px] box-border w-[241px] h-11 overflow-hidden cursor-pointer border-[1px] border-solid border-black"
        onClick={onFrameContainerClick}
      >
        <div className="absolute top-[calc(50%_-_22px)] left-[calc(50%_-_116.5px)] font-medium flex items-center justify-center w-[233px] h-11">
          profile
        </div>
      </div>
      <div
        className="absolute top-[45px] left-[0px] box-border w-[241px] h-11 overflow-hidden cursor-pointer border-[1px] border-solid border-black"
        onClick={onFrameContainer1Click}
      >
        <div className="absolute top-[calc(50%_-_22px)] left-[calc(50%_-_116.5px)] font-medium flex items-center justify-center w-[233px] h-11">
          Lich su mail
        </div>
      </div>
      <div className="absolute top-[90px] left-[0px] box-border w-[241px] h-11 overflow-hidden border-[1px] border-solid border-black">
        <div className="absolute top-[calc(50%_-_22px)] left-[calc(50%_-_116.5px)] font-medium flex items-center justify-center w-[233px] h-11">
          ...
        </div>
      </div>
      <div className="absolute top-[225px] left-[0px] box-border w-[241px] h-11 overflow-hidden border-[1px] border-solid border-black">
        <div className="absolute top-[calc(50%_-_22px)] left-[calc(50%_-_116.5px)] font-medium flex items-center justify-center w-[233px] h-11">
          Bảo trị
        </div>
      </div>
      <div className="absolute top-[270px] left-[0px] box-border w-[241px] h-11 overflow-hidden border-[1px] border-solid border-black">
        <div className="absolute top-[calc(50%_-_22px)] left-[calc(50%_-_116.5px)] font-medium flex items-center justify-center w-[233px] h-11">
          Bất động sản
        </div>
      </div>
      <div className="absolute top-[315px] left-[0px] box-border w-[241px] h-11 overflow-hidden border-[1px] border-solid border-black">
        <div className="absolute top-[calc(50%_-_22px)] left-[calc(50%_-_116.5px)] font-medium flex items-center justify-center w-[233px] h-11">
          Côn nghệ thông tin
        </div>
      </div>
    </div>
  );
};

export default Popup;
