import React, { useEffect, useState } from 'react';
// import JP from '../../public/japan.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AnimatedLink from '../AnimatedLink';
import { IoIosMenu } from 'react-icons/io';
import ThemeSwitch from '../theme_switch/ThemeSwitch';
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
        return 'About Me';
      default:
        return '';
    }
  }
  useEffect(() => {
    setCurrentRoute(router.pathname);
  }, [router]);
  return (
    <div className="p-2 w-100 rounded-1 d-flex align-items-center">
      <nav class="w-100 navbar navbar-expand-lg ">
        <div class="container-fluid">
          <Link href={'/'} className="d-flex align-items-center">
            <Image src={`/sushi.svg`} alt="Sushi Icon" width={35} height={35} />
            <div className="m-0 p-0 ms-2 fw-bold" style={{ fontSize: '30px' }}>
              Tim
            </div>
          </Link>
          <div
            class="navbar-toggler border-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-label="Toggle navigation"
          >
            <IoIosMenu size={35} />
          </div>
          <div
            class="ms-md-5 collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <div className="navbar-nav me-auto">
              {[
                { as: 'index', href: '/' },
                { as: 'about_me', href: '/about_me' },
              ].map((tab) => {
                return (
                  <AnimatedLink
                    href={tab.href}
                    // className={`fw-bold ms-2 me-2 ${compareRoutes(tab.href)}`}
                    className={`fw-bold mt-2 mb-2 m-md-0 ms-md-4`}
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

            <form class="d-flex" role="search">
              {/* <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button> */}
              <ThemeSwitch theme={theme} setTheme={setTheme} />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
