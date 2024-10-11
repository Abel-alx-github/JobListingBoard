
import bannerGif from "../../Assets/bannerGif.gif";
import item0 from '../../Assets/sliderItem0.png'
import item1 from '../../Assets/slideritem1.png'
import item2 from '../../Assets/slideritem2.png'
import item3 from '../../Assets/slideritem3.png'
import item4 from '../../Assets/slideritem4.png'
import item5 from '../../Assets/slideritem5.png'
import item6 from '../../Assets/slideritem6.png'

import Slider from '../../Components/Slider/Slider'
import Hero from '../../Components/Hero/Hero'
import styles from './Home.module.scss'
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
const sliderImages = [
  item0, item1, item2, item3, item4, item5, item6, item0, item1, item2, item3, item4, item5, item6,
  item0, item1, item2, item3, item4, item5, item6, item0, item1, item2, item3, item4, item5, item6,
  item0, item1, item2, item3, item4, item5, item6, item0, item1, item2, item3, item4, item5, item6
]
const categoryItems = [ item2, item3, item4, item5, item6, item0, item1, item2, item3];
export default function Home() {
 
  return (
    <div className='container'>
      <Hero />     
        <div className={styles.bannerGif}>
          <img src={bannerGif} alt="Expo banner 2024" />
        </div>
  
        <h2 className={styles.sliderHeadingTitle}>Trusted By</h2>
        <Slider images={sliderImages} />
        <h2 className={styles.categoriesHeadingTitle}>Top Categories</h2>
       
       <div className={styles.categoryContainer}>
         {
          categoryItems.map((image, idx) => {
            return <CategoryCard key={idx} image={image} title={`Category ${idx}`} />
            })
        }
            <CategoryCard className={styles.categoryItem} image={item3} title={`Category 333`} />

       </div>
      </div>
  )
} 
