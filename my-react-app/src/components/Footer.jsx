import React from 'react';
import { 
  styled,
  Box,
} from "@mui/material";


const Foo = styled(Box)(() => ({
  position: 'absolute',
  bottom: '0px',
  left: '0px',
  width: '100%',
  textAlign: 'center',
  color: '#FFDB40'
}));


export default function Footer() {
  return (
    <Foo>
      <p>&copy; Quiz App 2023</p> 
    </Foo>
  );
}

