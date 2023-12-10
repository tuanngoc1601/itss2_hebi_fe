import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { GiRoad } from "react-icons/gi";

const DistanceDropdownFilter = () => {
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
                style={{width: "240px", display:"flex", alignItems: "center", justifyContent: "space-between"}}
                onClick={() => setIsOpen(!isOpen)}
            >
                <GiRoad className="text-xl mr-1" />
                <span style={{ width: "150px", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 1, overflow: "hidden", textOverflow: "ellipsis",}}>Tất cả khoảng cách</span>
                <FaChevronDown className="text-navActive text-lg ms-1" />
            </button>
            {/* dropdown */}
            {isOpen && (
                <div ref={dropdownRef} className="absolute z-10 mt-2 origin-top bg-white rounded-lg shadow w-60">
                    <div className="p-3">
                        <div className="relative">
                            <input
                                type="text"
                                id="input-group-search"
                                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                placeholder="Mặc định địa chỉ nhà"
                            />
                            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                <CiLocationOn />
                            </div>
                        </div>
                        <div className="relative flex justify-center items-center gap-x-2 mt-3">
                            <input
                                type="text"
                                className="block w-16 p-2 px-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                placeholder="From"
                            />
                            <span>-</span>
                            <input
                                type="text"
                                className="block w-16 p-2 px-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                placeholder="To"
                            />
                            <span>km</span>
                        </div>
                    </div>
                    <ul className="px-3 pb-3 overflow-y-auto text-sm text-gray-700"
                    style={{ maxHeight: '300px' }}
                    >
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="all"
                                    type="radio"
                                    value="all"
                                    name="distance"
                                    hidden
                                />
                                <label
                                    htmlFor="all"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Tất cả khoảng cách
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="1"
                                    type="radio"
                                    value="1"
                                    name="distance"
                                    hidden
                                />
                                <label
                                    htmlFor="1"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    Dưới 1 km
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="3"
                                    type="radio"
                                    value="3"
                                    name="distance"
                                    hidden
                                />
                                <label
                                    htmlFor="3"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    1 - 3 km
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="6"
                                    type="radio"
                                    value="6"
                                    name="distance"
                                    hidden
                                />
                                <label
                                    htmlFor="6"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    3 - 6 km
                                </label>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <input
                                    id="9"
                                    type="radio"
                                    value="9"
                                    name="distance"
                                    hidden
                                />
                                <label
                                    htmlFor="9"
                                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                >
                                    6 - 9 km
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DistanceDropdownFilter;
