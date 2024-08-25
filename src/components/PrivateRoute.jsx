import React from 'react'

import { Outlet } from 'react-router-dom';


const PrivateRoute = () => {

    let loggin = false;
    if(loggin){
        return <Outlet/>
    }
}

export default PrivateRoute