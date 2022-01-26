import React, { useState, useEffect } from 'react'


import HeaderD from '../Header/Header_desk'
import HeaderM from '../Header/Header_mobile'

function Header() {
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 900
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);
  
  
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    return (width < breakpoint ? <HeaderM /> : <HeaderD />
      );
}

export default Header
