import React from 'react'
import styles from './CreateListingPage.module.css'

function CreateListingPage() {
  return (
   <>
      <div className={styles.layout}>
        <div className={styles.main_container}>
        <h1 style={{textAlign:'center'}}>Create Your Listing</h1>
        <form action="POST">

          <div className={styles.section_title}>
            <h2 style={{ borderBottom: '1px solid #d7d7d7', paddingBottom : "10px"}}>Basic Information</h2>
          </div>

          <div className={styles.grid_layout}>

            <div className={styles.form_group}>
                <label htmlFor="listing_title">Listing Title</label>
                <input type="text"  placeholder='E.g. Cozy Studio near NYU'/> 
            </div>
            <div className={styles.form_group}>
                <label htmlFor="listing_title">Near College/University</label>
                <input type="text"  placeholder='E.g. Cozy Studio near NYU'/> 
            </div>
            <div className={styles.form_group}>
                <label htmlFor="listing_title">Monthly Rent ($)</label>
                <input type="number"  placeholder='1200$'/> 
            </div>
            <div className={styles.form_group}>
                <label htmlFor="listing_title">Security Deposit ($)</label>
                <input type="number"  placeholder='1200$'/> 
            </div>
          </div>
          <div className={styles.section_title}>
            <h2 style={{ borderBottom: '1px solid #d7d7d7', paddingBottom : "10px"}}>Lease Details</h2>
          </div>

          <div className={styles.grid_layout}>

            <div className={styles.form_group}>
                <label htmlFor="listing_title">Available From</label>
                <input type="date"  placeholder='E.g. Cozy Studio near NYU'/> 
            </div>
            <div className={styles.form_group}>
                <label htmlFor="listing_title">Available Until</label>
                <input type="date"  placeholder='E.g. Cozy Studio near NYU'/> 
            </div>
            <div className={styles.form_group}>
                <label htmlFor="num_select">Listing Title</label>
                <select name="num_select" id="num_select">
                  <option value="1">1 person</option>
                  <option value="2">2 person</option>
                  <option value="3">3 person</option>
                  <option value="4">4+ person</option>
                </select>
            </div>
            <div className={styles.form_group}>
                <label htmlFor="property_type">Property Type</label>
                  <select name="num_select" id="num_select">
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="studio">Studio</option>
                  <option value="dorm">Dorm</option>
                </select>
            </div>

          </div>
          <div style={{display:'grid',gridTemplateColumns: '1fr 1fr 1fr', columnGap:'40px', paddingTop: '20px'}}>
            <div className={styles.form_group}>
              <label htmlFor="bedrooms">Bedrooms</label>
              <input type="number" placeholder='1,2,3 etc..' />
            </div>
            <div className={styles.form_group}>
                <label htmlFor="bathrooms">Bathroom</label>
              <input type="number" placeholder='1,2,3 etc..' />

            </div>
            <div className={styles.form_group}>
               <label htmlFor="size">Square Footage</label>
              <input type="number" placeholder='E.g. 750' />

            </div>
          </div>
           <div className={styles.section_title}>
            <h2 style={{ borderBottom: '1px solid #d7d7d7', paddingBottom : "10px"}}>Features & Amenities</h2>
          </div>

          <div className={styles.grid_layout}>
            <div className={styles.checkbox_group}>
          <label htmlFor="fully_furnished" className={styles.checkbox_label}>
            <input type="checkbox" id="fully_furnished" name="fully_furnished" />
            Fully Furnished
          </label>

          <label htmlFor="pet_friendly" className={styles.checkbox_label}>
            <input type="checkbox" id="pet_friendly" name="pet_friendly" />
            Pet Friendly
          </label>

          <label htmlFor="in_unit_laundry" className={styles.checkbox_label}>
            <input type="checkbox" id="in_unit_laundry" name="in_unit_laundry" />
            In-unit Laundry
          </label>

          <label htmlFor="gym_access" className={styles.checkbox_label}>
            <input type="checkbox" id="gym_access" name="gym_access" />
            Gym Access
          </label>
        </div>

        <div className={styles.checkbox_group}>
          <label htmlFor="utilities_included" className={styles.checkbox_label}>
            <input type="checkbox" id="utilities_included" name="utilities_included" />
            Utilities Included
          </label>

          <label htmlFor="wifi_included" className={styles.checkbox_label}>
            <input type="checkbox" id="wifi_included" name="wifi_included" />
            WiFi Included
          </label>

          <label htmlFor="parking_available" className={styles.checkbox_label}>
            <input type="checkbox" id="parking_available" name="parking_available" />
            Parking Available
          </label>

          <label htmlFor="pool_access" className={styles.checkbox_label}>
            <input type="checkbox" id="pool_access" name="pool_access" />
            Pool Access
          </label>
        </div>

          
        </div>
    <div className={styles.section_title}>
            <h2 style={{ borderBottom: '1px solid #d7d7d7', paddingBottom : "10px"}}>Location</h2>
          </div>

          <div className={styles.grid_layout}>

            <div className={styles.form_group}>
                <label htmlFor="listing_title">Address</label>
                <input type="text"  placeholder='Street address'/> 
            </div>
            <div className={styles.form_group}>
                <label htmlFor="listing_title">Apartment/Unit #</label>
                <input type="text"  placeholder='Apt #'/> 
            </div>
            <div className={styles.form_group}>
                <label htmlFor="listing_title">City</label>
                <input type="number"  placeholder='1200$'/> 
            </div>
            <div className={styles.form_group}>
                <label htmlFor="listing_title">State</label>
                <input type="number"  placeholder=''/> 
            </div>
            <div className={styles.form_group}>
                <label htmlFor="listing_title">Zip Code</label>
                <input type="text"  placeholder=''/> 
            </div>
            <div className={styles.form_group}>
                <label htmlFor="listing_title">Distance to Campus (miles)</label>
                <input type="number"  placeholder='E.g. 0.5'/> 
            </div>
          </div>





      </form>

      </div>
      
        
      </div>
   
   
   
   
   </>
  )
}

export default CreateListingPage