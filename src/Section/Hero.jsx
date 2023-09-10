import React, { useState } from 'react';


const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarLinksClass = isMenuOpen ? 'navbar-links open' : 'navbar-links';

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="navbar-logo">
        {/* <h1>Your Website</h1> */}
        <img src="logo.png" alt="Logo" />
      </div>
      <div className={`navbar-toggle`} onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      <div className={`navbar-photo ${isMenuOpen ? 'open' : ''}`}>
        <img src="https://i.ibb.co/M8jMbFz/Layer-2-1.png" alt="User" />
      </div>

      <div className={navbarLinksClass}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/contact">Contact</a>
        <a href="/contact">Contact</a>
        <a href="/contact">Contact</a>
        <a href="/contact">Contact</a>
        <a href="/contact">Contact</a>
      </div>

      <div className={`navbar-photo d-none ${isMenuOpen ? 'open' : ''}`}>
        <img src="https://i.ibb.co/M8jMbFz/Layer-2-1.png" alt="User" />
      </div>
   
    </nav>
  );
};

export default Hero;

















// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Hero = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         Logo
//       </div>
//       <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
//         <a href="/">Home</a>
//         <a href="/about">About</a>
//         <a href="/services">Services</a>
//         <a href="/contact">Contact</a>
//       </div>
//       <div className="navbar-toggle" onClick={toggleMobileMenu}>
//         {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//       </div>
//     </nav>
//   );
// };

// export default Hero;






