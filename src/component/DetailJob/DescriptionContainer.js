import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const DescriptionContainer = ({ jobDescription }) => {
  return (
    <Card sx={{ width: "50%", marginLeft: "10%", marginTop: "10px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 20, fontWeight: "bold" }} color="black" gutterBottom variant="h5" component="div">
          Mô tả công việc 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {jobDescription}
        </Typography>

      </CardContent>
    </Card>
  );
};

export default DescriptionContainer;
