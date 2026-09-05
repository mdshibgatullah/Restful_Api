import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaTimes, FaBars } from 'react-icons/fa';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');

  return (
    <header className="header">
      <Container>
        <div className="header-wrapper">

          <div className="logo">
            <h2>Logo</h2>
          </div>

          <div className="right d-flex gap-4">
              <ul className={`nav-link ${open ? 'open' : ''}`}>
              <li className={active === 'Home' ? 'active' : ''}>
                <a href="#" onClick={() => setActive('Home')}>
                  Home
                </a>
              </li>

              <li className={active === 'About' ? 'active' : ''}>
                <a href="#" onClick={() => setActive('About')}>
                  About
                </a>
              </li>

              <li className={active === 'Service' ? 'active' : ''}>
                <a href="#" onClick={() => setActive('Service')}>
                  Service
                </a>
              </li>

              <li className={active === 'Contact' ? 'active' : ''}>
                <a href="#" onClick={() => setActive('Contact')}>
                  Contact
                </a>
              </li>
              </ul>


            <div className="button d-flex gap-4">
              <a href='/register' className='btn btn-primary'>Registration</a>
              <a href='/admin/login' className='btn btn-primary'>Login</a>
            </div>
          </div>
          



          <button
            className="burger"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </Container>
    </header>
  );
};

export default Header;
