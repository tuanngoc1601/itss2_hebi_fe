import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { TbAtom2 } from "react-icons/tb";

const StatusDropdownFilter = () => {
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
                <TbAtom2 className="text-xl mr-1" />
                <span style={{ width: "110.15px" }}>Tất cả trạng thái</span>
                <FaChevronDown className="text-navActive text-lg ms-1" />
            </button>
            {/* dropdown */}
            {isOpen && (
                <div ref={dropdownRef} className="absolute z-10 mt-2 origin-top bg-white rounded-lg shadow w-60">
                    <ul className="h-30 px-3 pb-3 overflow-y-auto text-sm text-gray-700 mt-2">
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="all"
                                    type="radio"
                                    value="all"
                                    name="status"
                                    hidden
                                />
                                <label
                                    htmlFor="all"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Tất cả trạng thái
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="dangtuyen"
                                    type="radio"
                                    value="dangtuyen"
                                    name="status"
                                    hidden
                                />
                                <label
                                    htmlFor="dangtuyen"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Đang tuyển
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="dungtuyen"
                                    type="radio"
                                    value="dungtuyen"
                                    name="status"
                                    hidden
                                />
                                <label
                                    htmlFor="dungtuyen"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Đã dừng tuyển
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default StatusDropdownFilter;
