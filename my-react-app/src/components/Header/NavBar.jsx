import React, { useState } from 'react';
import { 
  styled, 
  Box, 
  Toolbar, 
  IconButton, 
  InputBase,
  Button,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import SideMenu from './SideBar';

const HeadNav = styled(Box)(() => ({
  position: 'fixed',
  width: '100%',
  backgroundColor: 'transparent',
  '& @media(max-width: 460px)': {
    padding: '0px'
  },
}));

const Search = styled('div')(() => ({
  position: 'relative',
  backgroundColor: 'rgba(0, 139, 240, 0.2)',
  borderRadius: '15px',
  transition: '0.5s',
  '&:hover': {
    backgroundColor: 'rgba(0, 139, 240, 0.4)',
    boxShadow: '3px 3px 20px -7px rgba(0,0,0,0.75)',
  },
}));

const SearchIconWrapper = styled('div')(() => ({
  padding: '0px 5px 0px 5px',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ffffff',
}));

const StyledInputBase = styled(InputBase)(() => ({
  color: '#ffffff',
  paddingLeft: '30px',
}));

const ToggleButton = styled(MenuIcon)(() => ({
  color: '#ffffff',
}));

const AddQuizButton = styled(Button)(() => ({
  color: '#ffffff',
  backgroundColor: 'rgba(234, 91, 212, 0.4)',
  borderRadius: '15px',
  padding: '5px 15px 5px 10px',
  transition: '0.5s',
  '&:hover': {
    backgroundColor: 'rgba(234, 91, 212, 0.6)',
    boxShadow: '3px 3px 20px -7px rgba(0,0,0,0.75)',
  },
}));

const AddQuizWrap = styled(Box)(() => ({
  flexGrow: '1',
  display: 'flex',
  justifyContent: 'flex-end',
  marginRight: '1%',
}));

export default function PrimarySearchAppBar() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeadNav>
        <Toolbar>
          <IconButton
            onClick={() => handleDrawerOpen(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <ToggleButton/>
          </IconButton>
    <Search>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
        />
    </Search> 
          <AddQuizWrap>
            <AddQuizButton size="big" >
              <AddIcon/>
              <Typography>
                Add quiz
              </Typography>
            </AddQuizButton>
          </AddQuizWrap>  
        </Toolbar>
      </HeadNav>
      <SideMenu
        open={open} 
        handleClose={handleDrawerClose} 
        onClick={handleDrawerOpen}
      />
    </Box>
  );
}
