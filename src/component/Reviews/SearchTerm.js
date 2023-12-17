import React, { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import axios from 'axios';

const SearchTerm = (props) => {
    const [searchKey, setSearchKey] = useState("");
    const [listKey, setListKey] = useState([]);
    const inputSearchRef = useRef(null);

    const handleSearchKey = (e) => {
        setSearchKey(e.target.value);
    };
    const handleSearch = () => {
            
        
            const fetchData = async () => {
              try {
                
        
                // Tạo một đối tượng params với các thuộc tính là các phần tử của mảng
                const params = {sort: props.sortKey,};
                listKey.forEach((value, index) => {
                  params[`search[${index}]`] = value;
                });
        
                // Thực hiện HTTP GET request với mảng dữ liệu truyền vào làm các tham số
                const response = await axios.get('http://127.0.0.1:8000/api/review-search', {
                  params,
                });
        
                
                props.setSearchedData(response.data);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
        
            fetchData();
          

    }

    const handleAddSearchKey = () => {
        let newListKey = [...listKey];
        newListKey.push(searchKey);
        setListKey(newListKey);
        props.setListKey(newListKey)
        setSearchKey("");
        inputSearchRef.current.focus();
    };

    return (
        <div className="w-full flex flex-col border-b pb-3">
            <div className="w-full flex flex-row justify-center items-center gap-1">
                <input
                    type="text"
                    placeholder="Nhập từ khoá"
                    value={searchKey}
                    ref={inputSearchRef}
                    onChange={(e) => handleSearchKey(e)}
                    className="w-full h-10 px-4 py-2 outline-none border rounded"
                />
                <span
                    className="flex-none w-10 h-10 flex justify-center items-center cursor-pointer rounded bg-gray-200"
                    onClick={handleAddSearchKey}
                >
                    <IoMdAdd className="text-xl text-navActive" />
                </span>
                <span 
                className="flex-none w-10 h-10 flex justify-center items-center cursor-pointer rounded bg-gray-200"
                onClick = {handleSearch}
                >
                    <IoSearchSharp className="text-xl text-navActive" />
                </span>
            </div>
            <div className="w-full flex flex-col justify-center items-start">
                <div className="flex flex-wrap justify-start items-center mt-2 gap-1">
                    {listKey.length > 0 &&
                        listKey.map((data, index) => (
                            <KeySearchChip
                                key={index}
                                data={data}
                                index={index}
                                listKey={listKey}
                                setListKey={setListKey}
                            />
                        ))}
                </div>
                <div className="w-30 bg-navActive text-sm text-white font-semibold rounded-md px-2 py-1 mt-2">
                    Tổng số 30 kết quả
                </div>
            </div>
        </div>
    );
};

const KeySearchChip = ({ data, index, listKey, setListKey }) => {
    const handleDeleteItem = () => {
        let newListKey = [...listKey].filter((item, i) => i !== index);
        setListKey(newListKey);
    };

    return (
        <div className="flex flex-row items-center bg-transparent border rounded font-sans text-md font-normal text-gray-900">
            <span className="px-2 border-e">{data}</span>
            <span
                className="w-6 h-6 flex items-center justify-center cursor-pointer"
                onClick={handleDeleteItem}
            >
                x
            </span>
        </div>
    );
};

export default SearchTerm;
