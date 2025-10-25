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
                <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
              
            </div>
           
            <div className={styles.info_container}> 
                <div className={styles.simple_info}>
                    <div>
                         <h2>Posting by Sarah</h2>
                         <div className={styles.meta_data}>
                            <div><IoIosBed/> 2 </div>
                            <div> <MdBathroom /> 2</div>
                        </div>
                    </div>

                    <div>
                        <p>icon</p>
                    </div>

                </div>
                <hr />

                <div className={styles.description}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos hic unde voluptas ipsam odit reiciendis culpa, enim ut iusto molestiae, commodi quam dolores! Mollitia minus deserunt neque impedit pariatur!</p>

                </div>

                <hr />
                <div>
                    <h3>What this place offers</h3>
                    <div className={styles.grid_layout}> 
                        <div>asdasd</div>
                    <div>asdasd</div> <div>asdasd</div> <div>asdasd</div> <div>asdasd</div> <div>asdasd</div>

                    </div>
                </div>
              


            </div>


        </div>
      



    </div>


    </>
  )
}

export default ViewListingPage