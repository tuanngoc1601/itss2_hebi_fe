import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { Logo, IconUser } from "../../assets";

const Header = () => {
    return (
        <header className="w-full h-20 bg-white shadow-md shadow-gray-300">
            <nav className="w-11/12 h-full flex justify-between items-center mx-auto">
                <div className="flex flex-row items-center">
                    <div className="">
                        <Link to="/">
                            <img src={Logo} alt="logo" className="w-28" />
                        </Link>
                    </div>
                    <div className="mx-4">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) =>
                                        [
                                            isActive ? "text-navActive" : "",
                                            "tracking-wider",
                                            "leading-5",
                                        ].join(" ")
                                    }
                                >
                                    Việc làm
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink
                                    to="/cong-ty"
                                    className={({ isActive }) =>
                                        [
                                            isActive ? "text-navActive" : "",
                                            "tracking-wider",
                                            "leading-5",
                                        ].join(" ")
                                    }
                                >
                                    Công ty
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/thuc-tap"
                                    className={({ isActive }) =>
                                        [
                                            isActive ? "text-navActive" : "",
                                            "tracking-wider",
                                            "leading-5",
                                        ].join(" ")
                                    }
                                >
                                    Tìm kiếm thực tập
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink
                                    to="/reviews"
                                    className={({ isActive }) =>
                                        [
                                            isActive ? "text-navActive" : "",
                                            "tracking-wider",
                                            "leading-5",
                                        ].join(" ")
                                    }
                                >
                                    Nhận xét
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-x-5">
                    <div className="cursor-pointer">
                        <img src={IconUser} alt="user" className="w-14" />
                    </div>
                    <p className="text-base font-medium leading-5 tracking-wider">Hoàng Xuân Bách</p>
                    {/* <span className="cursor-pointer text-navActive">
                        <FaChevronDown className="text-xl" />
                    </span> */}
                </div>
            </nav>
        </header>
    );
};

export default Header;
