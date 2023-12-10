import React, {useState, useEffect}from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { BiHomeCircle } from "react-icons/bi";
import { IoCheckmark } from "react-icons/io5";
const CompanyDropdownFilter = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [companies, setCompany] = useState([{name:'Tất cả công ty'}]);
     const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = React.useRef(null);

    const handleOptionsChange = (e) => {
        props.setCompany(e.target.value);
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
                const response = await fetch("http://localhost:8000/api/list-business");
                const data = await response.json();
                setCompany([{
                    name:"Tất cả công ty"
                }, ...data]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        // Gọi fetchData chỉ khi cities rỗng
        if (companies.length === 1) {
            fetchData();
        }
    }, [companies]); 

    const filteredCompanies = companies.filter((city) =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="block">
            <button
                className="text-black bg-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center border shadow-md shadow-gray-200"
                type="button"
                style={{width: "240px", display:"flex", alignItems: "center", justifyContent: "space-between"}}
                onClick={() => setIsOpen(!isOpen)}
            >
                <BiHomeCircle className="text-xl mr-1" />
                <span style={{ width: "150px", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 1, overflow: "hidden", textOverflow: "ellipsis",}}>
                    {props.company !== "all" ?  props.company: companies[0].name}
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
                    <ul className="px-3 pb-3 overflow-y-auto text-sm text-gray-700"
                    style={{ maxHeight: '300px' }}
                    >
                        {filteredCompanies.map((company) => (
                            
                            <li key={company.index}>
                                <div className="flex items-center ps-2 rounded hover:bg-gray-100 cursor-pointer">
                                <label
                                        
                                        className="w-full flex items-center justify-between py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                                    >
                                    
                                    <input
                                        
                                        type="radio"
                                        value={company.name === "Tất cả công ty"? "all" : company.name}
                                        name="company"
                                        hidden
                                        onChange={handleOptionsChange}
                                    />
                                    
                                        {company.name}
                                        
                                        {
                                        props.company === "all" ? company.name === "Tất cả công ty" :
                                        props.company === company.name && (
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
export default CompanyDropdownFilter;
