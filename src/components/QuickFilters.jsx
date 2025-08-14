import React from 'react'
import styles from './QuickFilters.module.css'

function QuickFilters() {
  return (
    <button className={styles.container}>
      <div className={styles.icon_container}>
        <p>icon</p>
      </div>
      <p>pet-friendly</p>

    </button>
  )
}

export default QuickFilters