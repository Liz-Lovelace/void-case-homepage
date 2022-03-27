import React from 'react';
import styles from './SideNote.module.css';
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const tooltipBackgroundColor = '#fafafbf0';
const tooltipTheme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        root: {
          //maxWidth: 'max(22em, 3%)',
        },
        tooltip: {
          color: '#3A4145',
          fontFamily: 'Open Sans, sans-serif',
          fontStyle: 'normal',
          fontSize: '1em',
          backgroundColor: tooltipBackgroundColor,
          border: '1px solid #ccc',
          position: 'relative',
          bottom: '7px',
          boxShadow: '0 0 1em  #999',
          maxWidth: '100%',
        },
        popper: {
          // 3em comes from PostBody's paddng times two.
          maxWidth: 'min(22em, 100% - 3em)',
          span: {
            '::before':{
              color: tooltipBackgroundColor,
              border: '2px solid #ccc',
            },
          },
        },
      },
    },
  },
});

export default function({children}) {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  
  return <ThemeProvider theme={tooltipTheme}>
    <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip 
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          arrow
          title=<p>{children}</p>
        >
          <button 
            className={styles.sideNote} 
            onClick={handleTooltipOpen}
          >
            1
          </button>
        </Tooltip>
    </ClickAwayListener>
  </ThemeProvider>


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