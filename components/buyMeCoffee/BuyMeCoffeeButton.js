import { Tooltip } from '@mui/material';
import React from 'react';
import MuiTooltip from '../tooltip/muiTooltip';

function BuyMeCoffeeButton({ username }) {
  return (
    <MuiTooltip text="Buy me a coffee">
      <div className="d-flex justify-content-center">
        <a
          className="d-flex justify-content-center align-items-center p-1 px-2 rounded-2 coffee-btn"
          target="_blank"
          href={`https://www.buymeacoffee.com/${username}`}
          rel="noopener noreferrer"
        >
          <img height={25} src="/platforms/coffee.svg" alt="Buy me a coffee" />
        </a>
      </div>
    </MuiTooltip>
  );
}

export default BuyMeCoffeeButton;
