import React, { useState } from 'react';
import { MenuItem, Menu, Button, IconButton } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const HighlightingMenu = ({ logText, highlightColor, setHighlightColor, handleHighlight }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorSelect = (color) => {
    setHighlightColor(color);
    handleClose();
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <HighlightOffIcon style={{ color: highlightColor }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleColorSelect('yellow')}>Yellow</MenuItem>
        <MenuItem onClick={() => handleColorSelect('green')}>Green</MenuItem>
        <MenuItem onClick={() => handleColorSelect('blue')}>Blue</MenuItem>
        <MenuItem onClick={() => handleColorSelect('pink')}>Pink</MenuItem>
      </Menu>
    </div>
  );
};

export default HighlightingMenu;