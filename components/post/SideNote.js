import React from 'react';
import styles from './SideNote.module.css';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';

export default function({children}) {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  
  return <ClickAwayListener onClickAway={handleTooltipClose}>
    <div>
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title="Add"
      >
        <button onClick={handleTooltipOpen}>Click</button>
      </Tooltip>
    </div>
  </ClickAwayListener>


  return <>
    <Tooltip title="looooong text">
      <a className={styles.sideNote}>  
        <span>
          1
        </span>
      </a>
    </Tooltip>
  </>
}