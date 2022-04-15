import React from 'react'
import { Link } from 'react-router-dom';
import Error from '../components/Loaders/Error';

const NotFound = () => {
  return (
    <div>
      
      <div style={{ background: 'tomato' }}>
        <Error message={'NotFound 404'} />
      </div>
        <Link to={'/'}>GO 2 HOMEPAGE</Link>
    </div>
  )
}

export default NotFound;