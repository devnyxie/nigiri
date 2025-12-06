import { useEffect, useState, memo, useMemo, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AnimatedLink from '../AnimatedLink';
import { IoIosMenu } from 'react-icons/io';
import ThemeSwitch from '../theme_switch/ThemeSwitch';
import BuyMeCoffeeButton from '../buyMeCoffee/BuyMeCoffeeButton';
import { IconButton } from '@mui/material';

const Header = memo(function Header({ theme, setTheme, config }) {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState('/');

  const returnRouteName = useCallback((route) => {
    switch (route) {
      case 'index':
        return 'Blog';
      case 'about_me':
        return 'About';
      default:
        return '';
    }
  }, []);

  const associatedRoutes = useCallback((tab) => {
    const associated_routes = [tab.href];
    if (tab.as === 'index') {
      associated_routes.push('/posts/[post]');
    }
    return associated_routes;
  }, []);

  const tabs = useMemo(() => {
    if (config.disable_about_me_page) return [];
    return [
      { as: 'index', href: '/' },
      { as: 'about_me', href: '/about_me' },
    ];
  }, [config.disable_about_me_page]);

  useEffect(() => {
    setCurrentRoute(router.pathname);
  }, [router.pathname]);
  return (
    <div className="p-2 w-100 rounded-1 d-flex align-items-center">
      <nav className="w-100 navbar navbar-expand-lg ">
        <div className="container-fluid d-flex justify-content-between">
          <Link href={'/'} className="d-flex align-items-center">
            <Image
              src={`/site_logo/logo.svg`}
              alt="Sushi Icon"
              width={35}
              height={35}
            />
            <div className="m-0 p-0 ms-2 fw-bold" style={{ fontSize: '30px' }}>
              {config.site_title}
            </div>
          </Link>

          <div
            className="navbar-toggler border-0 p-0 animated-link"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-label="Toggle navigation"
          >
            <IconButton size="small" variant="outlined">
              <IoIosMenu size={35} />
            </IconButton>
          </div>

          <div
            className=" collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <div className="navbar-nav me-auto">
              {tabs.map((tab) => (
                <AnimatedLink
                  key={tab.as}
                  href={tab.href}
                  className={`fw-bold header-links`}
                >
                  <div
                    className={`${
                      associatedRoutes(tab).includes(currentRoute)
                        ? 'active'
                        : ''
                    }`}
                  >
                    {returnRouteName(tab.as)}
                  </div>
                </AnimatedLink>
              ))}
            </div>
            <div className="d-flex" style={{ width: 'max-content' }}>
              {config.buyMeACoffee_username && (
                <BuyMeCoffeeButton username={config.buyMeACoffee_username} />
              )}
              <div className="ps-1">
                <ThemeSwitch theme={theme} setTheme={setTheme} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
});

export default Header;
