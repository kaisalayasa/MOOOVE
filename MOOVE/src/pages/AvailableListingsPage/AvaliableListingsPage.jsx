import React, { useState,useEffect } from 'react'
import ListingCard from '../../components/ListingCard'
import styles from './AvaliableListingsPage.module.css'
import QuickFilters from '../../components/QuickFilters'
import Footer from '../../components/Footer'
import axios from 'axios'
import { hasToken } from '../../utils/hasToken'
import { useNavigate } from 'react-router-dom'


function AvailableListingsPage() {
  const token = localStorage.getItem('token');
  console.log(token,'here is the token')
  const navigate = useNavigate();

  if(!hasToken(token)){
    navigate('/login');
  }
    
  


const [listings,setListings] = useState([]);
  

useEffect(() => {
  const savedData = localStorage.getItem("myData");
  if (savedData) {
    setListings(JSON.parse(savedData));
  }

  const fetchListings = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/listing');
      setListings(res.data);
      localStorage.setItem("myData", JSON.stringify(res.data));
    } catch (err) {
      console.error(err);
    }
  };

  fetchListings();
}, []);

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
        {listings.map((listing, index) => (
        <ListingCard key={listing.id} size="small" data={listing} />
        ))}
        
     
        

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