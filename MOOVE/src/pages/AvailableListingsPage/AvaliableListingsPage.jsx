import React from 'react'
import ListingCard from '../../components/ListingCard'
import styles from './AvaliableListingsPage.module.css'
import QuickFilters from '../../components/QuickFilters'
import Footer from '../../components/Footer'

function AvailableListingsPage() {
  return (
    <>
    <div className={styles.main_layout}>

         <div className={styles.search_bar_container} >
        <div className={styles.search_bar}>
            <input type="text" placeholder='Search By College...' />
            <p>icon</p>
        </div>

    </div>
    <div className={styles.quick_filters}>
        <QuickFilters/>
          <QuickFilters/>
            <QuickFilters/>
              <QuickFilters/>
                <QuickFilters/>
        

    </div>
    <section className={styles.listings_section}>
      <div className={styles.section_title}>
        <h1>Available Subleases</h1>
        <div className={styles.filters}>

        <button>Create a Listing</button>
        <button>Filter icon</button>
        <button>sort icon</button>
      
        </div>

      
      </div>
      
      
     
       <div className={styles.listings_container}>
        <ListingCard size='small'/>
        <ListingCard size='small'/>
        <ListingCard size='small'/> 
        <ListingCard size='small'/>
     
        <ListingCard size='small'/>
        <ListingCard size='small'/> 
        <ListingCard size='small'/>
        <ListingCard size='small'/>
        
        

    </div>
    <div className={styles.load_more_container}>
      <button >Load more listings</button>
    </div>

    </section>
   


    </div>
    <Footer/>
   

    
    </>
  )
}

export default AvailableListingsPage