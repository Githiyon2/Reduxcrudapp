import React from 'react'
import { Home,AddUser,EditUser } from '../../pages'

const Routers = [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/addUser',
        element:<AddUser/>
    },
    {
        path:'/editUser/:id',
        element:<EditUser/>
    },

]

export default Routers;