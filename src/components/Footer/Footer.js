import React, { useState, useEffect } from 'react'


import FooterD from '../Footer/Footer_desk'
import FooterM from '../Footer/Footer_mobile'

function Footer() {
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 900
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);
  
  
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    return (width < breakpoint ? <FooterM /> : <FooterD />
      );
}

export default Footer
