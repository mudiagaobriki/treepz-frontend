'use client'

import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import flagNigeria from '../../assets/images/nigeria.png';
import menuIcon from '../../assets/images/menu-icon.png';
import logo from '../../assets/images/logo.png';
import carIcon from '../../assets/images/car.png';
import styles from './NavBar1.module.css'
import Link from "next/link";

const NavBar1 = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleMenu = () => {
        setExpanded(!expanded);
    };

    return (
        <Navbar className={styles.navbar} expand="md">
            <Navbar.Brand>
                <Image src={logo} alt="Logo" className={styles.logo} />
            </Navbar.Brand>
            <Navbar.Toggle onClick={toggleMenu} aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav" className={expanded ? 'show' : ''}>
                <Nav className='ml-auto align-items-center'>
                    <Image src={carIcon} alt='become-a-host' className={styles.carIcon} />
                    <Link href="#" className={styles.hostText}>Become a host</Link>
                    <NavDropdown style={{marginLeft: 32}} title={<Image src={flagNigeria} alt="Flag of Nigeria" className={styles.flag} />} >
                        <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action3">Action 3</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className={styles.hamburgerIcon} title={<Image src={menuIcon} alt="menu-icon" height="40" width="84" />}>
                        <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action3">Action 3</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar1;
