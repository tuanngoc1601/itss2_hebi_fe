import React,{useState}from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const SpecializedDropdownFilter = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = React.useRef(null);


    const handleOptionsChange = (e) => {
        props.setSpecialized(e.target.value);
        setIsOpen(false);
    };
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
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

    // Your array of companies
    const specializeds = ["Tất cả ngành nghề","An toàn lao động","Bán hàng kỹ thuật","Bán lẻ/ bán sỉ","Báo cáo / truyền hình", "Bảo hiểm","Quản trị", "Bất động sản","Công nghệ thông tin","Hành chính","Kế toán","Kinh doanh","Marketing","Nhân sự","Tư vấn",];
    const filteredSpecializeds = specializeds.filter((specialized) =>
    specialized.toLowerCase().includes(searchTerm.toLowerCase())
);

    return (
        <div className="block">
            <button
                className="text-black bg-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center border shadow-md shadow-gray-200"
                type="button"
                style={{ width: "240px",  display: "flex", alignItems: "center", justifyContent: "space-between" }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <HiOutlineShoppingBag className="text-xl mr-1" />
                <span style={{ width: "150px", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 1, overflow: "hidden", textOverflow: "ellipsis",}}>
                {props.specialized !== "all" ?  props.specialized: specializeds[0]}
                </span>
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
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                    <ul className="px-3 pb-3 overflow-y-auto text-sm text-gray-700"
                    style={{ maxHeight: '300px' }}
                    >
                        {filteredSpecializeds.map((specialized) => (
                            <li key={specialized}>
                                <div className="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                    <input
                                        id={specialized}
                                        type="radio"
                                        value={specialized === "Tất cả ngành nghề"? "all" : specialized}
                                        name="specialized"
                                        hidden
                                        onChange={handleOptionsChange}
                                    />
                                    <label
                                        htmlFor={specialized}
                                        className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                    >
                                        {specialized}
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SpecializedDropdownFilter;
