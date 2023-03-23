import React from 'react';
import { 
    styled,
    useTheme,
    Box,  
    Drawer, 
    List,  
    Divider,  
    IconButton,  
    ListItem,  
    ListItemButton, 
    ListItemIcon, 
    ListItemText 
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
//icons-material не импортятся скопом, выдает ошибку!!!

const DrawerHeader = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft({ open, handleClose }) {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={() => handleClose()}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{ color: '#000000' }}/> : <ChevronRightIcon sx={{ color: '#000000' }}/>}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ backgroundColor: '000000' }}/>
        <List>
          {['Home', 'Favourites'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <AddIcon sx={{ color: '#008BF0' }}/> : <FavoriteIcon sx={{ color: '#008BF0' }}/>}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: '#0081FF' }}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}