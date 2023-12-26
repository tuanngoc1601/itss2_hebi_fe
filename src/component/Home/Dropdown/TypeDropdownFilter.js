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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const types = [
    { value: "all", display: "Tất cả hình thức" },
    { value: "fulltime", display: "Toàn thời gian" },
    { value: "parttime", display: "Bán thời gian" },
  ];

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
        <BiNotepad className="text-xl mr-1" />
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
          {props.type === "all"
            ? types[0].display
            : props.type === "fulltime"
            ? types[1].display
            : props.type === "parttime"
            ? types[2].display
            : types[0].display}
        </span>
        <FaChevronDown className="text-navActive text-lg ms-1" />
      </button>
      {/* dropdown */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 mt-2 origin-top bg-white rounded-lg shadow w-60"
        >
          <ul
            className="px-3 pb-3 overflow-y-auto text-sm text-gray-700"
            style={{ maxHeight: "300px" }}
          >
            {types.map((type) => (
              <li key={type.value}>
                <div className="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                  <input
                    id={type.value}
                    type="radio"
                    value={type.value}
                    name="type"
                    hidden
                    onChange={handleOptionsChange}
                  />
                  <label
                    htmlFor={type.value}
                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                  >
                    {type.display}
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
