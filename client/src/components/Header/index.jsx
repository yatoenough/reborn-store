import React from 'react'
import styles from './index.module.scss'
import { FaRegUser, FaUserCircle } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

function Header ({ isLogin }) {
  return (
    <header>
      <div className={styles.headerWrapped}>
        <img className={styles.logo} src={'/21.png'} alt='logo' />
        <div className={styles.favicon}>
          <NavLink to='/cart'>
            <FaCartShopping />
          </NavLink>
          <NavLink to={isLogin ? 'profile' : 'signup'}>
            {isLogin ? <FaUserCircle /> : <FaRegUser />}
          </NavLink>
        </div>
      </div>
      <div className={styles.line}></div>
    </header>
  )
}

export default Header
