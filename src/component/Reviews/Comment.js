import React from "react";
import { IconUser } from "../../assets";

const Comment = () => {
    return (
        <div>
            <div className="w-full h-12 flex flex-row justify-between items-center border-y bg-reviewBg ps-12 pe-4">
                <div className="flex flex-row items-center gap-x-2">
                    <img src={IconUser} alt="" className="w-8" />
                    <span className="font-semibold">Người dùng ẩn danh</span>
                </div>
                <span className="font-light">2 tháng trước</span>
            </div>
            <div className="flex flex-col my-4 gap-y-1 ps-12 pe-4">
                <h5 className="text-base font-semibold">Heading</h5>
                <p className="text-base font-light">
                    chị AV - Phòng kinh doanh có tên là P lắm, đã đẹp người rồi
                    tính cách cũng đẹp nữa. Chưa nạt nhân viên BAO GIỜ, chị mở
                    block em đi hihi love u
                </p>
            </div>
        </div>
    );
};

export default Comment;
