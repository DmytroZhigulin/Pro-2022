import React from 'react';
import {
  Backdrop, 
  Box, 
  Modal, 
  Fade, 
  Typography,
  CardMedia, 
  styled,
} from '@mui/material';

const InfoModalTitle = styled(Typography)(() => ({
  color: '#FF9372',
  fontSize: '20px',
  fontWeight: 'bold',
  textAlign: 'center',
  paddingBottom: '5px',
  textTransform: 'uppercase',
}));

const ModalWindow = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: '#ffffff',
  boxShadow: 24,
  padding: '20px 30px',
  borderRadius: '15px',
}));

export default function InfoModal({ course, about, baner, open, onClose }) {

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <ModalWindow>
            <InfoModalTitle id="transition-modal-title" variant="h6" component="h2">
              What is {course} ?
            </InfoModalTitle>
            <CardMedia
              component="img"
              height="194"
              image={baner}
              alt={course}
            />
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {about}
            </Typography>
          </ModalWindow>
        </Fade>
      </Modal>
    </div>
  );
}

