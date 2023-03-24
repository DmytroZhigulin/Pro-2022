import React, { useState } from 'react';
import { 
  styled,
  Card,  
  CardMedia,  
  CardContent,  
  CardActions,   
  IconButton,  
  Typography, 
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoModal from '../components/Modals/InfoModal';
import StartModal from '../components/Modals/StartModal';

const QuizCard = styled(Card)(() => ({
  maxWidth: '380px',
  margin: '15px 20px',
  fontSize: '30px',
  borderRadius: '20px',
  cursor: 'pointer',
  backgroundColor: '#ffffff',
  color: '#ffffff',
  padding: '15px',
  transition: '0.5s',
  height: 'fit-content',
}));

const QuizCardHead = styled('div')(() => ({
  display: 'flex',
  marginBottom: '10px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const QuizCardTitle = styled('div')(() => ({
  color: '#008EC9',
  fontSize: '20px',
  fontWeight: 'bold',
}));

const QuizAvatar = styled(CardMedia)(() => ({
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  display: 'block',
}));

const QuizCardDescr = styled(Typography)(() => ({
  color: '#484554',
  fontSize: '16px',
  textAlign: 'center',
}));

const IconsWrapper = styled(CardActions)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const LeftIcons = styled('div')(() => ({
  display: 'block',
}));

const RightIcons = styled('div')(() => ({
  display: 'block',
}));

export default function QuizItem({ course, id, descr, img, baner, about }) {
  const [openInfo, setInfoModalOpen] = useState(false);
  const [openQuiz, setQuizModalOpen] = useState(false);

  return (
    <>
      <QuizCard sx={{ maxWidth: 345 }}>
        <QuizCardHead>
          <QuizAvatar
            component="img"
            image={img}
            alt={course}
          />
          <QuizCardTitle>
            {course} quiz
          </QuizCardTitle>
        </QuizCardHead>
        <CardMedia
          component="img"
          height="194"
          image={baner}
          alt={course}
        />
        <CardContent>
          <QuizCardDescr>
            {descr}
          </QuizCardDescr>
        </CardContent>
        <IconsWrapper disableSpacing>
          <LeftIcons>
            <IconButton 
              aria-label="add to favorites"
            >
              <FavoriteIcon sx={{ color:'#484554' }}/>
            </IconButton>
            <IconButton 
              aria-label="info"
              onClick={() => setInfoModalOpen(true)}
              >
                
              <InfoOutlinedIcon sx={{ color:'#FF9372' }}/>
            </IconButton>
          </LeftIcons>
          <RightIcons>
            <IconButton 
              aria-label="start quiz"
              onClick={() => setQuizModalOpen(true)}
            >
              
              <PlayCircleOutlineIcon sx={{ color:'#008761', fontSize: '30px' }}/>
            </IconButton>
          </RightIcons>
          
          
          
        </IconsWrapper>
      </QuizCard>
      <StartModal 
        open={openQuiz}
        onClose={() => setQuizModalOpen(false)}
        course={course}
      />
      <InfoModal
        open={openInfo}
        onClose={() => setInfoModalOpen(false)}
        course={course}
        about={about}
        baner={baner}
      />
      
    </>
  );
}
