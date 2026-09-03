import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaTimes, FaBars } from 'react-icons/fa';


const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <Container>
        <div className="d-flex justify-content-between align-items-center py-4 position-relative">
          <div className="logo">
            <h2>Logo</h2>
          </div>

          <ul className='nav-link d-flex gap-4'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <button
          onClick={()=>setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;