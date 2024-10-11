import styles from './CategoryCard.module.scss'


import React from 'react'

const CategoryCard = ({image, title}) => {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.cardImg}>
            <img src={image} alt={title} />
        </div>
        <div className={styles.cardTitle}>
            <h5>{title}</h5>
        </div>
    </div>
  )
}

export default CategoryCard