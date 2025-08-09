import React from 'react'
import styles from './ListingCard.module.css'

function ListingCard() {
  return (
    <div className={styles.container}>
      <img src="" alt="" />
      <div className={styles.info_container}>
        <div className={styles.main_info}>
          <div>
            <h2>Cozy Studio Near Campus</h2>

          </div>
          <div>
            <h2>$750/mo</h2>
          </div>
          
           

        </div>
        <div className={styles.meta_data_container}>
          <p> 0.3 miles from UC Berkely</p>
          <div className={styles.features}>
            <div> icon bed</div>
            <div> icon bath</div>
            <div> icon may-aug</div>

          </div>


        </div>

       

      </div>

      <div>
        <a href="">View Details </a>
      </div>



    </div>
  )
}

export default ListingCard