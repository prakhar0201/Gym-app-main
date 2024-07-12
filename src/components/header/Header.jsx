import React, { useState } from 'react'
import "./header.css"
import Logo from "../../assets/logo-2.jfif"
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll';

const Header = () => {
  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className='header'>
      <img src={Logo} alt="" className='logo' />
      {menuOpened === false && mobile === true ? (
        <div
         style={{
             backgroundColor: 'var(--appColor)',
             padding:'0.5rem', 
             borderRadius:'5px'
          }}
          onClick={()=> setMenuOpened(true)}
          >
             <img src={Bars} alt="" style={{width:'1.5rem', height: '1.5rem'}} />
        </div> 
      ):(
      <ul className='header-menu'>
        <li >
          <Link 
          onClick={()=>setMenuOpened(false)}
          activeClass='active'
          to='header'
          spy={true}
          smooth={true}
          >Home</Link>
        </li>
        <li><Link 
          onClick={()=>setMenuOpened(false)}
          to='program'
          spy={true}
          smooth={true}
          >Programs</Link></li>
        <li>
        <Link 
          onClick={()=>setMenuOpened(false)}
          to='reason'
          spy={true}
          smooth={true}
          >Why Us</Link>
        </li>
        <li><Link 
          onClick={()=>setMenuOpened(false)}
          to='plan'
          spy={true}
          smooth={true}
          >Plans</Link></li>
        <li>
        <Link 
          onClick={()=>setMenuOpened(false)}
          to='testimonial'
          spy={true}
          smooth={true}
          >Testimonial</Link>
        </li>
        <li>
        <Link 
          onClick={()=>setMenuOpened(false)}
          to='join-us'
          spy={true}
          smooth={true}
          >Contact Us</Link>
        </li>
      </ul>
      )}
    </div>
  )
}

export default Header
