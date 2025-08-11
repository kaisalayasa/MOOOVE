import React from 'react'
import styles from './ExplanationCard.module.css'

function ExplanationCard() {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <div className={styles.icon}>
                icon
                
            </div>
            <h3>Search & filter</h3>

        </div>
        <div className={styles.text}>
            <p>Browse verified listings near your campus. Filter by price, dates, amenities, and more to find your perfect match.</p>
        </div>








    </div>
  )
}

export default ExplanationCard