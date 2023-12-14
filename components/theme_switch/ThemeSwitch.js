import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function ThemeSwitch({ theme, setTheme }) {
  const moon = <Image src="/theme_switch/moon.svg" width={25} height={25} />;
  const sun = <Image src="/theme_switch/sun.svg" width={25} height={25} />;
  //
  const [circleClass, setCircleClass] = useState('theme-switcher-circle-off');
  //
  function switchTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setCircleClass('theme-switcher-circle-off');
    const timeout1 = setTimeout(() => {
      // Remove "theme-switcher-circle-off" class
      setCircleClass('');

      // Add "theme-switcher-circle-on" class for 0.75s
      setCircleClass('theme-switcher-circle-on');

      // return () => clearTimeout(timeout2);
    }, 200);

    return () => clearTimeout(timeout1);
  }
  return (
    <div
      className={`${
        theme === 'dark' ? 'sun' : 'moon'
      }-button-switch rounded-1 d-flex justify-content-center align-items-center p-2 position-relative`}
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
          // top: 0,
          width: '80px',
          height: '80px',
          // transform: 'translate(0%, 25%)',
        }}
      >
        <div className="position-relative w-100 h-100">
          <div
            // className="bg-warning"
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
  );
}

export default ThemeSwitch;
