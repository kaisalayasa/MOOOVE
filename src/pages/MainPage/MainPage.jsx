import React from 'react'
import styles from './MainPage.module.css'
import ListingCard from '../../components/ListingCard'
import ExplanationCard from '../../components/ExplanationCard'
import Footer from '../../components/Footer'

function MainPage() {
  return (
    <>
    <section className={styles.hero}>
        <div className={styles.hero_main}>

        <div className={styles.hero_text}>
        <h1>Find Your Perfect College Sublet</h1>
        <p>Secure,affordable, and convenient subleases near your campus. No more stressing about summer housing or semster breaks</p>
        </div>
        <div className={styles.search_container}>
            <div className={styles.location_container}>
                <label htmlFor="">location</label>
                <input type="text" placeholder='location name'/>
            </div>
            <div className={styles.date_container}>
                <div className={styles.date_layout}>
                      <label htmlFor="">move-in date</label>
                        <input type="date" name="" id="" />

                </div>
              <div className={styles.date_layout}>
                  <label htmlFor="">move-out date</label>
                <input type="date" name="" id="" />

              </div>
           
            </div>
           
             <div className={styles.find}>
                   <button>Find Sublets</button>


              </div>


        </div>

        </div>
        <div className={styles.hero_image}>
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt="house" />

        </div>
        
        

    </section>
    <section className={styles.featured}>
        <div className={styles.featured_title}>
            <div>
                  <h1>Featured Sublets</h1>

            </div>
            <div>
                 <a href="">view all</a>

            </div>
        
        </div>

        <div className={styles.featured_listings}>
            <ListingCard/>
            <ListingCard/>
            <ListingCard/>
            

        </div>

        



    </section>
    <section className={styles.explanation}>
      <div style={{textAlign: "center"}}>   
        <h1> How Mooove Works</h1>
      </div>
      <div className={styles.info_cards}>
        <ExplanationCard/>
         <ExplanationCard/>
          <ExplanationCard/>

      </div>

    </section>

    <section className={styles.end}>
        <div style={{textAlign: "center"}}>   
        <h1> Ready to Find Your College Sublet?</h1>
        <p>Whether you're looking for summer housing or need to sublease your apartment while studying abroad, we've got you covered.</p>
      </div>
      <div className={styles.end_buttons_layout}>
         <a>Post A Listing</a>

        <a>Search Available Sublets</a>
       
      </div>
      
      




    </section>
    <Footer/>    


    
    
    </>
  )
}

export default MainPage