import React, { useEffect, useState } from 'react';
// import JP from '../../public/japan.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AnimatedLink from '../AnimatedLink';
import { IoIosMenu } from 'react-icons/io';
import ThemeSwitch from '../theme_switch/ThemeSwitch';
import BuyMeCoffeeButton from '../buyMeCoffee/BuyMeCoffeeButton';
import { Button } from '@mui/material';
function Header({ theme, setTheme }) {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState('/');
  console.log(currentRoute);
  function compareRoutes(route) {
    if (route.toLowerCase() === currentRoute.toLowerCase()) {
      return 'text-decoration-underline';
    } else {
      return '';
    }
  }
  function returnRouteName(route) {
    switch (route) {
      case 'index':
        return 'Blog';
      case 'about_me':
        return 'About';
      default:
        return '';
    }
  }
  useEffect(() => {
    setCurrentRoute(router.pathname);
  }, [router]);
  return (
    <div className="p-2 w-100 rounded-1 d-flex align-items-center">
      <nav className="w-100 navbar navbar-expand-lg ">
        <div className="container-fluid d-flex justify-content-between">
          <Link href={'/'} className="d-flex align-items-center">
            <Image src={`/sushi.svg`} alt="Sushi Icon" width={35} height={35} />
            <div className="m-0 p-0 ms-2 fw-bold" style={{ fontSize: '30px' }}>
              Tim
            </div>
          </Link>

          <div
            className="navbar-toggler border-0 p-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-label="Toggle navigation"
          >
            <Button size="small" variant="outlined">
              <IoIosMenu size={35} />
            </Button>
          </div>

          <div
            className=" collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <div className="navbar-nav me-auto">
              {[
                { as: 'index', href: '/' },
                { as: 'about_me', href: '/about_me' },
              ].map((tab) => {
                return (
                  <AnimatedLink
                    key={tab.as}
                    href={tab.href}
                    // className={`fw-bold ms-2 me-2 ${compareRoutes(tab.href)}`}
                    className={`fw-bold header-links`}
                  >
                    <div
                      className={`${currentRoute === tab.href ? 'active' : ''}`}
                    >
                      {' '}
                      {returnRouteName(tab.as)}
                    </div>
                  </AnimatedLink>
                );
              })}
            </div>
            <div className="d-flex" style={{ width: 'max-content' }}>
              <div>
                <BuyMeCoffeeButton />
              </div>
              <div className="ps-1">
                <ThemeSwitch theme={theme} setTheme={setTheme} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
