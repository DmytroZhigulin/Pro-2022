import React from 'react';
import { 
  styled,
  Box,
} from "@mui/material";


const Foo = styled(Box)(() => ({
  textAlign: 'center',
  color: '#ffffff',
  backgroundColor: '#1C0772',
  margin: '0px',
}));


export default function Footer() {
  return (
    <Foo>
      <p style={{ 
        margin: '0px',
        height: '40px', 
      }}>
        &copy; Quiz App 2023
      </p> 
    </Foo>
  );
}

