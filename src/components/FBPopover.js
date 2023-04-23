import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function BasicPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <div style={{display: 'flex', width: 130, height: 50, borderRadius: 13, justifyContent: 'center', alignItems: 'center', color: "white", backgroundColor: "#FABB18", marginLeft: 50}} onClick={handleClick}>Feedback</div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
      >
        <div style={{ padding: 20}}>
        {props.content}
        {/* <Typography sx={{ p: 2 }}>The content of the Popover.</Typography> */}
        </div>
      </Popover>
    </div>
  );
}