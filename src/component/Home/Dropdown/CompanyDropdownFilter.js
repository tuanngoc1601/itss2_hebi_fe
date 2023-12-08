import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { BiHomeCircle } from "react-icons/bi";

const CompanyDropdownFilter = () => {
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
                <BiHomeCircle className="text-xl mr-1" />
                <span style={{ width: "95.86px" }}>Tất cả công ty</span>
                <FaChevronDown className="text-navActive text-lg ms-1" />
            </button>
            {/* dropdown */}
            {isOpen && (
                <div ref={dropdownRef} className="absolute z-10 mt-2 origin-top bg-white rounded-lg shadow w-60">
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
                                    name="company"
                                    hidden
                                />
                                <label
                                    htmlFor="all"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Tất cả công ty
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="Samsung"
                                    type="radio"
                                    value="Samsung"
                                    name="company"
                                    hidden
                                />
                                <label
                                    htmlFor="Samsung"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Samsung
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="Facebook"
                                    type="radio"
                                    value="Facebook"
                                    name="company"
                                    hidden
                                />
                                <label
                                    htmlFor="Facebook"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Facebook
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="Apple"
                                    type="radio"
                                    value="Apple"
                                    name="company"
                                    hidden
                                />
                                <label
                                    htmlFor="Apple"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Apple
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="Space-X"
                                    type="radio"
                                    value="Space-X"
                                    name="company"
                                    hidden
                                />
                                <label
                                    htmlFor="Space-X"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Space-X
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="Sun"
                                    type="radio"
                                    value="Sun"
                                    name="company"
                                    hidden
                                />
                                <label
                                    htmlFor="Sun"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Sun*
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CompanyDropdownFilter;
