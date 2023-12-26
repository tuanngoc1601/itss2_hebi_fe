import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";

const LocationDropdownFilter = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [cities, setCities] = useState([
    {
      province_id: "00",
      province_name: "Tất cả tỉnh/thành phố",
      province_type: "",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = React.useRef(null);

  const handleOptionsChange = (e) => {
    props.setLocation(e.target.value);
    setIsOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://vapi.vnappmob.com/api/province/");
        const data = await response.json();

        setCities([
          {
            province_id: "00",
            province_name: "Tất cả tỉnh/thành phố",
            province_type: "",
          },
          ...data.results,
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Gọi fetchData chỉ khi cities rỗng
    if (cities.length === 1) {
      fetchData();
    }
  }, [cities]);

  const filteredCities = cities.filter((city) =>
    city.province_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="block">
      <button
        className="text-black bg-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center border shadow-md shadow-gray-200"
        type="button"
        style={{
          width: "220px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiLocationOn className="text-xl mr-1" />
        <span
          style={{
            width: "150px",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props.location !== "all" ? props.location : cities[0].province_name}
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
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <ul
            className="px-3 pb-3 overflow-y-auto text-sm text-gray-700"
            style={{ maxHeight: "300px" }}
          >
            {filteredCities.map((city) => (
              <li key={city.index}>
                <div className="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                  <label className="w-full flex items-center justify-between py-2 ms-2 text-sm font-medium text-gray-900 rounded">
                    <input
                      type="radio"
                      value={
                        city.province_name === "Tất cả tỉnh/thành phố"
                          ? "all"
                          : city.province_name
                      }
                      name="city"
                      hidden
                      onChange={handleOptionsChange}
                    />

                    {city.province_name}

                    {props.location === city.province_name && (
                      <span>
                        <IoCheckmark className="text-lg text-green-400" />
                      </span>
                    )}
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

export default LocationDropdownFilter;
