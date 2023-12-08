import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";

const LocationDropdownFilter = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef(null);

    const handleOptionsChange = (e) => {
        props.setLocation(e.target.value);
        setIsOpen(false);
    };

    React.useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
                // !dropdownRef.current.parentElement.firstElementChild
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div className="block">
            <button
                className="text-black bg-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center border shadow-md shadow-gray-200"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
            >
                <CiLocationOn className="text-xl mr-1" />
                <span style={{ width: "144.02px" }}>
                    {props.location !== ""
                        ? props.location
                        : "Tất cả tỉnh/thành phố"}
                </span>
                <FaChevronDown className="text-navActive text-lg ms-1" />
            </button>
            {/* dropdown */}
            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute z-10 mt-2 origin-top bg-white rounded-lg shadow w-60"
                >
                    <div className="p-3">
                        <div className="relative">
                            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                <IoIosSearch />
                            </div>
                            <input
                                type="text"
                                id="input-group-search"
                                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700">
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="all"
                                    type="radio"
                                    value=""
                                    name="city"
                                    hidden
                                    onChange={handleOptionsChange}
                                />
                                <label
                                    htmlFor="all"
                                    className="w-full flex items-center justify-between py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Tất cả tỉnh/thành phố
                                    {props.location === "" && (
                                        <span>
                                            <IoCheckmark className="text-lg text-green-400" />
                                        </span>
                                    )}
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="namdinh"
                                    type="radio"
                                    value="Nam Định"
                                    name="city"
                                    hidden
                                    onChange={handleOptionsChange}
                                />
                                <label
                                    htmlFor="namdinh"
                                    className="w-full flex items-center justify-between py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Nam Định
                                    {props.location === "Nam Định" && (
                                        <span>
                                            <IoCheckmark className="text-lg text-green-400" />
                                        </span>
                                    )}
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="hanoi"
                                    type="radio"
                                    value="Hà Nội"
                                    name="city"
                                    hidden
                                    onChange={handleOptionsChange}
                                />
                                <label
                                    htmlFor="hanoi"
                                    className="w-full flex items-center justify-between py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Hà Nội
                                    {props.location === "Hà Nội" && (
                                        <span>
                                            <IoCheckmark className="text-lg text-green-400" />
                                        </span>
                                    )}
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="haiduong"
                                    type="radio"
                                    value="Hải Dương"
                                    name="city"
                                    hidden
                                    onChange={handleOptionsChange}
                                />
                                <label
                                    htmlFor="haiduong"
                                    className="w-full flex items-center justify-between py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Hải Dương
                                    {props.location === "Hải Dương" && (
                                        <span>
                                            <IoCheckmark className="text-lg text-green-400" />
                                        </span>
                                    )}
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="bacninh"
                                    type="radio"
                                    value="Bắc Ninh"
                                    name="city"
                                    hidden
                                    onChange={handleOptionsChange}
                                />
                                <label
                                    htmlFor="bacninh"
                                    className="w-full flex items-center justify-between py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Bắc Ninh
                                    {props.location === "Bắc Ninh" && (
                                        <span>
                                            <IoCheckmark className="text-lg text-green-400" />
                                        </span>
                                    )}
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="haiphong"
                                    type="radio"
                                    value="Hải Phòng"
                                    name="city"
                                    hidden
                                    onChange={handleOptionsChange}
                                />
                                <label
                                    htmlFor="haiphong"
                                    className="w-full flex items-center justify-between py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Hải Phòng
                                    {props.location === "Hải Phòng" && (
                                        <span>
                                            <IoCheckmark className="text-lg text-green-400" />
                                        </span>
                                    )}
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LocationDropdownFilter;
