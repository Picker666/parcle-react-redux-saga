import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.scss';

const Nav = (CoreComponent) => class Nav extends CoreComponent {

    render () {

        return <div>
            <div className={styles.nav}>
                <NavLink to="/" className={styles.navItem} exact activeClassName={styles.navActive}>Home</NavLink>
                <NavLink to="/FirstPage" className={styles.navItem} activeClassName={styles.navActive}>FirstPage</NavLink>
                <NavLink to="/SecondPage" className={styles.navItem} activeClassName={styles.navActive}>SecondPage</NavLink>
            </div>
            {super.render()}
        </div>
    }
}

export default Nav;