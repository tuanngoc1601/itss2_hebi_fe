import { useCallback } from "react";

const DescriptionContainer = () => {
  const onDivcolMd8ContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='divcolMd6']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="absolute w-[calc(100%_-_1027px)] top-[801px] right-[770px] left-[257px] rounded-lg bg-white shadow-[0px_6px_32px_rgba(0,_0,_0,_0.08)] h-[513px] text-left text-3xl text-gray-300 font-lexend">
      <div className="absolute w-[calc(100%_-_39.67px)] top-[24px] right-[19.67px] left-[20px] flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[538.3300170898438px] pl-0">
          <b className="relative leading-[33px] inline-block max-w-[853.3300170898438px]">
            3 Lý do để gia nhập công ty
          </b>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-[18px] text-base">
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[688.3300170898438px] pl-0">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px] max-h-[28.799999237060547px]">
              Dẫn đầu thị trường
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[529.3300170898438px] pl-0">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px] max-h-[28.799999237060547px]">
              Cơ hội thử thách và phát triển bản thân
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[592.3300170898438px] pl-0">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px] max-h-[28.799999237060547px]">
              Môi trường làm việc năng động
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_39.67px)] top-[159.39px] right-[19.67px] left-[20px] box-border h-px border-b-[1px] border-dashed border-white" />
      <div className="absolute w-[calc(100%_-_39.67px)] top-[180.39px] right-[19.67px] left-[20px] h-[349.77px]">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[675.3300170898438px] pl-0 box-border">
          <b className="relative leading-[33px] inline-block max-w-[853.3300170898438px]">
            Mô tả công việc
          </b>
        </div>
        <div className="absolute w-full top-[33px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[1.33001708984375px] pl-0 box-border text-base">
          <div className="relative leading-[28.8px] inline-block max-w-[853.3300170898438px]">
            <p className="m-0">
              Công ty An Ninh Mạng Viettel (VCS) là đơn vị tập trung thực hiện,
              nghiên cứu, phát triển chuyên sâu các sản
            </p>
            <p className="m-0">
              phẩm, giải pháp An toàn thông tin, đồng thời cung cấp sản phẩm,
              dịch vụ ATTT cho các tổ chức doanh nghiệp
            </p>
            <p className="m-0">lớn trong và ngoài nước.</p>
          </div>
        </div>
      </div>
      <img
        className="absolute w-[calc(100%_-_39.67px)] top-[328px] right-[31.5px] left-[8.17px] max-w-full overflow-hidden h-0.5"
        alt=""
        src="/divborderbottomdashed.svg"
      />
      <div className="absolute w-[calc(100%_-_40px)] top-[355px] right-[21px] left-[19px] h-[411px] flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[651.3300170898438px] pl-0">
          <b className="relative leading-[33px] inline-block max-w-[853.3300170898438px]">
            Yêu cầu công việc
          </b>
        </div>
        <div className="self-stretch relative h-[575.94px] text-base">
          <div className="absolute w-[calc(100%_-_17.67px)] top-[0px] right-[-0.33px] left-[18px] flex flex-col items-start justify-start py-0 pr-[8.33001708984375px] pl-0 box-border">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px]">
              <p className="m-0">
                Tốt nghiệp Đại học chính quy loại Khá trở lên chuyên ngành: Công
                nghệ thông tin, Khoa học máy tính, Toán
              </p>
              <p className="m-0">
                - Tin, Điện tử viễn thông,... hoặc các chuyên ngành kỹ thuật
                khác liên quan.
              </p>
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_17.67px)] top-[57.6px] right-[-0.33px] left-[18px] flex flex-col items-start justify-start py-0 pr-[431.33001708984375px] pl-0 box-border">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px] max-h-[28.799999237060547px]">
              Trình độ tiếng Anh tương đương tối thiểu 550 TOEIC.
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_17.67px)] top-[86.39px] right-[-0.33px] left-[18px] flex flex-col items-start justify-start py-0 pr-[522.3300170898438px] pl-0 box-border">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px] max-h-[28.799999237060547px]">
              Từ 2 năm kinh nghiệm lập trình backend.
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_17.67px)] top-[143.99px] right-[-0.33px] left-[18px]" />
        </div>
      </div>
      <div className="absolute w-[calc(100%_-_39.67px)] top-[1200.09px] right-[19.67px] left-[20px] box-border h-px border-b-[1px] border-dashed border-white" />
      <div className="absolute w-[calc(100%_-_39.67px)] top-[1221.09px] right-[19.67px] left-[20px] h-[813.33px] text-base">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[394.33001708984375px] pl-0 box-border text-3xl">
          <b className="relative leading-[33px] inline-block max-w-[853.3300170898438px]">
            Tại sao bạn sẽ yêu thích làm việc tại đây
          </b>
        </div>
        <div className="absolute w-full top-[33px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[780.3300170898438px] pl-0 box-border text-lg">
          <b className="relative leading-[27px] inline-block max-w-[853.3300170898438px]">
            Đãi ngộ
          </b>
        </div>
        <div className="absolute w-full top-[60px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[679.3300170898438px] pl-0 box-border">
          <b className="relative leading-[28.8px] inline-block max-w-[853.3300170898438px] max-h-[28.799999237060547px]">
            # Dẫn đầu thị trường
          </b>
        </div>
        <div className="absolute w-full top-[88.8px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-0 pl-[18px] box-border">
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[23.33001708984375px] pl-0">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px]">
              <p className="m-0">
                Cơ hội được làm việc tại Tập đoàn tiên phong mở đường , kiến tạo
                tương lai thông minh, gắn kết của Việt
              </p>
              <p className="m-0">Nam.</p>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[251.33001708984375px] pl-0 mt-[-0.41px]">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px] max-h-[28.799999237060547px]">
              Cơ hội được thử sức trong những lĩnh vực công nghệ tiên tiến, hiện
              đại nhất.
            </div>
          </div>
        </div>
        <div className="absolute w-full top-[191.19px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[576.3300170898438px] pl-0 box-border">
          <b className="relative leading-[28.8px] inline-block max-w-[853.3300170898438px] max-h-[28.799999237060547px]">
            # Môi trường năng động sáng tạo
          </b>
        </div>
        <div className="absolute w-full top-[219.99px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-0 pl-[18px] box-border">
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[4.33001708984375px] pl-0">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px]">
              <p className="m-0">
                Môi trường làm việc cởi mở và năng động, khuyến khích trao đổi ý
                tưởng ở mọi cấp, cho phép bạn làm việc,
              </p>
              <p className="m-0">sáng tạo theo cách riêng.</p>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[72.33001708984375px] pl-0 mt-[-0.41px]">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px] max-h-[28.799999237060547px]">
              Được khơi gợi cảm hứng làm việc với văn phòng xanh, không gian mở,
              hiện đại tiêu chuẩn quốc tế.
            </div>
          </div>
        </div>
        <div className="absolute w-full top-[322.38px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[589.3300170898438px] pl-0 box-border">
          <b className="relative leading-[28.8px] inline-block max-w-[853.3300170898438px] max-h-[28.799999237060547px]">
            # Cơ hội thử thách và phát triển
          </b>
        </div>
        <div className="absolute w-full top-[351.17px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-0 pl-[18px] box-border">
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[6.33001708984375px] pl-0">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px] max-h-[28.799999237060547px]">
              Áp dụng kiến thức, kĩ năng, kinh nghiệm chuyên môn giải quyết các
              bài toán hấp dẫn, thử thách tại Viettel.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[129.33001708984375px] pl-0">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px] max-h-[28.799999237060547px]">
              Cơ hội thử sức ở nhiều lĩnh vực, sản phẩm và quốc gia khác nhau
              góp phần thay đổi xã hội .
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[300.33001708984375px] pl-0">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px] max-h-[28.799999237060547px]">
              Viettel cam kết cho bạn nền tảng vững chắc để học hỏi và phát
              triển.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[355.33001708984375px] pl-0">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px] max-h-[28.799999237060547px]">
              Sẵn sàng trao quyền, cơ hội đột phá cho những người trẻ tuổi.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[255.33001708984375px] pl-0">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px] max-h-[28.799999237060547px]">
              Cơ hội học hỏi từ các chuyên gia hàng đầu, lãnh đạo và đồng nghiệp
              ưu tú.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[339.33001708984375px] pl-0">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px] max-h-[28.799999237060547px]">
              Cơ hội được đào tạo, trao dồi kĩ năng định kì và nhu cầu thực tế.
            </div>
          </div>
        </div>
        <div className="absolute w-full top-[539.95px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[530.3300170898438px] pl-0 box-border">
          <b className="relative leading-[28.8px] inline-block max-w-[853.3300170898438px] max-h-[28.799999237060547px]">
            # Chế ngộ đãi ngộ hấp dẫn, cạnh tranh
          </b>
        </div>
        <div className="absolute w-full top-[568.75px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-0 pl-[18px] box-border">
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[262.33001708984375px] pl-0">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px] max-h-[28.799999237060547px]">
              Lương thưởng cạnh tranh trên thị trường, phản ánh đúng năng lực
              thực tế.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[347.33001708984375px] pl-0">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px] max-h-[28.799999237060547px]">
              Được thư giãn, khơi nguồn sáng tạo với Happy Time mỗi ngày .
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[114.33001708984375px] pl-0">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px] max-h-[28.799999237060547px]">
              Thưởng thức bữa trưa thơm ngon tại Tập đoàn, được chọn lọc bởi các
              chuyên gia dinh dưỡng.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[191.33001708984375px] pl-0">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px] max-h-[28.799999237060547px]">
              Cơ hội tham gia gắn kết với tập thể, tổ chức với các hoạt động
              team building thú vị
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[203.33001708984375px] pl-0">
            <div className="relative leading-[28.8px] inline-block max-w-[835.3300170898438px] max-h-[28.799999237060547px]">
              Chế độ chăm sóc y tế đặc biệt cho CBNV và người thân với trang
              thiết bị hiện đại.
            </div>
          </div>
        </div>
        <div className="absolute w-full top-[728.74px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[806.3300170898438px] pl-0 box-border text-lg">
          <b className="relative leading-[27px] inline-block max-w-[853.3300170898438px]">
            Khác
          </b>
        </div>
        <div className="absolute w-full top-[755.74px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[28.33001708984375px] pl-0 box-border">
          <div className="relative leading-[28.8px] inline-block max-w-[853.3300170898438px]">
            <p className="m-0">
              Viettel tuyệt đối không thu bất cứ khoản tiền nào của ứng viên khi
              nộp hồ sơ tham gia dự tuyển và khi vào
            </p>
            <p className="m-0">làm việc tại Viettel nếu trúng tuyển</p>
          </div>
        </div>
      </div>
      <div
        className="absolute h-[calc(100%_+_341px)] w-full top-[530px] right-[-10px] bottom-[-871px] left-[10px] cursor-pointer"
        onClick={onDivcolMd8ContainerClick}
      >
        <div className="absolute w-[calc(100%_+_0.33px)] top-[13px] right-[-0.33px] left-[0px] flex flex-col items-start justify-start py-0 pr-[532.3300170898438px] pl-0 box-border">
          <b className="relative leading-[33px] inline-block max-w-[893.3300170898438px]">
            Việc làm tương tự dành cho bạn
          </b>
        </div>
        <div className="absolute w-[calc(100%_+_24.33px)] top-[46px] right-[-0.33px] left-[-24px] h-[1358.19px] text-sm text-darkslategray-100">
          <div
            className="absolute h-[calc(100%_-_1011.39px)] w-[calc(100%_-_458.67px)] top-[346.8px] right-[458.67px] bottom-[664.59px] left-[0px] max-w-[917.3300170898438px]"
            data-scroll-to="divcolMd6"
          />
          <div className="absolute w-[calc(100%_-_25px)] top-[19px] right-[13px] left-[12px] h-[1358.19px]">
            <div className="absolute top-[calc(50%_-_679.09px)] left-[0px] w-[458.66px] flex flex-col items-start justify-start p-3 box-border max-w-[917.3300170898438px]">
              <div className="self-stretch rounded-lg bg-linen shadow-[0px_6px_32px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start pt-[17px] px-px pb-px relative border-[1px] border-solid border-mistyrose">
                <div className="self-stretch relative h-[304.8px] z-[0]">
                  <div className="absolute w-[calc(100%_-_24px)] top-[0px] right-[12px] left-[12px] hidden flex-row items-center justify-between py-0 pr-[287.6600036621094px] pl-0 box-border text-darkgray">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[21px]">
                        Đăng 19 giờ trước
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[33px] right-[12px] left-[12px] overflow-hidden flex flex-col items-start justify-start py-0 pr-[16.660003662109375px] pl-0 box-border text-lg text-gray-300">
                    <div className="flex flex-row items-start justify-start">
                      <b className="relative leading-[27px]">
                        <p className="m-0">
                          Senior Backend Engineer (Golang, Python)
                        </p>
                        <p className="m-0">Upto 2500$</p>
                      </b>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[95px] right-[12px] left-[12px] flex flex-row items-center justify-start py-0 pr-[280.25px] pl-0 box-border">
                    <div className="rounded bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.06)] box-border w-[50px] h-[50px] flex flex-col items-start justify-start p-px border-[1px] border-solid border-gainsboro-200">
                      <div className="flex flex-row items-center justify-start">
                        <img
                          className="relative w-12 h-12 object-cover"
                          alt=""
                          src="/01o24colorsqjpg@2x.png"
                        />
                      </div>
                    </div>
                    <div className="w-[78.41px] flex flex-col items-start justify-start py-0 pr-0 pl-2 box-border">
                      <div className="flex flex-col items-start justify-start">
                        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                          <div className="relative leading-[21px]">
                            Outpost24
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[189px] right-[12px] left-[12px] box-border h-px border-t-[1px] border-dashed border-gainsboro-200" />
                  <div className="absolute w-[calc(100%_-_30.66px)] top-[230px] right-[17.66px] left-[13px] flex flex-row items-center justify-start py-0 pr-[674.8500366210938px] pl-0 box-border gap-[8.48px]">
                    <div className="overflow-hidden flex flex-row items-center justify-start">
                      <img
                        className="flex-1 relative max-w-full overflow-hidden h-4"
                        alt=""
                        src="/frame4.svg"
                      />
                    </div>
                    <img
                      className="relative w-[152.47px] h-[16.19px]"
                      alt=""
                      src="/ng-24-ngy-trc2.svg"
                    />
                  </div>
                  <div className="absolute w-[calc(100%_-_30.66px)] top-[230px] right-[17.66px] left-[13px] flex flex-row items-center justify-start py-0 pr-[674.8500366210938px] pl-0 box-border gap-[8.48px]">
                    <div className="overflow-hidden flex flex-row items-center justify-start">
                      <img
                        className="flex-1 relative max-w-full overflow-hidden h-4"
                        alt=""
                        src="/frame4.svg"
                      />
                    </div>
                    <img
                      className="relative w-[152.47px] h-[16.19px]"
                      alt=""
                      src="/ng-24-ngy-trc2.svg"
                    />
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[202px] right-[10px] left-[14px] flex flex-row items-center justify-start py-0 pr-[336.6600036621094px] pl-0 box-border">
                    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/svg4.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                      <div className="relative leading-[21px]">Ha Noi</div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[256.8px] right-[12px] left-[12px] hidden flex-row flex-wrap items-start justify-start py-0 pr-[180.5800018310547px] pl-0 box-border gap-[8px] text-xs">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] px-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">Python</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] pr-[10.110000610351562px] pl-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">
                          JavaScript
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[153px] right-[12.34px] left-[11.66px] flex flex-row items-center justify-start py-0 pr-[147.66000366210938px] pl-0 box-border text-base">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/svg5.svg"
                    />
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                      <div className="relative [text-decoration:underline] leading-[24px] font-medium">
                        Lên tới 2000$
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[257px] left-[274px] rounded-3xs bg-violet w-[130px] h-6" />
                  <div className="absolute top-[262px] left-[293px] [text-decoration:underline] leading-[14px] text-black">
                    Xem chi tiết
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[17px] right-[1px] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-royalblue w-[126.97px] hidden flex-row items-center justify-start py-1 pr-[11.970001220703125px] pl-3 box-border z-[1] text-white">
                  <div className="relative leading-[21px] font-semibold inline-block max-w-[103px] z-[0]">
                    NEW FOR YOU
                  </div>
                  <div className="absolute my-0 mx-[!important] top-[29px] left-[118.97px] w-2 h-2 z-[1]" />
                </div>
              </div>
            </div>
            <div className="absolute h-[calc(100%_-_1011.39px)] w-[calc(100%_-_458.67px)] top-[0px] right-[0.01px] bottom-[1011.39px] left-[458.66px] flex flex-col items-start justify-start p-3 box-border max-w-[917.3300170898438px]">
              <div className="self-stretch rounded-lg bg-linen shadow-[0px_6px_32px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start pt-[17px] px-px pb-px border-[1px] border-solid border-mistyrose">
                <div className="self-stretch relative h-[304.8px]">
                  <div className="absolute w-[calc(100%_-_24px)] top-[0px] right-[12px] left-[12px] hidden flex-row items-center justify-between py-0 pr-[275.6600036621094px] pl-0 box-border text-darkgray">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[21px]">
                        Đăng 17 ngày trước
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[33px] right-[12px] left-[12px] overflow-hidden flex flex-col items-start justify-start py-0 pr-[177.66000366210938px] pl-0 box-border text-lg text-gray-300">
                    <div className="flex flex-row items-start justify-start">
                      <b className="relative leading-[27px]">
                        <p className="m-0">Senior Backend Engineer</p>
                        <p className="m-0">(Python/Golang/Java)</p>
                      </b>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[95px] right-[12px] left-[12px] flex flex-row items-center justify-start py-0 pr-[259.6600036621094px] pl-0 box-border">
                    <div className="rounded bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.06)] box-border w-[50px] h-[50px] flex flex-col items-start justify-start p-px border-[1px] border-solid border-gainsboro-200">
                      <div className="flex flex-row items-center justify-start">
                        <img
                          className="relative w-12 h-12 object-cover"
                          alt=""
                          src="/screen20shot202020070320at204432420pmpng@2x.png"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                      <div className="flex flex-col items-start justify-start">
                        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                          <div className="relative leading-[21px]">
                            VINBIGDATA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[153px] right-[12px] left-[12px] flex flex-row items-center justify-start py-0 pr-[147.66000366210938px] pl-0 box-border text-base">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/svg6.svg"
                    />
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                      <div className="relative [text-decoration:underline] leading-[24px] font-medium">
                        Lên tới 2000$
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[189px] right-[12px] left-[12px] box-border h-px border-t-[1px] border-dashed border-gainsboro-200" />
                  <div className="absolute w-[calc(100%_-_24px)] top-[198px] right-[11.66px] left-[12.34px] flex flex-row items-center justify-start py-0 pr-[336.6600036621094px] pl-0 box-border">
                    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/svg7.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                      <div className="relative leading-[21px]">Ha Noi</div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[256.8px] right-[12px] left-[12px] hidden flex-row flex-wrap items-start justify-start py-0 pr-[214.83999633789062px] pl-0 box-border gap-[8px] text-xs">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] px-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">Python</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] px-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">Java</div>
                      </div>
                    </div>
                    <div className="self-stretch" />
                  </div>
                  <div className="absolute w-[calc(100%_-_6.66px)] top-[230px] right-[-6.68px] left-[13.34px] flex flex-row items-center justify-start py-0 pr-[674.8500366210938px] pl-0 box-border gap-[8.48px]">
                    <div className="overflow-hidden flex flex-row items-center justify-start">
                      <img
                        className="flex-1 relative max-w-full overflow-hidden h-4"
                        alt=""
                        src="/frame5.svg"
                      />
                    </div>
                    <img
                      className="relative w-[152.47px] h-[16.19px]"
                      alt=""
                      src="/ng-24-ngy-trc3.svg"
                    />
                  </div>
                  <div className="absolute top-[254px] left-[234.34px] rounded-3xs bg-violet w-[130px] h-6" />
                  <div className="absolute top-[260px] left-[252.34px] leading-[14px] text-black">
                    Xem chi tiết
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[calc(100%_-_1011.39px)] w-[calc(100%_-_434.33px)] top-[347.1px] right-[434.33px] bottom-[664.29px] left-[0px] flex flex-col items-start justify-start p-3 box-border max-w-[917.3300170898438px]">
              <div className="self-stretch rounded-lg bg-linen shadow-[0px_6px_32px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start pt-[17px] px-px pb-px relative border-[1px] border-solid border-mistyrose">
                <div className="self-stretch relative h-[304.8px] z-[0]">
                  <div className="absolute w-[calc(100%_-_24.34px)] top-[0px] right-[12.34px] left-[12px] hidden flex-row items-center justify-between py-0 pr-[287.6600036621094px] pl-0 box-border text-darkgray">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[21px]">
                        Đăng 23 giờ trước
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24.34px)] top-[33px] right-[12.34px] left-[12px] overflow-hidden flex flex-col items-start justify-start py-0 pr-[141.66000366210938px] pl-0 box-border text-lg text-gray-300">
                    <div className="flex flex-row items-start justify-start">
                      <b className="relative leading-[27px]">
                        <p className="m-0">Remote Sr Backend Engineer</p>
                        <p className="m-0">(Python/NodeJS)</p>
                      </b>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24.34px)] top-[95px] right-[12.34px] left-[12px] flex flex-row items-center justify-start py-0 pr-[278.6600036621094px] pl-0 box-border">
                    <div className="rounded bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.06)] box-border w-[50px] h-[50px] flex flex-col items-start justify-start p-px border-[1px] border-solid border-gainsboro-200">
                      <div className="flex flex-row items-center justify-start">
                        <img
                          className="relative w-12 h-12 object-cover"
                          alt=""
                          src="/176346402020lam20tranpng@2x.png"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                      <div className="flex flex-col items-start justify-start">
                        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                          <div className="relative leading-[21px]">
                            Resola Inc
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24.34px)] top-[153px] right-[12.34px] left-[12px] flex flex-row items-center justify-start py-0 pr-[147.66000366210938px] pl-0 box-border text-base">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/ng-24-ngy-trc.svg"
                    />
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                      <div className="relative [text-decoration:underline] leading-[24px] font-medium">
                        Đăng nhập để xem mức lương
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24.34px)] top-[189px] right-[12.34px] left-[12px] box-border h-px border-t-[1px] border-dashed border-gainsboro-200" />
                  <div className="absolute w-[calc(100%_-_24.34px)] top-[202px] right-[12.34px] left-[12px] flex flex-row items-end justify-start py-0 pr-[287.6000061035156px] pl-0 box-border">
                    <div className="flex flex-col items-start justify-center pt-[1.7899999618530273px] px-0 pb-[0.009999275207519531px]">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/ng-24-ngy-trc.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-[1.05999755859375px] pl-2">
                      <div className="relative leading-[14px]">
                        Tại văn phòng
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24.34px)] top-[223.79px] right-[12.34px] left-[12px] flex flex-row items-center justify-start py-0 pr-[242.66000366210938px] pl-0 box-border">
                    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/ng-24-ngy-trc.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                      <div className="relative leading-[21px]">
                        Ha Noi - Ho Chi Minh
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24.34px)] top-[256.79px] right-[12.34px] left-[12px] flex flex-row flex-wrap items-start justify-start py-0 pr-[196.6300048828125px] pl-0 box-border gap-[8px] text-xs">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] px-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">Python</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] pr-[10.05999755859375px] pl-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">Django</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] px-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">NodeJS</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[17px] right-[1.34px] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-royalblue w-[126.97px] hidden flex-row items-center justify-start py-1 pr-[11.970001220703125px] pl-3 box-border z-[1] text-white">
                  <div className="relative leading-[21px] font-semibold inline-block max-w-[103px] z-[0]">
                    NEW FOR YOU
                  </div>
                  <div className="absolute my-0 mx-[!important] top-[29px] left-[118.97px] w-2 h-2 z-[1]" />
                </div>
              </div>
            </div>
            <div className="absolute h-[calc(100%_-_1011.39px)] w-[calc(100%_-_458.67px)] top-[346.8px] right-[0.01px] bottom-[664.59px] left-[458.66px] flex flex-col items-start justify-start p-3 box-border max-w-[917.3300170898438px]">
              <div className="self-stretch rounded-lg bg-white shadow-[0px_6px_32px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start pt-4 px-0 pb-0 relative">
                <div className="self-stretch relative h-[306.8px] z-[0]">
                  <div className="absolute w-[calc(100%_-_24px)] top-[0px] right-[12px] left-[12px] hidden flex-row items-center justify-between py-0 pr-[284.6600036621094px] pl-0 box-border text-darkgray">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[21px]">
                        Đăng 1 ngày trước
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[33px] right-[12px] left-[12px] overflow-hidden flex flex-col items-start justify-start py-0 pr-[27.660003662109375px] pl-0 box-border text-lg text-gray-300">
                    <div className="flex flex-row items-start justify-start">
                      <b className="relative leading-[27px]">
                        <p className="m-0">
                          VHT - Kỹ sư Phát triển phần mềm (Linux/
                        </p>
                        <p className="m-0">Golang/ C++)</p>
                      </b>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[95px] right-[12px] left-[12px] flex flex-row items-center justify-start py-0 pr-[262.25px] pl-0 box-border">
                    <div className="rounded bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.06)] box-border w-[50px] h-[50px] flex flex-col items-start justify-start p-px border-[1px] border-solid border-gainsboro-200">
                      <div className="flex flex-row items-center justify-start">
                        <img
                          className="relative w-12 h-12 object-cover"
                          alt=""
                          src="/176346402020lam20tranpng@2x.png"
                        />
                      </div>
                    </div>
                    <div className="w-[98.41px] flex flex-col items-start justify-start py-0 pr-0 pl-2 box-border">
                      <div className="flex flex-col items-start justify-start">
                        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                          <div className="relative leading-[21px]">
                            Viettel Group
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[153px] right-[12px] left-[12px] flex flex-row items-center justify-start py-0 pr-[149.66000366210938px] pl-0 box-border text-base">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/ng-24-ngy-trc.svg"
                    />
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                      <div className="relative [text-decoration:underline] leading-[24px] font-medium">
                        Đăng nhập để xem mức lương
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[189px] right-[12px] left-[12px] box-border h-px border-t-[1px] border-dashed border-gainsboro-200" />
                  <div className="absolute w-[calc(100%_-_24px)] top-[202px] right-[12px] left-[12px] flex flex-row items-end justify-start py-0 pr-[289.6000061035156px] pl-0 box-border">
                    <div className="flex flex-col items-start justify-center pt-[1.7899999618530273px] px-0 pb-[0.009999275207519531px]">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/ng-24-ngy-trc.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-[1.05999755859375px] pl-2">
                      <div className="relative leading-[14px]">
                        Tại văn phòng
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[223.79px] right-[12px] left-[12px] flex flex-row items-center justify-start py-0 pr-[244.66000366210938px] pl-0 box-border">
                    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/ng-24-ngy-trc.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                      <div className="relative leading-[21px]">
                        Ha Noi - Ho Chi Minh
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[256.79px] right-[12px] left-[12px] flex flex-row flex-wrap items-start justify-start py-0 pr-[232.64999389648438px] pl-0 box-border gap-[8px] text-xs">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] pr-[10.34000015258789px] pl-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">C++</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] px-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">Linux</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] px-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">Golang</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[16px] right-[0.01px] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-darkorange w-[54.45px] hidden flex-row items-center justify-start py-1 pr-[11.450000762939453px] pl-3 box-border z-[1] text-white">
                  <div className="relative leading-[21px] font-semibold inline-block max-w-[31px] z-[0]">
                    HOT
                  </div>
                  <div className="absolute my-0 mx-[!important] top-[29px] left-[46.45px] w-2 h-2 z-[1]" />
                </div>
              </div>
            </div>
            <div className="absolute h-[calc(100%_-_1011.39px)] w-[calc(100%_-_458.67px)] top-[693.59px] right-[458.67px] bottom-[317.8px] left-[0px] flex flex-col items-start justify-start p-3 box-border max-w-[917.3300170898438px]">
              <div className="self-stretch rounded-lg bg-linen shadow-[0px_6px_32px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start pt-[17px] px-px pb-px relative border-[1px] border-solid border-mistyrose">
                <div className="self-stretch relative h-[304.8px] z-[0]">
                  <div className="absolute w-[calc(100%_-_24px)] top-[0px] right-[12px] left-[12px] flex flex-row items-center justify-between py-0 pr-[282.6600036621094px] pl-0 box-border text-darkgray">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[21px]">
                        Đăng 3 ngày trước
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[33px] right-[12px] left-[12px] overflow-hidden flex flex-col items-start justify-start py-0 pr-[52.660003662109375px] pl-0 box-border text-lg text-gray-300">
                    <div className="flex flex-row items-start justify-start">
                      <b className="relative leading-[27px]">
                        <p className="m-0">
                          [Work in Philippines] DevOps Engineer
                        </p>
                        <p className="m-0">(Linux, Python)</p>
                      </b>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[95px] right-[12px] left-[12px] flex flex-row items-center justify-start py-0 pr-[157.52000427246094px] pl-0 box-border">
                    <div className="rounded bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.06)] box-border w-[50px] h-[50px] flex flex-col items-start justify-start p-px border-[1px] border-solid border-gainsboro-200">
                      <div className="flex flex-row items-center justify-start">
                        <img
                          className="relative w-12 h-12 object-cover"
                          alt=""
                          src="/176346402020lam20tranpng@2x.png"
                        />
                      </div>
                    </div>
                    <div className="w-[201.14px] flex flex-col items-start justify-start py-0 pr-0 pl-2 box-border">
                      <div className="flex flex-col items-start justify-start">
                        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                          <div className="relative leading-[21px]">
                            ISMART.ASIA TECHNOLOGY
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[153px] right-[12px] left-[12px] flex flex-row items-center justify-start py-0 pr-[147.66000366210938px] pl-0 box-border text-base">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/ng-24-ngy-trc.svg"
                    />
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                      <div className="relative [text-decoration:underline] leading-[24px] font-medium">
                        Đăng nhập để xem mức lương
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[189px] right-[12px] left-[12px] box-border h-px border-t-[1px] border-dashed border-gainsboro-200" />
                  <div className="absolute w-[calc(100%_-_24px)] top-[202px] right-[12px] left-[12px] flex flex-row items-end justify-start py-0 pr-[287.6000061035156px] pl-0 box-border">
                    <div className="flex flex-col items-start justify-center pt-[1.7999999523162842px] px-0 pb-0">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/ng-24-ngy-trc.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-[1.05999755859375px] pl-2">
                      <div className="relative leading-[14px]">
                        Tại văn phòng
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[223.8px] right-[12px] left-[12px] flex flex-row items-center justify-start py-0 pr-[168.66000366210938px] pl-0 box-border">
                    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/ng-24-ngy-trc.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                      <div className="relative leading-[21px]">
                        Ho Chi Minh - Ha Noi - Da Nang
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[256.8px] right-[12px] left-[12px] flex flex-row flex-wrap items-start justify-start py-0 pr-[208.22000122070312px] pl-0 box-border gap-[8px] text-xs">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] pr-[10.470001220703125px] pl-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">DevOps</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] px-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">Python</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] px-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">Linux</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute my-0 mx-[!important] top-[17px] right-[1px] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-crimson w-[122.02px] h-[29px] z-[1] text-white">
                  <img
                    className="absolute top-[calc(50%_-_7.5px)] left-[12px] w-3 h-[15px] overflow-hidden"
                    alt=""
                    src="/ng-24-ngy-trc.svg"
                  />
                  <div className="absolute top-[5px] left-[28px] leading-[21px] font-semibold">
                    SUPER HOT
                  </div>
                  <div className="absolute top-[29px] left-[114.02px] w-2 h-2" />
                </div>
              </div>
            </div>
            <div className="absolute h-[calc(100%_-_1011.39px)] w-[calc(100%_-_458.67px)] top-[693.59px] right-[0.01px] bottom-[317.8px] left-[458.66px] flex flex-col items-start justify-start p-3 box-border max-w-[917.3300170898438px]">
              <div className="self-stretch rounded-lg bg-white shadow-[0px_6px_32px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start pt-4 px-0 pb-0 relative">
                <div className="self-stretch relative h-[306.8px] z-[0]">
                  <div className="absolute w-[calc(100%_-_24px)] top-[0px] right-[12px] left-[12px] flex flex-row items-center justify-between py-0 pr-[284.6600036621094px] pl-0 box-border text-darkgray">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[21px]">
                        Đăng 3 ngày trước
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[33px] right-[12px] left-[12px] overflow-hidden flex flex-col items-start justify-start py-0 pr-[84.66000366210938px] pl-0 box-border text-lg text-gray-300">
                    <b className="relative leading-[27px] inline-block max-w-[410.6600036621094px]">
                      Senior AI Engineer (Python/C/C++)
                    </b>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[68px] right-[12px] left-[12px] flex flex-row items-center justify-start py-0 pr-[316.5px] pl-0 box-border">
                    <div className="rounded bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.06)] box-border w-[50px] h-[50px] flex flex-col items-start justify-start p-px border-[1px] border-solid border-gainsboro-200">
                      <div className="flex flex-row items-center justify-start">
                        <img
                          className="relative w-12 h-12 object-cover"
                          alt=""
                          src="/176346402020lam20tranpng@2x.png"
                        />
                      </div>
                    </div>
                    <div className="w-[44.16px] flex flex-col items-start justify-start py-0 pr-0 pl-2 box-border">
                      <div className="flex flex-col items-start justify-start">
                        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                          <div className="relative leading-[21px]">Asilla</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[126px] right-[12px] left-[12px] flex flex-row items-center justify-start py-0 pr-[149.66000366210938px] pl-0 box-border text-base">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/ng-24-ngy-trc.svg"
                    />
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                      <div className="relative [text-decoration:underline] leading-[24px] font-medium">
                        Đăng nhập để xem mức lương
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[162px] right-[12px] left-[12px] box-border h-px border-t-[1px] border-dashed border-gainsboro-200" />
                  <div className="absolute w-[calc(100%_-_24px)] top-[175px] right-[12px] left-[12px] flex flex-row items-end justify-start py-0 pr-[289.6000061035156px] pl-0 box-border">
                    <div className="flex flex-col items-start justify-center pt-[1.7999999523162842px] px-0 pb-0">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/ng-24-ngy-trc.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-[1.05999755859375px] pl-2">
                      <div className="relative leading-[14px]">
                        Tại văn phòng
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[196.8px] right-[12px] left-[12px] flex flex-row items-center justify-start py-0 pr-[338.6600036621094px] pl-0 box-border">
                    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/ng-24-ngy-trc.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                      <div className="relative leading-[21px]">Ha Noi</div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[229.8px] right-[12px] left-[12px] flex flex-row flex-wrap items-start justify-start py-0 pr-[198.83001708984375px] pl-0 box-border gap-[8px] text-xs">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] px-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">Python</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] pr-[10.34000015258789px] pl-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">C++</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] pr-[10.519996643066406px] pl-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">
                          C language
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[16px] right-[0.01px] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-darkorange w-[54.45px] flex flex-row items-center justify-start py-1 pr-[11.450000762939453px] pl-3 box-border z-[1] text-white">
                  <div className="relative leading-[21px] font-semibold inline-block max-w-[31px] z-[0]">
                    HOT
                  </div>
                  <div className="absolute my-0 mx-[!important] top-[29px] left-[46.45px] w-2 h-2 z-[1]" />
                </div>
              </div>
            </div>
            <div className="absolute h-[calc(100%_-_1040.39px)] w-[calc(100%_-_458.67px)] top-[1040.39px] right-[458.67px] bottom-[0px] left-[0px] flex flex-col items-start justify-start p-3 box-border max-w-[917.3300170898438px]">
              <div className="self-stretch rounded-lg bg-white shadow-[0px_6px_32px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start pt-4 px-0 pb-0 relative">
                <div className="self-stretch relative h-[277.8px] z-[0]">
                  <div className="absolute w-[calc(100%_-_24px)] top-[0px] right-[12px] left-[12px] flex flex-row items-center justify-between py-0 pr-[282.6600036621094px] pl-0 box-border text-darkgray">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[21px]">
                        Đăng 4 ngày trước
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[33px] right-[12px] left-[12px] overflow-hidden flex flex-col items-start justify-start py-0 pr-[173.66000366210938px] pl-0 box-border text-lg text-gray-300">
                    <b className="relative leading-[27px] inline-block max-w-[410.6600036621094px]">
                      Python Backend Engineer
                    </b>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[68px] right-[12px] left-[12px] flex flex-row items-center justify-start py-0 pr-[172.32000732421875px] pl-0 box-border">
                    <div className="rounded bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.06)] box-border w-[50px] h-[50px] flex flex-col items-start justify-start p-px border-[1px] border-solid border-gainsboro-200">
                      <div className="flex flex-row items-center justify-start">
                        <img
                          className="relative w-12 h-12 object-cover"
                          alt=""
                          src="/176346402020lam20tranpng@2x.png"
                        />
                      </div>
                    </div>
                    <div className="w-[188.34px] flex flex-col items-start justify-start py-0 pr-0 pl-2 box-border">
                      <div className="flex flex-col items-start justify-start">
                        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                          <div className="relative leading-[21px]">
                            GFT Technologies Vietnam
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[126px] right-[12px] left-[12px] flex flex-row items-center justify-start py-0 pr-[149.66000366210938px] pl-0 box-border text-base">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/ng-24-ngy-trc.svg"
                    />
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                      <div className="relative [text-decoration:underline] leading-[24px] font-medium">
                        Đăng nhập để xem mức lương
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[162px] right-[12px] left-[12px] box-border h-px border-t-[1px] border-dashed border-gainsboro-200" />
                  <div className="absolute w-[calc(100%_-_24px)] top-[175px] right-[12px] left-[12px] flex flex-row items-end justify-start py-0 pr-[289.6000061035156px] pl-0 box-border">
                    <div className="flex flex-col items-start justify-center pt-[1.7999999523162842px] px-0 pb-0">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/ng-24-ngy-trc.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-[1.05999755859375px] pl-2">
                      <div className="relative leading-[14px]">
                        Tại văn phòng
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[196.8px] right-[12px] left-[12px] flex flex-row items-center justify-start py-0 pr-[244.66000366210938px] pl-0 box-border">
                    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/ng-24-ngy-trc.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                      <div className="relative leading-[21px]">
                        Ho Chi Minh - Ha Noi
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[229.8px] right-[12px] left-[12px] flex flex-row flex-wrap items-start justify-start py-0 pr-[231.5800018310547px] pl-0 box-border gap-[8px] text-xs">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] px-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">Python</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] px-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">Java</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] pr-[10.25px] pl-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">AWS</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[16px] right-[0.01px] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-darkorange w-[54.45px] flex flex-row items-center justify-start py-1 pr-[11.450000762939453px] pl-3 box-border z-[1] text-white">
                  <div className="relative leading-[21px] font-semibold inline-block max-w-[31px] z-[0]">
                    HOT
                  </div>
                  <div className="absolute my-0 mx-[!important] top-[29px] left-[46.46px] w-2 h-2 z-[1]" />
                </div>
              </div>
            </div>
            <div className="absolute h-[calc(100%_-_1040.39px)] w-[calc(100%_-_458.67px)] top-[1040.39px] right-[0.01px] bottom-[0px] left-[458.66px] flex flex-col items-start justify-start p-3 box-border max-w-[917.3300170898438px]">
              <div className="self-stretch rounded-lg bg-white shadow-[0px_6px_32px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start pt-4 px-0 pb-0 relative">
                <div className="self-stretch relative h-[277.8px] z-[0]">
                  <div className="absolute w-[calc(100%_-_24px)] top-[0px] right-[12px] left-[12px] flex flex-row items-center justify-between py-0 pr-[283.6600036621094px] pl-0 box-border text-darkgray">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[21px]">
                        Đăng 9 ngày trước
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[33px] right-[12px] left-[12px] overflow-hidden flex flex-col items-start justify-start py-0 pr-[33.660003662109375px] pl-0 box-border text-lg text-gray-300">
                    <b className="relative leading-[27px] inline-block max-w-[410.6600036621094px]">
                      Software Engineer (Python/C++) ~ 2000$
                    </b>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[68px] right-[12px] left-[12px] flex flex-row items-center justify-start py-0 pr-[316.5px] pl-0 box-border">
                    <div className="rounded bg-white shadow-[0px_4px_20px_rgba(0,_0,_0,_0.06)] box-border w-[50px] h-[50px] flex flex-col items-start justify-start p-px border-[1px] border-solid border-gainsboro-200">
                      <div className="flex flex-row items-center justify-start">
                        <img
                          className="relative w-12 h-12 object-cover"
                          alt=""
                          src="/176346402020lam20tranpng@2x.png"
                        />
                      </div>
                    </div>
                    <div className="w-[44.16px] flex flex-col items-start justify-start py-0 pr-0 pl-2 box-border">
                      <div className="flex flex-col items-start justify-start">
                        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                          <div className="relative leading-[21px]">Asilla</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[126px] right-[12px] left-[12px] flex flex-row items-center justify-start py-0 pr-[149.66000366210938px] pl-0 box-border text-base">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/ng-24-ngy-trc.svg"
                    />
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                      <div className="relative [text-decoration:underline] leading-[24px] font-medium">
                        Đăng nhập để xem mức lương
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[162px] right-[12px] left-[12px] box-border h-px border-t-[1px] border-dashed border-gainsboro-200" />
                  <div className="absolute w-[calc(100%_-_24px)] top-[175px] right-[12px] left-[12px] flex flex-row items-end justify-start py-0 pr-[289.6000061035156px] pl-0 box-border">
                    <div className="flex flex-col items-start justify-center pt-[1.7999999523162842px] px-0 pb-0">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/ng-24-ngy-trc.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-[1.05999755859375px] pl-2">
                      <div className="relative leading-[14px]">
                        Tại văn phòng
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[196.8px] right-[12px] left-[12px] flex flex-row items-center justify-start py-0 pr-[338.6600036621094px] pl-0 box-border">
                    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/ng-24-ngy-trc.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-0 pl-2">
                      <div className="relative leading-[21px]">Ha Noi</div>
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_24px)] top-[229.8px] right-[12px] left-[12px] flex flex-row flex-wrap items-start justify-start py-0 pr-[233.6800079345703px] pl-0 box-border gap-[8px] text-xs">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] px-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">Python</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] px-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">Linux</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="rounded-xl bg-white flex flex-row items-center justify-center py-[5px] pr-[10.34000015258789px] pl-[11px] border-[1px] border-solid border-gainsboro-200">
                        <div className="relative leading-[18px]">C++</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[16px] right-[0.01px] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-darkorange w-[54.45px] flex flex-row items-center justify-start py-1 pr-[11.450000762939453px] pl-3 box-border z-[1] text-white">
                  <div className="relative leading-[21px] font-semibold inline-block max-w-[31px] z-[0]">
                    HOT
                  </div>
                  <div className="absolute my-0 mx-[!important] top-[29px] left-[46.45px] w-2 h-2 z-[1]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionContainer;
