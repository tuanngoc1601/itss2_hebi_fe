import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";

const SalaryDropdownFilter = () => {
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
                <AiOutlineDollar className="text-xl mr-1" />
                <span style={{ width: "116.91px" }}>Tất cả mức lương</span>
                <FaChevronDown className="text-navActive text-lg ms-1" />
            </button>
            {/* dropdown */}
            {isOpen && (
                <div ref={dropdownRef} className="absolute z-10 mt-2 origin-top bg-white rounded-lg shadow w-60">
                    <div className="p-3">
                        <div className="relative flex justify-center items-center gap-x-2">
                            <input
                                type="text"
                                className="block w-16 p-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                placeholder="From"
                            />
                            <span>-</span>
                            <input
                                type="text"
                                className="block w-16 p-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                placeholder="To"
                            />
                            <span>triệu</span>
                        </div>
                    </div>
                    <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700">
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="all"
                                    type="radio"
                                    value="all"
                                    name="salary"
                                    hidden
                                />
                                <label
                                    htmlFor="all"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Tất cả mức lương
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="2"
                                    type="radio"
                                    value="2"
                                    name="salary"
                                    hidden
                                />
                                <label
                                    htmlFor="2"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Dưới 2 triệu
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="4"
                                    type="radio"
                                    value="4"
                                    name="salary"
                                    hidden
                                />
                                <label
                                    htmlFor="4"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    2 - 4 triệu
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="6"
                                    type="radio"
                                    value="6"
                                    name="salary"
                                    hidden
                                />
                                <label
                                    htmlFor="6"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    4 - 6 triệu
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="8"
                                    type="radio"
                                    value="8"
                                    name="salary"
                                    hidden
                                />
                                <label
                                    htmlFor="8"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    6 - 8 triệu
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SalaryDropdownFilter;
