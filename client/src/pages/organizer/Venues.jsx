import React, { useEffect, useState } from 'react'
import VenueFilters from '../../components/Venue/VenueFilters'
import Navbar from '../../components/Navbar'
import { GoSearch } from "react-icons/go";
import axios from 'axios'

// useEffect(() => {
//   // Fetch data from the API
//   axios.get('http://localhost:5000/api/data')
//     .then(response => console.log(response.data))
//     .catch(error => console.error(error));
// }, []);

const Venues = () => {     
  return (
    <div>
      <Navbar role="Organiser" />
      <VenueFilters />
      <div className="header flex items-center justify-between mt-5 px-5">
        <div>
        <h2>Wedding Venues</h2>
        <span>Showing 1989 results as per your search criteria</span>
        </div>
        <div className='flex items-center'>
        <input type="text" name="" id="" className='bg-black'/>
        <GoSearch />
        </div>
      </div>
    </div>
  )
}

export default Venues
