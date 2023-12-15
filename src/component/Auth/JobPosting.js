import React from "react";
import { Card } from 'antd';

function JobPosting() {
    return (
        <Card style={{ width: 700, marginBottom: '10px' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '10px'}}>
                    <div style={{ justifyContent:"center" }}>Anh</div>
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ textAlign: 'right', marginBottom: '10px' }}>
                        <p>Tiền lương: $1000</p>
                        <p>Trạng thái: Open</p>
                    </div>
                    <div>
                        <p>Tên công việc: Software Engineer</p>
                        <p>Tên công ty: XYZ Corporation</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default JobPosting;
