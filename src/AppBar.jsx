import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MenuIcon from '@material-ui/icons/Menu';


export default function ButtonAppBar() {

  return (
    
        <Toolbar className='header-nav'>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Button > <NotificationsNoneIcon/> &nbsp; <p>Consultas</p></Button>
        </Toolbar>
     
    
  );
}
