import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { iconFilter } from "../../../assets";

const MethodDropdownFilter = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef(null);

    const handleOptionsChange = (e) => {
        props.setMethod(e.target.value);
        setIsOpen(false);
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

    const methods =  [
                    {value:"all", display:"Tất cả phương thức"},
                    {value:"online", display:"Trực tuyến"},
                    {value:"offline", display:"Trực tiếp"},
                    {value:"hybrid", display:"Kết hợp"},];

    return (
        <div className="block">
            <button
                className="text-black bg-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center border shadow-md shadow-gray-200"
                type="button"
                style={{width: "240px", display:"flex", alignItems: "center", justifyContent: "space-between"}}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="inline-block">
                    <img src={iconFilter} alt="filter" className="w-5 mr-1" />
                </div>
                <span style={{ width: "150px", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 1, overflow: "hidden", textOverflow: "ellipsis",}}>
                {props.method === "all" ? methods[0].display : 
                props.method === "online" ? methods[1].display:
                props.method === "offline" ? methods[2].display:
                props.method === "hybrid" ? methods[3].display : methods[0].display
            }
                    </span>
                <FaChevronDown className="text-navActive text-lg ms-1" />
            </button>
            {/* dropdown */}
            {isOpen && (
                <div ref={dropdownRef} className="absolute z-10 mt-2 origin-top bg-white rounded-lg shadow w-60">
                    <ul className="px-3 pb-3 overflow-y-auto text-sm text-gray-700"
                    style={{ maxHeight: '300px' }}
                    >
                        {methods.map((method) => (
                            <li key={method.value}>
                                <div className="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                    <input
                                        id={method.value}
                                        type="radio"
                                        value={method.value}
                                        name="method"
                                        hidden
                                        onChange={handleOptionsChange}
                                    />
                                    <label
                                        htmlFor={method.value}
                                        className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                    >
                                        {method.display}
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

export default MethodDropdownFilter;
