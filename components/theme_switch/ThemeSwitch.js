import Image from 'next/image';
import { useState, memo, useCallback, useRef } from 'react';
import MuiTooltip from '../tooltip/muiTooltip';
import { setCookie } from '../../utils/utils';

const ThemeSwitch = memo(function ThemeSwitch({ theme, setTheme }) {
  const [circleClass, setCircleClass] = useState('');
  const switchingRef = useRef(false);

  const switchTheme = useCallback(() => {
    if (switchingRef.current) return;
    
    try {
      switchingRef.current = true;
      const desired_theme = theme === 'dark' ? 'light' : 'dark';
      setTheme(desired_theme);
      setCircleClass('theme-switcher-circle-off');
      
      const timeout1 = setTimeout(() => {
        setCircleClass('theme-switcher-circle-on');
        switchingRef.current = false;
      }, 200);
      
      setCookie('theme', desired_theme);
      return () => clearTimeout(timeout1);
    } catch (error) {
      switchingRef.current = false;
    }
  }, [theme, setTheme]);

  const icon = theme === 'dark' 
    ? <Image src="/theme_switch/sun.svg" width={25} height={25} alt="Light mode" />
    : <Image src="/theme_switch/moon.svg" width={25} height={25} alt="Dark mode" />;

  return (
    <MuiTooltip text="Toggle theme">
      <div
        className={`theme-toggler rounded-1 d-flex justify-content-center align-items-center p-2 position-relative`}
        onClick={switchTheme}
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
              {icon}
            </div>
          </div>
        </div>
      </div>
    </MuiTooltip>
  );
});

export default ThemeSwitch;
