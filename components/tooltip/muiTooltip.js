import { Tooltip } from '@mui/material';
import React from 'react';

function MuiTooltip({ children, text }) {
  return (
    <Tooltip title={text} arrow>
      {children}
    </Tooltip>
  );
}

export default MuiTooltip;
