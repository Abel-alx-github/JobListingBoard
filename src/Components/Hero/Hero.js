import React, {useState} from 'react'
import styles from './Hero.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Hero = () => {
    const [isJob, setIsJob] = useState(true);

    return (
    <div>
         <div className={styles.heroContainer}>
       <div className={`${styles.row}  `} >
          <div className={styles.col2}>
            <h1 className={styles.heroTitle}>Remote Jobs</h1>
            <p className={styles.heroTagline}>Unlock Your Career Potential</p>
            <a href="#" className={styles.heroBtn}>Get Started</a>
            <div className={styles.heroSearch}>
              <div className={styles.heroSearchToggle}>
                <a className={`${isJob? styles.active: ''}`} href="#" onClick={()=> setIsJob(true)}>Jobs</a>
                <a className={`${!isJob? styles.active: ''}`} href="#" onClick={()=> setIsJob(false)}>Companies</a>
              </div>
              <div className={styles.heroSearchContainer}>
                <i><FontAwesomeIcon icon={faSearch} /></i>
                <input type="text" placeholder={`${"Search for"}  ${isJob ? "jobs" : "companies"}`} />
                <button type="search">Search</button>
              </div>
            </div>
          </div>
          <div className={`${styles.col2} ${styles.heroImg}`}>
            <div className={styles.img}></div> 
          </div>

        </div>
        </div> 
    </div>
  )
}

export default Hero