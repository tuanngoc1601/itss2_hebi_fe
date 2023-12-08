import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const SpecializedDropdownFilter = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef(null);

    React.useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
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
                <HiOutlineShoppingBag className="text-xl mr-1" />
                <span style={{ width: "114.98px" }}>Tất cả các ngành</span>
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
                                    value="all"
                                    name="specialized"
                                    hidden
                                />
                                <label
                                    htmlFor="all"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Tất cả ngành nghề
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="antoanlaodong"
                                    type="radio"
                                    value="antoanlaodong"
                                    name="specialized"
                                    hidden
                                />
                                <label
                                    htmlFor="antoanlaodong"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    An toàn lao động
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="banhangkythuat"
                                    type="radio"
                                    value="banhangkythuat"
                                    name="specialized"
                                    hidden
                                />
                                <label
                                    htmlFor="banhangkythuat"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Bán hàng kỹ thuật
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="banlebansi"
                                    type="radio"
                                    value="banlebansi"
                                    name="specialized"
                                    hidden
                                />
                                <label
                                    htmlFor="banlebansi"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Bán lẻ / Bán sỉ
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="baochitruyenhinh"
                                    type="radio"
                                    value="baochitruyenhinh"
                                    name="specialized"
                                    hidden
                                />
                                <label
                                    htmlFor="baochitruyenhinh"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Báo chí / Truyền hình
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="baohiem"
                                    type="radio"
                                    value="baohiem"
                                    name="specialized"
                                    hidden
                                />
                                <label
                                    htmlFor="baohiem"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Bảo hiểm
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SpecializedDropdownFilter;
