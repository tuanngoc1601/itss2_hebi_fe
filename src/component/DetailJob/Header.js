import { useState, useCallback } from "react";
import Popup from "./Popup";
import PortalPopup from "./PortalPopup";

const Header = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const onItemLinkClick = useCallback(() => {
    // Please sync "Tìm kiếm from công ty" to the project
  }, []);

  const onItemLink1Click = useCallback(() => {
    // Please sync "Review_Find" to the project
  }, []);

  const onCngTyTextClick = useCallback(() => {
    // Please sync "Review_Find" to the project
  }, []);

  const onTmKimThcClick = useCallback(() => {
    // Please sync "Review_Find" to the project
  }, []);

  const onReviewTextClick = useCallback(() => {
    // Please sync "Tìm kiếm review" to the project
  }, []);

  const openPopup = useCallback(() => {
    setPopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setPopupOpen(false);
  }, []);

  return (
    <>
      <section className="absolute top-[0px] left-[0px] bg-white box-border w-[1920px] flex flex-col items-center justify-start pt-0 px-0 pb-px min-h-[50px] text-left text-sm text-darkslategray-200 font-inter border-b-[1px] border-solid border-whitesmoke">
        <div className="relative w-[1920px] h-20">
          <div className="absolute w-[calc(100%_-_1277px)] top-[0px] right-[1011px] left-[266px] flex flex-row items-start justify-start py-4 px-[5px] box-border">
            <div
              className="w-[89.78px] flex flex-col items-start justify-start py-3.5 pr-[14.779998779296875px] pl-[15px] box-border cursor-pointer text-darkorchid"
              onClick={onItemLinkClick}
            >
              <div className="relative tracking-[0.23px] leading-[20px] font-semibold inline-block max-w-[60px]">
                Việc làm
              </div>
            </div>
            <div
              className="w-[84.72px] flex flex-col items-start justify-start py-3.5 pr-[14.720001220703125px] pl-[15px] box-border cursor-pointer"
              onClick={onItemLink1Click}
            >
              <div
                className="relative tracking-[0.23px] leading-[20px] font-semibold inline-block max-w-[55px] cursor-pointer"
                onClick={onCngTyTextClick}
              >
                Công ty
              </div>
            </div>
            <div className="w-[161px] flex flex-col items-start justify-start py-3.5 pr-[14.720001220703125px] pl-[15px] box-border">
              <div
                className="relative tracking-[0.23px] leading-[20px] font-semibold flex items-center w-[138px] cursor-pointer"
                onClick={onTmKimThcClick}
              >
                Tìm kiếm thực tập
              </div>
            </div>
            <div className="w-64 h-[62px] flex flex-col items-start justify-start py-3.5 pr-[14.720001220703125px] pl-[15px] box-border">
              <div
                className="relative tracking-[0.23px] leading-[20px] font-semibold flex items-center w-[138px] cursor-pointer"
                onClick={onReviewTextClick}
              >
                Review
              </div>
            </div>
            <div className="w-[251px]" />
          </div>
          <div className="absolute w-[calc(100%_-_1438.98px)] top-[0px] right-[-0.02px] left-[1439px] h-20 text-gray-200">
            <div className="absolute top-[15px] left-[232.02px] rounded-md bg-white shadow-[0px_10px_40px_rgba(0,_0,_0,_0.03)] h-14 flex flex-row items-center justify-start py-[18px] pr-[32.97999572753906px] pl-11 box-border">
              <div className="overflow-hidden flex flex-col items-start justify-start py-0 pr-[21.020004272460938px] pl-0 z-[0]">
                <div className="relative leading-[20px] font-medium">Ten</div>
              </div>
              <div
                className="absolute my-0 mx-[!important] h-full top-[1.79%] right-[1px] bottom-[-1.79%] w-[45px] cursor-pointer z-[1]"
                onClick={openPopup}
              >
                <div className="absolute h-[1.79%] w-[2.22%] top-[46.43%] right-[56.67%] bottom-[51.79%] left-[41.11%]">
                  <div className="absolute top-[-5px] left-[-8px] w-[18px] h-3 flex flex-col items-start justify-start pt-0 px-0 pb-px box-border">
                    <img
                      className="relative w-[18px] h-[11px] overflow-hidden shrink-0"
                      alt=""
                      src="/image.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute top-[14px] left-[217px] w-[50px] h-[49px] object-cover"
              alt=""
              src="/image-14@2x.png"
            />
          </div>
          <img
            className="absolute top-[7px] left-[179px] w-[107px] h-[76px] object-cover"
            alt=""
            src="/image-17@2x.png"
          />
        </div>
      </section>
      {isPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopup}
        >
          <Popup onClose={closePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
