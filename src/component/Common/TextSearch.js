import React from "react";
import { IoIosSearch } from "react-icons/io";

const TextSearch = ({ title, setTitle }) => {

    const handleSearchChange = (e) => {
        setTitle(e.target.value);
    };

    console.log(title);

    return (
        <div className="block">
            <div className="relative">
                <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center pl-3 pointer-events-none">
                    <IoIosSearch className="text-gray-500" />
                </div>
                <input
                    type="text"
                    id="input-group-search"
                    className="text-black bg-white focus:outline-none font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center border shadow-md shadow-gray-200 w-220"
                    placeholder="Search"
                    onChange={handleSearchChange}
                />
            </div>
        </div>

    )
}

export default TextSearch;