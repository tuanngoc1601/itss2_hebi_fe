import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const CompanyGroupCard = ({ company }) => {
  const daysOfWeek = [
    'Chủ Nhật',
    'Thứ Hai',
    'Thứ Ba',
    'Thứ Tư',
    'Thứ Năm',
    'Thứ Sáu',
    'Thứ Bảy',
  ];
  const formatDay = (day) => daysOfWeek[day];

  return (
    <Card sx={{ width: "100%", marginTop: "5px", marginLeft: "15%" }}>
      <CardContent>
        <Typography sx={{ fontSize: 20, fontWeight: "bold", maxHeight: '100px' }} color="black" gutterBottom>
          <div className="flex items-center">
            <img
              src={company.business_logo}
              alt="company"
              style={{ width: "80px", height: "80px", marginRight: "10px", border: "1px solid #DEE2E6", objectFit: 'contain', backgroundColor:"#fff" }}
            />
            <div>
              <h4 className="text-base font-bold" style={{ fontSize: "16px" }}>{company.name}</h4>
              <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', fontSize: '14px', color: "#B511B8" }}>
                Xem công ty
                <OpenInNewOutlinedIcon style={{ marginLeft: '5px', fontSize: '14px' }} />
              </a>
            </div>
          </div>
        </Typography>
        <Typography component="div" variant="body1" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', padding: "5px 0", borderBottom: '1px dashed #DEDEDE' }}>
          <div>
            <p style={{ margin: 0, color: "#A6A6A6", fontSize: "14px" }}>Quy mô công ty</p>
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 'bold', fontSize: "14px" }}>{company.employees_number} nhân viên</p>
          </div>
        </Typography>
        <Typography component="div" variant="body1" style={{ display: 'flex', justifyContent: 'space-between', padding: "5px 0", borderBottom: '1px dashed #DEDEDE' }}>
          <div>
            <p style={{ margin: 0, color: "#A6A6A6", fontSize: "14px" }}>Quốc gia</p>
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 'bold', fontSize: "14px" }}>{company.country}</p>
          </div>
        </Typography>
        <Typography component="div" variant="body1" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', padding: "5px 0", borderBottom: '1px dashed #DEDEDE' }}>
          <div>
            <p style={{ margin: 0, color: "#A6A6A6", fontSize: "14px" }}>Thời gian làm việc</p>
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 'bold', fontSize: "14px" }}>{formatDay(company.start_week_day)} - {formatDay(company.end_week_day)}</p>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
};


export default CompanyGroupCard;
