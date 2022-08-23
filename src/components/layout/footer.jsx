import React ,{ useState, useEffect }from 'react'


import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';


export default function Footer() {
  const [openNav, setOpenNav] = useState(false);
 
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
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
      <Link to="/">Home</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
      <Link to="/compte">Account</Link>
        
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
      <Link to="/movies">Movies</Link>

      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="bg-[#164e63] mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        {/* <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <span>Material Tailwind</span>
        </Typography> */}
        <div className="block">{navList}</div>
        {/* <Button variant="gradient" size="sm" className="hidden lg:inline-block">
          <span>Buy Now</span>
        </Button> */}
        
      </div>
      
    </Navbar>
  );
}
