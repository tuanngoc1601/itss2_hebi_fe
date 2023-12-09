import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";

const SalaryDropdownFilter = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [salaryDisplay, setSalaryDisplay] = React.useState('Tất cả mức lương');
    const [startSalary, setStartSalary] = React.useState(null);
    const [endSalary, setEndSalary] = React.useState(null);

    const dropdownRef = React.useRef(null);

    
    const handleChangeStartSalary = (e) => {
        setStartSalary(parseFloat(e.target.value));
    };
    const handleChangeEndSalary = (e) => { 
        setEndSalary(parseFloat(e.target.value));
    };
    const handleChangeSalary = () =>{
        
            if(startSalary && !endSalary) {
                
                setSalaryDisplay('Trên '+ startSalary + ' triệu');
                props.setSalary({startSalary, endSalary});
            }else if(!startSalary && endSalary) {
                
                setSalaryDisplay('Dưới '+ endSalary + ' triệu');
                props.setSalary({startSalary, endSalary});
            }else if(startSalary && endSalary){
                if(startSalary>=endSalary){
                    const i=startSalary;
                    setStartSalary(endSalary);
                    setEndSalary(i);
                    setSalaryDisplay( endSalary + ' - ' + startSalary + ' triệu');
                    props.setSalary({startSalary:endSalary, endSalary:startSalary});
                }
                else {
                    setSalaryDisplay( startSalary + ' - ' + endSalary + ' triệu');
                    props.setSalary({startSalary, endSalary});
                }
            }
        
        setIsOpen(false);
    }

    const handleChangeSalaryRange = (range) => {
        setStartSalary(range.start);
        setEndSalary(range.end);
        setSalaryDisplay(range.label);
        props.setSalary({ startSalary: range.start, endSalary: range.end });
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


    const salaryRanges = [
        { id: "all", label: "Tất cả mức lương", start:null, end:null },
        { id: "2", label: "Dưới 2 triệu", start: null, end:2},
        { id: "4", label: "2 - 4 triệu", start: 2, end:4 },
        { id: "6", label: "4 - 6 triệu", start: 4, end:6 },
        { id: "8", label: "6 - 8 triệu" , start: 6, end:8 },
      ];

    return (
        <div className="block">
            <button
                className="text-black bg-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center border shadow-md shadow-gray-200"
                type="button"
                onClick={() => {
                    setStartSalary(null);
                    setEndSalary(null);
                    setIsOpen(!isOpen);
                }}
            >
                <AiOutlineDollar className="text-xl mr-1" />
                <span style={{ width: "116.91px" }}>{salaryDisplay}</span>
                <FaChevronDown className="text-navActive text-lg ms-1" />
            </button >
            {/* dropdown */}
            {isOpen && (
                <div ref={dropdownRef} className="absolute z-10 mt-2 origin-top bg-white rounded-lg shadow w-60">
                    <div className="p-3">
                        <div className="relative flex justify-center items-center gap-x-2">
                            <input
                                type="number"
                                className="block w-16 p-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                placeholder="From"
                                min="0"
                                onChange={handleChangeStartSalary}
                            />
                            <span>-</span>
                            <input
                                 type="number"
                                className="block w-16 p-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                placeholder="To"
                                min="0"
                                onChange={handleChangeEndSalary}

                            />
                            <span>triệu</span>
                        </div>
                        <button
                                 className="btn-ap-dung" style={{backgroundColor: "#6C757D",width:"220px",height:"24px",color:"#fff", borderRadius:"5px",margin:"5px -2px"}}
                                 onClick={handleChangeSalary}
                        >
                            Áp dụng
                        </button>

                    </div>
                    <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700">
            {salaryRanges.map((range) => (
              <li key={range.id}>
                <div className="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer"
                onClick={() => handleChangeSalaryRange(range)}
                >
                  <input
                    id={range.id}
                    type="radio"
                    value={range.id}
                    name="salary"
                    
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

export default SalaryDropdownFilter;
