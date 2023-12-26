import React from "react";
import { CiTimer } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

const TimeDropdownFilter = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [timeDisplay, setTimeDisplay] = React.useState("Tất cả thời gian");
  const [startTime, setStartTime] = React.useState(null);
  const [endTime, setEndTime] = React.useState(null);

  const dropdownRef = React.useRef(null);

  const handleChangeStartTime = (e) => {
    setStartTime(parseFloat(e.target.value));
  };
  const handleChangeEndTime = (e) => {
    setEndTime(parseFloat(e.target.value));
  };
  const handleChangeTime = () => {
    if (startTime && !endTime) {
      setTimeDisplay("Trên " + startTime + " tháng");
      props.setTime({ startTime: startTime, endTime: "all" });
    } else if (!startTime && endTime) {
      setTimeDisplay("Dưới " + endTime + " tháng");
      props.setTime({ startTime: 0, endTime: endTime });
    } else if (startTime && endTime) {
      if (startTime >= endTime) {
        const i = startTime;
        setStartTime(endTime);
        setEndTime(i);
        setTimeDisplay(endTime + " - " + startTime + " tháng");
        props.setTime({ startTime: endTime, endTime: startTime });
      } else {
        setTimeDisplay(startTime + " - " + endTime + " tháng");
        props.setTime({ startTime, endTime });
      }
    }

    setIsOpen(false);
  };

  const handleChangeTimeRange = (range) => {
    setStartTime(range.start);
    setEndTime(range.end);
    setTimeDisplay(range.label);
    props.setTime({ startTime: range.start, endTime: range.end });
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

  const timeRanges = [
    { id: "all", label: "Tất cả thời gian", start: "all", end: "all" },
    { id: "1", label: "Dưới 1 tháng", start: 0, end: 1 },
    { id: "2", label: "1 - 2 tháng", start: 1, end: 2 },
    { id: "3", label: "2 - 4 tháng", start: 2, end: 4 },
    { id: "4", label: "4 - 6 tháng", start: 4, end: 6 },
    { id: "5", label: "Trên 6 tháng", start: 6, end: "all" },
  ];

  return (
    <div className="block">
      <button
        className="text-black bg-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center border shadow-md shadow-gray-200 "
        type="button"
        style={{
          width: "220px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onClick={() => {
          setStartTime(null);
          setEndTime(null);
          setIsOpen(!isOpen);
        }}
      >
        <CiTimer className="text-xl mr-1" />
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
          {timeDisplay}
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
            <div className="relative flex justify-center items-center gap-x-2">
              <input
                type="text"
                className="block w-16 p-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="From"
                onChange={handleChangeStartTime}
              />
              <span>-</span>
              <input
                type="text"
                className="block w-16 p-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="To"
                onChange={handleChangeEndTime}
              />
              <span>tháng</span>
            </div>
            <button
              className="btn-ap-dung"
              style={{
                backgroundColor: "#6C757D",
                width: "220px",
                height: "24px",
                color: "#fff",
                borderRadius: "5px",
                margin: "5px -2px",
              }}
              onClick={handleChangeTime}
            >
              Áp dụng
            </button>
          </div>
          <ul
            className="px-3 pb-3 overflow-y-auto text-sm text-gray-700"
            style={{ maxHeight: "300px" }}
          >
            {timeRanges.map((range) => (
              <li key={range.id}>
                <div
                  className="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleChangeTimeRange(range)}
                >
                  <input
                    id={range.id}
                    type="radio"
                    value={range.id}
                    name="time"
                    hidden
                  />
                  <label
                    htmlFor={range.id}
                    className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                  >
                    {range.label}
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

export default TimeDropdownFilter;
