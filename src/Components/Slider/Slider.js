
import React from 'react'
import styles from './Slider.module.scss'

const Slider = ({images}) => {
  return (
    <div className={styles.sliderContainer}>
        <div className={styles.sliders}>
            {images.map((image, index) => (
                <img key={index} className={styles.slider} src={image} alt="" />
            ))}
        </div>

    </div>
  )
}

export default Slider