import { useState } from 'react';
import logo from '../images/logo_colored.png'
import { Link } from 'react-router-dom';
import { IoStorefrontSharp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { VscNewFolder } from "react-icons/vsc";
import { FaUserPlus } from "react-icons/fa6";


function Navigation() {
  return (
    <div className="dashboard-menu">
      <div className="brand">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <ul className='nav-menu'>
          <li className='nav-item' > <Link to="/" className='nav-link' > <IoHome/>Dashboard</Link> </li>
          <li className='nav-item' > <Link to="/product" className='nav-link' > <IoStorefrontSharp/> Products</Link> </li>
          <li className='nav-item' > <Link to="/user" className='nav-link' ><FaUserGroup/>Users</Link> </li>
          <li className='nav-item' > <Link to="/create-product" className='nav-link'> <VscNewFolder/>Create product</Link> </li>
          <li className='nav-item' > <Link to="/create-user" className='nav-link'> <FaUserPlus/>Create user</Link> </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation