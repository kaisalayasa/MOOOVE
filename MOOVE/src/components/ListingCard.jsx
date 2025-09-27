import React from 'react'
import styles from './ListingCard.module.css'
import pic from '../assets/listingpic.jpg'
import { IoIosBed } from "react-icons/io";
import { MdBathroom } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
function ListingCard({size="large",owner=false,data
}) {


  const sizeClass = styles[size] || styles.medium;

  return (
    <div className={`${styles.container} ${sizeClass}`}>
      <div className={styles.tag}>Avallable Now</div>
      <img src={data?.images?.[0] ?? pic} alt={data?.title ?? 'Listing Image'} />
      <div className={styles.info_container}>
        <div className={styles.main_info}>
          <div>
            <h2>{data?.title ??  'Cozy Studio Near Campus'}</h2>
          </div>
          <div>
            <h2>{data?.rent ? ` $${data.rent}/mo` :'$750/mo'}</h2>
          </div>
          
           

        </div>
        <div className={styles.meta_data_container}>
          <p> {data?.address?.distanceToCampus ? `${data.address.distanceToCampus} miles` : '0.3 miles'} from {data?.college ??  'UC berkley'}</p>
          <div className={styles.features}>
            <div><IoIosBed/> {data?.bedrooms ?? 1} </div>
            <div> <MdBathroom /> {data?.bedrooms ?? 1}</div>
            <div>
              <MdDateRange />{" "}
              {data?.availableFrom && data?.availableUntil
                ? `${new Date(data.availableFrom).toLocaleString('default', { month: 'short', day: 'numeric' })} - ${new Date(data.availableUntil).toLocaleString('default', { month: 'short', day: 'numeric' })}`
                : 'May 1 - Aug 31'}
            </div>

          </div>


        </div>

       

      </div>

      <div className={styles.details} >
        <a href="">View Details </a>
      </div>



    </div>
  )
}

export default ListingCard