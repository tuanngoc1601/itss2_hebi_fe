import React, { useState } from "react";
import { Radio } from 'antd';
import JobPosting from "../component/Auth/JobPosting"

function SearchResult() {
    const [value, setValue] = useState(1);

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ marginBottom: '20px', width: '100%', display: 'flex', alignItems: 'center' }}>
                <p style={{ marginRight: '10px' }}>Ưu tiên hiển thị theo:</p>
                <Radio.Group onChange={onChange} value={value} style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Radio value={1} >Ngày đăng</Radio>
                    <Radio value={2}>Ngày cập nhật</Radio>
                    <Radio value={3}>Lương cao đến thấp</Radio>
                    <Radio value={4}>Số lượng còn tuyển dụng</Radio>
                </Radio.Group>
            </div>
            <div style={{ alignItems: 'center' }}>
                <JobPosting />
                <JobPosting />
                <JobPosting />
                <JobPosting />
            </div>
        </div>
    );
}

export default SearchResult;
