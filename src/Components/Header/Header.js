import styles from './Header.module.scss';
import logo from '../../Assets/logo.png';
import { Link, NavLink} from 'react-router-dom';
import { useEffect, useState } from 'react';



const Header = () => {
  const [show, setShow]= useState(true);
  const [jobFinder, setJobFinder] = useState(true);
  

// show menu
const showMenu = () => {
  const list = document.querySelector('#list');
  list.style.display = 'block';
  setShow(false);
}
const hideMenu = () => {
  const list = document.querySelector('#list');
  list.style.display = 'none';
  setShow(true);
}

  return (
    <div className={styles.headerContainer}>

    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src={logo} alt="LOGO" />
    
        </NavLink>
      </div>

      <nav className=''>
        <ul className={styles.list} id='list' >

          <li>{jobFinder ? <NavLink to='/jobs'>Find Jobs</NavLink> : <NavLink to='/Feature'>Features</NavLink>}</li>
          <li>{jobFinder ? <NavLink to='/companies'>Find Companies</NavLink> : <NavLink to='/pricing'>Pricing</NavLink>}</li>
          { jobFinder && <li><NavLink to='/blogs'>Blog</NavLink></li>}
          
          {!jobFinder && <li><NavLink to='/about'>About Us</NavLink></li>}
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li><NavLink to ='/login'>Login</NavLink></li>
          <li id="button-nav" ><NavLink to="/signup" >Sign Up</NavLink></li>
          <li className={styles.navDivider}></li>
          <li onClick={ () => setJobFinder(!jobFinder)}>{jobFinder ? <NavLink to='/'>Are you Recruter?</NavLink> : <NavLink to='/'>For Candidate</NavLink>}</li>  
          {/* <li><NavLink>Employers, Are you recruiting</NavLink></li> */}
        </ul>
        <div className={styles.menu} onClick={show ? showMenu : hideMenu} >
          <span id='close' className={`${styles.icon} ${!show ? styles.show : ''}`}></span>
          {/* <label For='#menu'></label> */}
        </div>

      </nav>


    </header>
</div>
)
}

export default Header;
