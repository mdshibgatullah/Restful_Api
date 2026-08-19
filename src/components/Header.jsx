import { useState } from 'react'
import { Container } from 'react-bootstrap'
import '../App.css'

const Header = () => {
  const [isActive, setIsActive] = useState('home')
  
  return (
    <header className='border-bottom'>
      <Container>
        <div className="d-flex justify-content-between align-items-center py-3 ">
          <h3 className='fw-bold '>Logo</h3>

          <ul className='d-flex gap-4 nav-link'>
            <li className={isActive === 'home' ? 'active' : ''}><a href="/" onClick={()=> setIsActive('home')}>Home</a></li>
            <li className={isActive === 'about' ? 'active' : ''}><a href="#about" onClick={()=> setIsActive('about')}>About</a></li>
            <li className={isActive === 'service' ? 'active' : ''}><a href="#service" onClick={()=> setIsActive('service')}>Services</a></li>
            <li className={isActive === 'blog' ? 'active' : ''}><a href="#blog" onClick={()=> setIsActive('blog')}>Blog</a></li>
          </ul>
        </div>
      </Container>
    </header>
  )
}

export default Header