import React from 'react'
import { Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Container>
        <div className='d-flex justify-content-between align-items-center py-4'>
          <div className="logo"><h2>Logo</h2></div>
          <nav>
            <ul className='d-flex gap-4 nav-link'>
              <li><a href="/"></a>Home</li>
              <li><a href="/"></a>About</li>
              <li><a href="/"></a>Service</li>
              <li><a href="/"></a>contact</li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header