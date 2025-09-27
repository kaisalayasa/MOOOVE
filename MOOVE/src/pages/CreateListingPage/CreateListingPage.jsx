import React, { useState } from 'react'
import styles from './CreateListingPage.module.css'
import img from '../../assets/listingpic.jpg'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function CreateListingPage() {
  // Basic Information
  const [title, setTitle] = useState('');
  const [college, setCollege] = useState('');
  const [rent, setRent] = useState('');
  const [deposit, setDeposit] = useState('');

  // Lease Details
  const [availableFrom, setAvailableFrom] = useState('');
  const [availableUntil, setAvailableUntil] = useState('');
  const [capacity, setCapacity] = useState('1'); // default 1 person
  const [propertyType, setPropertyType] = useState('apartment');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [squareFootage, setSquareFootage] = useState('');

  // Amenities
  const [amenities, setAmenities] = useState({
    furnished: false,
    petFriendly: false,
    inUnitLaundry: false,
    gymAccess: false,
    utilitiesIncluded: false,
    wifiIncluded: false,
    parkingAvailable: false,
    poolAccess: false,
  });

  // Location
  const [address, setAddress] = useState({
    street: '',
    unit: '',
    city: '',
    state: '',
    zip: '',
    distanceToCampus: '',
  });

  // Images
  const [images, setImages] = useState([]);

  // Description & Rules
  const [description, setDescription] = useState('');
  const [rules, setRules] = useState('');

  // Contact Information
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const listingData = {
      title,
      college,
      rent,
      deposit,
      availableFrom,
      availableUntil,
      capacity,
      propertyType,
      bedrooms,
      bathrooms,
      squareFootage,
      amenities,
      address,
      images,
      description,
      rules,
      contactName,
      contactNumber,
      contactEmail,
    };
    try {
      await axios.post("http://localhost:5000/api/listing", listingData);
      console.log('listing created');
      navigate('/avaliable-listings-page');
    } catch (error) {
      console.log(error);
      alert('cant create listing');
    }
  };

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.main_container}>
          <h1 style={{ textAlign: 'center' }}>Create Your Listing</h1>
          <form onSubmit={handleSubmit}>
            {/* Basic Information */}
            <div className={styles.section_title}>
              <h2 style={{ borderBottom: '1px solid #d7d7d7', paddingBottom: "10px" }}>Basic Information</h2>
            </div>
            <div className={styles.grid_layout}>
              <div className={styles.form_group}>
                <label htmlFor="listing_title">Listing Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder='E.g. Cozy Studio near NYU' />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="listing_college">College/University</label>
                <input type="text" onChange={(e) => setCollege(e.target.value)} value={college} placeholder='E.g. Earlham College' />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="listing_rent">Monthly Rent ($)</label>
                <input type="number" onChange={(e) => setRent(e.target.value)} value={rent} placeholder='1200$' />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="listing_deposit">Security Deposit ($)</label>
                <input type="number" onChange={(e) => setDeposit(e.target.value)} value={deposit} placeholder='1200$' />
              </div>
            </div>

            {/* Lease Details */}
            <div className={styles.section_title}>
              <h2 style={{ borderBottom: '1px solid #d7d7d7', paddingBottom: "10px" }}>Lease Details</h2>
            </div>
            <div className={styles.grid_layout}>
              <div className={styles.form_group}>
                <label htmlFor="available_from">Available From</label>
                <input type="date" onChange={(e) => setAvailableFrom(e.target.value)} value={availableFrom} />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="available_until">Available Until</label>
                <input type="date" onChange={(e) => setAvailableUntil(e.target.value)} value={availableUntil} />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="capacity">Capacity</label>
                <select onChange={(e) => setCapacity(e.target.value)} value={capacity}>
                  <option value="1">1 person</option>
                  <option value="2">2 person</option>
                  <option value="3">3 person</option>
                  <option value="4">4+ person</option>
                </select>
              </div>
              <div className={styles.form_group}>
                <label htmlFor="property_type">Property Type</label>
                <select onChange={(e) => setPropertyType(e.target.value)} value={propertyType}>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="studio">Studio</option>
                  <option value="dorm">Dorm</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '40px', paddingTop: '20px' }}>
              <div className={styles.form_group}>
                <label htmlFor="bedrooms">Bedrooms</label>
                <input type="number" onChange={(e) => setBedrooms(e.target.value)} value={bedrooms} placeholder='1,2,3 etc..' />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="bathrooms">Bathrooms</label>
                <input type="number" onChange={(e) => setBathrooms(e.target.value)} value={bathrooms} placeholder='1,2,3 etc..' />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="size">Square Footage</label>
                <input onChange={(e) => setSquareFootage(e.target.value)} value={squareFootage} type="number" placeholder='E.g. 750' />
              </div>
            </div>

            {/* Features & Amenities */}
            <div className={styles.section_title}>
              <h2 style={{ borderBottom: '1px solid #d7d7d7', paddingBottom: "10px" }}>Features & Amenities</h2>
            </div>
            <div className={styles.grid_layout}>
              <div className={styles.checkbox_group}>
                <label htmlFor="fully_furnished" className={styles.checkbox_label}>
                  <input type="checkbox" checked={amenities.furnished} onChange={(e) => setAmenities({ ...amenities, furnished: e.target.checked })} id="fully_furnished" />
                  Fully Furnished
                </label>
                <label htmlFor="pet_friendly" className={styles.checkbox_label}>
                  <input type="checkbox" checked={amenities.petFriendly} onChange={(e) => setAmenities({ ...amenities, petFriendly: e.target.checked })} id="pet_friendly" />
                  Pet Friendly
                </label>
                <label htmlFor="in_unit_laundry" className={styles.checkbox_label}>
                  <input type="checkbox" checked={amenities.inUnitLaundry} onChange={(e) => setAmenities({ ...amenities, inUnitLaundry: e.target.checked })} id="in_unit_laundry" />
                  In-unit Laundry
                </label>
                <label htmlFor="gym_access" className={styles.checkbox_label}>
                  <input type="checkbox" checked={amenities.gymAccess} onChange={(e) => setAmenities({ ...amenities, gymAccess: e.target.checked })} id="gym_access" />
                  Gym Access
                </label>
              </div>

              <div className={styles.checkbox_group}>
                <label htmlFor="utilities_included" className={styles.checkbox_label}>
                  <input type="checkbox" checked={amenities.utilitiesIncluded} onChange={(e) => setAmenities({ ...amenities, utilitiesIncluded: e.target.checked })} id="utilities_included" />
                  Utilities Included
                </label>
                <label htmlFor="wifi_included" className={styles.checkbox_label}>
                  <input type="checkbox" checked={amenities.wifiIncluded} onChange={(e) => setAmenities({ ...amenities, wifiIncluded: e.target.checked })} id="wifi_included" />
                  WiFi Included
                </label>
                <label htmlFor="parking_available" className={styles.checkbox_label}>
                  <input type="checkbox" checked={amenities.parkingAvailable} onChange={(e) => setAmenities({ ...amenities, parkingAvailable: e.target.checked })} id="parking_available" />
                  Parking Available
                </label>
                <label htmlFor="pool_access" className={styles.checkbox_label}>
                  <input type="checkbox" checked={amenities.poolAccess} onChange={(e) => setAmenities({ ...amenities, poolAccess: e.target.checked })} id="pool_access" />
                  Pool Access
                </label>
              </div>
            </div>

            {/* Location */}
            <div className={styles.section_title}>
              <h2 style={{ borderBottom: '1px solid #d7d7d7', paddingBottom: "10px" }}>Location</h2>
            </div>
            <div className={styles.grid_layout}>
              <div className={styles.form_group}>
                <label>Address</label>
                <input type="text" value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} placeholder='Street address' />
              </div>
              <div className={styles.form_group}>
                <label>Apartment/Unit #</label>
                <input type="text" value={address.unit} onChange={(e) => setAddress({ ...address, unit: e.target.value })} placeholder='Apt #' />
              </div>
              <div className={styles.form_group}>
                <label>City</label>
                <input type="text" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} placeholder='City' />
              </div>
              <div className={styles.form_group}>
                <label>State</label>
                <input type="text" value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })} placeholder='State' />
              </div>
              <div className={styles.form_group}>
                <label>Zip Code</label>
                <input type="text" value={address.zip} onChange={(e) => setAddress({ ...address, zip: e.target.value })} placeholder='Zip' />
              </div>
              <div className={styles.form_group}>
                <label>Distance to Campus (miles)</label>
                <input type="number" value={address.distanceToCampus} onChange={(e) => setAddress({ ...address, distanceToCampus: e.target.value })} placeholder='E.g. 0.5' />
              </div>
            </div>

            {/* Images */}
            <div className={styles.section_title}>
              <h2 style={{ borderBottom: '1px solid #d7d7d7', paddingBottom: "10px" }}>Images</h2>
            </div>
            <label className={styles.upload_container}>
              <h1>icon</h1>
              <p>Click to upload images</p>
              <p>Upload up to 10 high-quality photos (Max 5MB each)</p>
              <input type="file" style={{ display: 'none' }} multiple onChange={(e) => setImages([...e.target.files])} />
            </label>
            <div className={styles.preview_container}>
              {images.length > 0 ? [...images].map((file, idx) => (
                <img key={idx} src={URL.createObjectURL(file)} alt="preview" />
              )) : (
                <>
                  <img src={img} alt="" />
                  <img src={img} alt="" />
                </>
              )}
            </div>

            {/* Description & Rules */}
            <div className={styles.text_area}>
              <label>Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Any other information you'd like to share about the sublease"></textarea>
            </div>
            <div className={styles.text_area}>
              <label>House Rules</label>
              <textarea value={rules} onChange={(e) => setRules(e.target.value)} placeholder="Any house rules"></textarea>
            </div>

            {/* Contact Info */}
            <div className={styles.section_title}>
              <h2 style={{ borderBottom: '1px solid #d7d7d7', paddingBottom: "10px" }}>Contact Information</h2>
            </div>
            <div className={styles.grid_layout}>
              <div className={styles.form_group}>
                <label>Contact Name</label>
                <input type="text" value={contactName} onChange={(e) => setContactName(e.target.value)} placeholder='Your Name' />
              </div>
              <div className={styles.form_group}>
                <label>Phone Number</label>
                <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder='123456789' />
              </div>
              <div className={styles.form_group}>
                <label>Email</label>
                <input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} placeholder='example@email.com' />
              </div>
            </div>

            <div className={styles.submit_div}>
              <button type='submit'>Create Listing</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateListingPage
