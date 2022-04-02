import React from 'react';
import { Route, Link } from 'react-router-dom';


const privateRouter = ({component: Component, ...rest}) => {
  return (
    <Route 
        {...rest}
        component={(props) => {
            const token = window.localStorage.getItem('userInfo');
            if(token) {
                return (<Component {...props} />)
            } else {
                // משהו פה לא עובד טוב.
                // זה כדי שהאתר לא ישבר אם עושים לוגאאוט בשלבים מסויים בהזמנה
                return <Link to={'/login'} replace/>
            }
        }}
    />
  )
}

export default privateRouter