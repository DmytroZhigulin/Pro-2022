import React from 'react';
import { 
  styled, 
  Box, 
  IconButton, 
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';

const Foo = styled(Box)(() => ({
  backgroundImage: 'linear-gradient(to left bottom, #ea5bd4, #d45edf, #ba63e9, #9a67f2, #726cf8)',
  padding: '20px 0px',
}));

const Instagram = styled(InstagramIcon)(() => ({
  fill: 'white',
  fontSize: '25px',
  backgroundImage: 'linear-gradient(to left top, #ff8500, #ff9c00, #ffb300, #ffca00, #ffe000, #ffd400, #ffc800, #ffbc00, #ff882b, #ff3a66, #ff00ae, #f300ff)',
  padding: '5px',
  borderRadius: '50%',
}));

const Facebook = styled(FacebookIcon)(() => ({
  fill: 'white',
  fontSize: '25px',
  backgroundColor: '#001288',
  padding: '5px',
  borderRadius: '50%',
}));

const Telegram = styled(TelegramIcon)(() => ({
  fill: 'white',
  fontSize: '25px',
  backgroundColor: '#0081FF',
  padding: '5px',
  borderRadius: '50%',
}));

export default function MainFooter() {

  return (
    <Foo sx={{ flexGrow: 1 }}>
      <IconButton size="medium">
        <Instagram/>
      </IconButton>
      <IconButton size="medium">
        <Facebook/>
      </IconButton>
      <IconButton size="medium">
        <Telegram/>
      </IconButton>
      
      
      
    </Foo>
  );
}

