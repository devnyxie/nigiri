import { Tooltip, Zoom } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import MuiTooltip from '../tooltip/muiTooltip';
import { setCookie } from '../../utils/utils';

function ThemeSwitch({ theme, setTheme }) {
  const moon = <Image src="/theme_switch/moon.svg" width={25} height={25} />;
  const sun = <Image src="/theme_switch/sun.svg" width={25} height={25} />;
  const [circleClass, setCircleClass] = useState('');
  let switching = false;
  function switchTheme() {
    try {
      if (!switching) {
        switching = true;
        const desired_theme = theme === 'dark' ? 'light' : 'dark';
        setTheme(desired_theme);
        setCircleClass('theme-switcher-circle-off');
        const timeout1 = setTimeout(() => {
          setCircleClass('');
          setCircleClass('theme-switcher-circle-on');
        }, 200);
        setCookie('theme', desired_theme);
        switching = false;
        return () => clearTimeout(timeout1);
      }
    } catch (error) {
      //
    }
  }
  return (
    <MuiTooltip text="Toggle theme">
      <div
        className={`theme-toggler rounded-1 d-flex justify-content-center align-items-center p-2 position-relative`}
        onClick={() => switchTheme()}
        style={{
          width: '40px',
          height: '40px',
          overflow: 'hidden',
          userSelect: 'none',
        }}
      >
        <div
          className={`rounded-circle position-absolute theme-switcher-circle ${circleClass}`}
          style={{
            top: '50%',
            width: '80px',
            height: '80px',
          }}
        >
          <div className="position-relative w-100 h-100">
            <div
              style={{
                width: 'min-content',
                position: 'absolute',
                top: 0,
                right: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              {theme === 'dark' ? sun : moon}
            </div>
          </div>
        </div>
      </div>
    </MuiTooltip>
  );
}

export default ThemeSwitch;
