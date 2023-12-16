import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Modal,
  IconButton,
  Box,
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';

const JobImageContainer = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const limitedImages = images.slice(0, 3);
  const remainingImagesCount = images.length - 3;

  const handleShowModal = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  return (
    <Grid container spacing={1.5} style={{ marginTop: '10px' }}>
      {limitedImages.map((imageUrl, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} onClick={() => handleShowModal(index)}>
          <Card>
            <CardMedia
              component="img"
              style={{ objectFit: 'cover', height: '150px' }}
              image={imageUrl}
              alt={`Image ${index}`}
            />
          </Card>
        </Grid>
      ))}
      {/* {remainingImagesCount > 0 && (
        <Grid item xs={12} sm={6} md={4} onClick={() => handleShowModal(2)}>
          <Card style={{ position: 'relative' }}>
            <CardMedia
              component="img"
              style={{ objectFit: 'cover', height: '150px', opacity: 0.4 }}
              image={images[2]}
            />
            <CardContent
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgba(0, 0, 0, 0.6)',
                color: '#fff',
              }}
            >
              <Typography variant="h6">+{remainingImagesCount}</Typography>
            </CardContent>
          </Card>
        </Grid>
      )} */}

      <Modal open={showModal} onClose={handleCloseModal}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <IconButton
            sx={{ position: 'absolute', top: 0, right: 0 ,'&:hover': {
              color:"#000",
              backgroundColor: 'rgba(255, 255, 255, 0.5)', // Màu nền khi hover
            },}}
            onClick={handleCloseModal}
          >
            <CloseIcon style={{ fontSize: "60px" }} />
          </IconButton>
          <IconButton
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              '&:hover': {
                color:"#000",
                backgroundColor: 'rgba(255, 255, 255, 0.5)', // Màu nền khi hover
              },
            }}
            onClick={handlePrevImage}
            color="#fff"
          >
            <KeyboardArrowLeftIcon style={{fontSize: "60px" }} />
          </IconButton>
          <img src={images[selectedImageIndex]} alt={`Large Image ${selectedImageIndex}`} style={{ height: "600px", width: "800px" }} />
          <IconButton
            sx={{
              position: 'absolute',
              top: '50%',
              right: 0,
              '&:hover': {
                color: "#000",
                backgroundColor: 'rgba(255, 255, 255, 0.5)', // Màu nền khi hover
              },
            }}
            onClick={handleNextImage}
            color="#fff"
          >
            <KeyboardArrowRightIcon style={{fontSize: "60px" }} />
          </IconButton>

        </Box>
      </Modal>
    </Grid>
  );
};

export default JobImageContainer;
