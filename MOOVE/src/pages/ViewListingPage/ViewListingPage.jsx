import React from 'react'
import styles from './ViewListingPage.module.css'
import { IoIosBed } from "react-icons/io";
import { MdBathroom } from "react-icons/md";
import { MdDateRange } from "react-icons/md";

function ViewListingPage() {
  return (
    <>
    <div className={styles.main_layout}>
        <div className={styles.title}>
            <h1>Charming studio with lights</h1>
            <p>Earlham College</p>
        </div>

        <div className={styles.main_container}>
            <div className={styles.img_container}>
                <div className={styles.price}><h3>$700</h3></div>
                <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
              
            </div>
           
            <div className={styles.info_container}> 
                <div className={styles.simple_info}>
                    <div>
                        <br />
                         <h2>Posting by Sarah</h2>
                         <div className={styles.meta_data}>
                            <div><IoIosBed/> 2 </div>
                            <div> <MdBathroom /> 2</div>
                            <div>
                                          <MdDateRange />May 1 - Aug 31
                                          
                                        </div>
                        </div>
                    </div>

                    <div>
                        <p>icon</p>
                    </div>

                </div>
            

                <hr />
                <div>
                    <h3>What this place offers</h3>
                    <div className={styles.grid_layout}> 
                        <div>
                            WIFI
                        </div>
                         <div>
                            Parking Space
                        </div>
                         <div>
                            In-unit Laundry
                        </div>
                         <div>
                           Fully Furnished
                        </div>
                         <div>
                            Pet Friendly
                        </div>

                    </div>
                    <hr />
                     <div className={styles.description}>
                        <h3>Description</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos hic unde voluptas ipsam odit reiciendis culpa, enim ut iusto molestiae, commodi quam dolores! Mollitia minus deserunt neque impedit pariatur!</p>
                </div>
                <hr />
                </div>
                <div className={styles.last_section} >
                    <div className={styles.contact_info}>
                        <h3>Contact Info</h3>
                        <div>
                            <p>Email:kaisalasyasa@gmail.com</p>
                            <p>Instagram: kaisalayasa@instagram</p>

                        </div>
                      
                    </div>
                    <div >
                        <h3>Location Info:</h3>
                        <div className={styles.location_info}>
                           
                        <p>City: <br/> Richmond</p>
                        <p>Distance to Campus:<br/> 0.5M </p>
                        <p>Address:<br/> 801 National Road w</p>
                        <p>Apartment Unit:<br/> 315#</p>

                        </div>
                    


                    </div>

                </div>

              

              



            </div>


        </div>
      



    </div>


    </>
  )
}

export default ViewListingPage