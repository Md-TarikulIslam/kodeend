import React, { useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

import logo from '../../../assets/images/logo/logo.webp'
import './Header.css'
 
export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

 
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant=""
        color="white"
        className="p-1   "
      >
        <a href="#" className="flex text-xl font-bold items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant=""
        color="white"
        className="p-1   "
      >
        <a href="#" className="flex text-xl font-bold items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant=""
        color="white"
        className="p-1   "
      >
        <a href="#" className="flex text-xl font-bold items-center">
          Services
        </a>
      </Typography>
      <Typography
        as="li"
        variant=""
        color="white"
        className="p-1   "
      >
        <a href="#" className="flex text-xl font-bold items-center">
          Blogs
        </a>
      </Typography>
      <Typography
        as="li"
        variant=""
        color="white"
        className="p-1   "
      >
        <a href="#" className="flex text-xl font-bold items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <>
      <Navbar className="sticky bg-color inset-0 z-10 h-max max-w-full rounded-none border-none py-2 px-4 lg:px-32 lg:py-4">
        <div className="flex items-center justify-between text-white-900">
          <img className="logo-size" src={logo} alt="" />
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
         
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        
        </MobileNav>
      </Navbar>
    </>
  );
}