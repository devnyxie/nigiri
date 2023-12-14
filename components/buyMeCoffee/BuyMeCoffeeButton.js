import { Tooltip } from '@mui/material';
import React from 'react';
import MuiTooltip from '../tooltip/muiTooltip';

const buttonStyle = {
  height: '40px',
  textDecoration: 'none',
  color: '#FFFFFF',
  backgroundColor: '#FF813F',
  width: '40px',
};
const bigButtonStyle = {
  height: '45px',
  textDecoration: 'none',
  color: '#FFFFFF',
  backgroundColor: '#FF813F',
  width: 'max-content',
};

const imageStyle = {
  height: '25px',
  width: 'auto',
  marginBottom: '1px',
  boxShadow: 'none',
  border: 'none',
  verticalAlign: 'middle',
};

const textStyle = {
  // marginLeft: '15px',
  // fontSize: '2rem',
  // verticalAlign: 'middle',
};

function BuyMeCoffeeButton({ size = 'small' || 'big' }) {
  if (size === 'small') {
    return (
      <MuiTooltip text="Buy me a coffee">
        <div className="d-flex justify-content-center">
          <a
            style={buttonStyle}
            className="d-flex justify-content-center align-items-center p-1 px-2 rounded-2"
            target="_blank"
            href="https://www.buymeacoffee.com/devnyxie"
            rel="noopener noreferrer"
          >
            <img
              style={imageStyle}
              src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
              alt="Buy me a coffee"
            />
          </a>
        </div>
      </MuiTooltip>
    );
  } else if (size === 'big') {
    return (
      <div
        className="w-100 d-flex justify-content-center pt-3 pb-3"
        style={{ fontFamily: 'Lato, sans-serif' }}
      >
        <a
          style={bigButtonStyle}
          className="d-flex justify-content-center align-items-center p-2 px-3 rounded-2"
          target="_blank"
          href="https://www.buymeacoffee.com/devnyxie"
          rel="noopener noreferrer"
        >
          <img
            style={imageStyle}
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a coffee"
          />
          <h4 className="m-0 ms-2 text-light">Buy me a coffee</h4>
        </a>
      </div>
    );
  }
}

export default BuyMeCoffeeButton;
