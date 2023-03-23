import React, { useState } from "react";
import { 
    styled,
    Box,
    Typography,
    CardContent,
    Avatar,
    Card,
} from "@mui/material";
import QuizModal from './Modals/QuizModal';
import StartModal from './Modals/StartModal';


const CourceIcon = styled(Box)(() => ({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  display: 'block',
}));

const CardButtons = styled(Box)(() => ({
  display: 'flex',
  margin: '0 10px',
  justifyContent: 'center',
  alignItems: 'center',
}));


export default function QuizItem({ course, id, descr, img }) {

  const [modalOpen, setModalOpen] = useState(false);
  
  const handleModalOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);


  const boxStyle = {
     maxWidth: '380px',
     margin: '0 20px',
     fontSize: '30px',
     borderRadius: '20px',
     cursor: 'pointer',
     backgroundColor: '#ffffff',
     color: '#ffffff',
     padding: '15px',
     transition: '0.5s',
  };

    return (
      <div>
        <Card 
          sx={{ maxWidth: 345 }} 
          style={boxStyle} 
        >
          <CourceIcon>
            <Avatar
              alt={course}
              src={img}
              sx={{ width: 56, height: 56 }}
            />
          </CourceIcon>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {course}
            </Typography>
            <Typography variant="body2" color="#000000">
              {descr}
            </Typography>
          </CardContent>
          <CardButtons>
            <QuizModal 
              open={modalOpen} 
              handleClose={handleClose} 
              onClick={handleModalOpen}
              course={course} 
              descr={descr}
            />
            <StartModal 
              open={modalOpen} 
              handleClose={handleClose} 
              onClick={handleModalOpen}
              course={course} 
            />
          </CardButtons>
        </Card>
        
      </div>
      );;
}