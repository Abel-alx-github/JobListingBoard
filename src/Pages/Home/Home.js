import React from 'react'
import styles from './Home.module.scss'
export default function Home() {
  return (
    <div className='container'>
        <div className={`${styles.row}  `} >
          <div className={styles.col2}>
            <h1 className={styles.heroTitle}>Remote Jobs</h1>
            <p className={styles.heroTagline}>Unlock Your Career Potential</p>
            <a href="#" className={styles.heroBtn}>Get Started</a>
            <div className={styles.heroSearch}>
              <div className={styles.heroSearchToggle}>
                <a href="#">Jobs</a><a href="#">Companies</a>
              </div>
              <div className={styles.heroSearchContainer}>
                <i className='fas faSearch'></i>
                <input type="text" placeholder="Search for job title, company, or location" />
                <button>Search</button>
              </div>
            </div>
          </div>
          <div className={styles.col2}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, commodi? Iusto placeat reprehenderit deserunt aliquam alias quae, nulla illum vero maxime, corrupti voluptatibus quisquam praesentium ratione. Fugiat enim, excepturi, iste necessitatibus officiis quisquam, harum omnis qui repellat quia eos vitae laborum cumque atque quibusdam. Quod, molestias? Nihil ipsam esse deleniti qui amet earum nesciunt iste voluptas rerum, ut incidunt reprehenderit architecto ratione dolorum placeat autem dicta nostrum at quo inventore officia, explicabo numquam atque dignissimos! Ad omnis perferendis magni, impedit nulla culpa laboriosam officiis quae, nam dolorem quaerat consequuntur possimus corporis sit maiores. Iusto unde tempore aliquam adipisci, at eum molestias odit modi iure! Pariatur, fuga laboriosam quia dolor corrupti nisi doloribus perferendis amet sit, quos accusamus sunt. Harum expedita at sunt amet eaque exercitationem, numquam iusto deserunt est soluta, temporibus sapiente velit necessitatibus. Impedit veniam eveniet sint iure cum accusantium reprehenderit natus doloremque, labore id ipsum, amet modi incidunt exercitationem hic? Quidem consequuntur explicabo itaque porro repudiandae vel consectetur perferendis quasi obcaecati a ducimus officia, omnis libero quibusdam incidunt consequatur, dolore laborum excepturi? Dicta, perspiciatis nostrum! Alias vel ipsa ex cumque non totam delectus sunt possimus officia, velit rem exercitationem magnam maxime quisquam repudiandae corrupti autem praesentium laudantium. Exercitationem.</p>
          </div>

        </div>
      </div>
  )
}
