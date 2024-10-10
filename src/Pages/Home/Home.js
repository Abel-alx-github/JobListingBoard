import React, {useState} from 'react'
import styles from './Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import bannerGif from "../../Assets/bannerGif.gif";
import item0 from '../../Assets/sliderItem0.png'
import item1 from '../../Assets/slideritem1.png'
import item2 from '../../Assets/slideritem2.png'
import item3 from '../../Assets/slideritem3.png'
import item4 from '../../Assets/slideritem4.png'
import item5 from '../../Assets/slideritem5.png'
import item6 from '../../Assets/slideritem6.png'

export default function Home() {
  const [isJob, setIsJob] = useState(true);
 
  return (
    <div className='container'>
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
        <div className={styles.bannerGif}>
          <img src={bannerGif} alt="Expo banner 2024" />
        </div>
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
          <img  className={styles.slideItem} src={item0} alt="" />
          <img  className={styles.slideItem} src={item1} alt="" />
          <img  className={styles.slideItem} src={item2} alt="" />
          <img  className={styles.slideItem} src={item3} alt="" />
          <img  className={styles.slideItem} src={item4} alt="" />
          <img  className={styles.slideItem} src={item5} alt="" />
          <img  className={styles.slideItem} src={item6} alt="" />
          <img  className={styles.slideItem} src={item0} alt="" />
          <img  className={styles.slideItem} src={item1} alt="" />
          <img  className={styles.slideItem} src={item2} alt="" />
          <img  className={styles.slideItem} src={item3} alt="" />
          <img  className={styles.slideItem} src={item4} alt="" />
          <img  className={styles.slideItem} src={item5} alt="" />
          <img  className={styles.slideItem} src={item6} alt="" />
        
          <img  className={styles.slideItem} src={item0} alt="" />
          <img  className={styles.slideItem} src={item1} alt="" />
          <img  className={styles.slideItem} src={item2} alt="" />
          <img  className={styles.slideItem} src={item3} alt="" />
          <img  className={styles.slideItem} src={item4} alt="" />
          <img  className={styles.slideItem} src={item5} alt="" />
          <img  className={styles.slideItem} src={item6} alt="" />
        
          </div>
        </div>
      </div>
  )
}
