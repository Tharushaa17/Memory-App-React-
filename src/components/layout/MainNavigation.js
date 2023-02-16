import React from 'react'
import { Link } from 'react-router-dom'
import  classes  from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetup</Link>
                </li>
                <li>
                    <Link to='/favourites'>Favourites</Link>
                </li>
                <li>
                    <Link to='/newmeetups'>Add New Meetup</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation