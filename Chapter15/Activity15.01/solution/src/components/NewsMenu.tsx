import { Button, Menu, MenuItem } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../services/firebase';
import { UserContext } from '../providers/UserProvider';

const NewsMenu = () => {
  const [anchorEl, setAnchorEl] = useState<Element>();
  const history = useHistory();
  const user = useContext(UserContext);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => setAnchorEl(event.currentTarget);

  const handleAdd = () => history.push('/add');

  const handleClose = () => setAnchorEl(undefined);

  const handleLogOut = async () => {
    await auth.signOut();
    history.push('/signin');
  };

  const handleSignIn = () => history.push('/signin');
  const handleSignUp = () => history.push('/signup');

  return (
    <div>
      <Button
        area-controls="simple-menu"
        area-haspopup="true"
        color="inherit"
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {user ? (
          <div>
            <MenuItem onClick={handleAdd}>Add a Story</MenuItem>
            <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem onClick={handleSignIn}>Sign In</MenuItem>
            <MenuItem onClick={handleSignUp}>Sign Up</MenuItem>
          </div>
        )}
      </Menu>
    </div>
  );
};

export default NewsMenu;
