import React from 'react'
import { useState } from 'react';

const Shipping = () => {

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="flex column w200">
            <h6>delivery address</h6>
            <input type="text" placeholder="Enter delivery address"
            value={address} required
             onChange={(e) => setAddress(e.target.value)}/>
            <input type="text" placeholder="Enter city"
            value={city} required
            onChange={(e) => setCity(e.target.value)}/>
            <input type="number" placeholder="Enter zipcode"
            value={zipcode} required
            onChange={(e) => setZipcode(e.target.value)}/>
            <button type="submit" className="">Continue</button>
        </form>
    </div>
  )
}

export default Shipping