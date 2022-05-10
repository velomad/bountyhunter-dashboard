import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
// import Paper from '@mui/material/Paper';


const TransitionsPopper =({children,open,anchorEl})=> {

console.log(children)
  

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <div>
     
      <Popper style={{backgroundColor:"red"}} id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          // <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 2, p: 1}}>
              <Paper>
             {children}
             </Paper>
            </Box>
          // </Fade>
        )}
      </Popper>
    </div>
  );
}

export default TransitionsPopper
