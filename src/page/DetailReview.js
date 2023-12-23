import React, { useState, useEffect } from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import ReviewStar from "../component/Reviews/ReviewStar";
import Comment from "../component/Reviews/Comment";
import Editor from "../component/Common/Editor";
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";
import { IconUser } from "../assets";

const DetailReview = () => {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");

    useEffect(() => {
        setEditorLoaded(true);
    }, []);

    return (
        <div className="w-full flex flex-col">
            <Header />
            <div className="w-7/12 flex flex-row items-start mx-auto mt-10">
                <div className="w-1/6 flex flex-col justify-center items-center">
                    <button className="w-35 h-35 flex flex-row justify-center items-center rounded-full border">
                        <IoCaretUpSharp />
                    </button>
                    <span className="my-2">109</span>
                    <button className="w-35 h-35 flex flex-row justify-center items-center rounded-full border">
                        <IoCaretDownSharp />
                    </button>
                </div>
                <div className="w-5/6 flex flex-col justify-center items-center">
                    <div className="w-full border rounded-md">
                        <div className="w-full h-14 flex flex-row justify-between items-center border-b bg-reviewBg px-4">
                            <div className="flex flex-row items-center gap-x-2">
                                <img src={IconUser} alt="" className="w-8" />
                                <span className="font-semibold">
                                    Người dùng ẩn danh
                                </span>
                            </div>
                            <span className="font-light">2 tháng trước</span>
                        </div>
                        <div className="flex flex-col items-start justify-center px-4 bg-white">
                            <div className="flex flex-col my-4 gap-y-1">
                                <h5 className="text-base font-semibold">
                                    Heading
                                </h5>
                                <p className="text-base font-light">
                                    chị AV - Phòng kinh doanh có tên là P lắm,
                                    đã đẹp người rồi tính cách cũng đẹp nữa.
                                    Chưa nạt nhân viên BAO GIỜ, chị mở block em
                                    đi hihi love u
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-start gap-y-2">
                                <ReviewStar title={"Lương/Quyền lợi"} />
                                <ReviewStar title={"Work-life balance"} />
                                <ReviewStar title={"Quản lý"} />
                                <ReviewStar title={"Đào tạo"} />
                                <ReviewStar title={"Văn phòng làm việc"} />
                                <ReviewStar title={"Cơ hội thăng tiến"} />
                            </div>
                        </div>
                        <div className="mt-10">
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>
                    </div>
                    <span className="text-sky-400 hover:underline cursor-pointer my-4">
                        Xem thêm
                    </span>
                    <Editor
                        name="description"
                        onChange={(data) => {
                            setData(data);
                        }}
                        editorLoaded={editorLoaded}
                        value={data}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DetailReview;
