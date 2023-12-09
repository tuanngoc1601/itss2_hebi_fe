import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";

const TypeDropdownFilter = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef(null);

    const handleOptionsChange = (e) => {
        props.setType(e.target.value);
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

    const types = ["Tất cả hình thức", "Toàn thời gian", "Bán thời gian"];

    return (
        <div className="block">
            <button
                className="text-black bg-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center border shadow-md shadow-gray-200"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
            >
                <BiNotepad className="text-xl mr-1" />
                <span style={{ width: "108.9px" }}>
                {props.type !== 'Tất cả lĩnh vực' ?  props.type: types[0]}
                    </span>
                <FaChevronDown className="text-navActive text-lg ms-1" />
            </button>
            {/* dropdown */}
            {isOpen && (
                <div ref={dropdownRef} className="absolute z-10 mt-2 origin-top bg-white rounded-lg shadow w-60">
                    <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700">
                        {types.map((type) => (
                            <li key={type}>
                                <div className="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                    <input
                                        id={type}
                                        type="radio"
                                        value={type}
                                        name="type"
                                        hidden
                                        onChange={handleOptionsChange}
                                    />
                                    <label
                                        htmlFor={type}
                                        className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                    >
                                        {type}
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

export default TypeDropdownFilter;
