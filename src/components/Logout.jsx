import React, { useEffect } from 'react';

function Logout(props) {

    useEffect(() =>{
        localStorage.removeItem('status');
       // localStorage.clear();
        window.location='/'
    })

    return null;
}

export default Logout;