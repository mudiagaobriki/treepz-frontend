'use client'

import React from 'react';
import {Row} from "react-bootstrap";
import Image from "next/image";
import logo from '../../assets/images/logo.png'
import googlePlayIcon from '../../assets/images/google-play-icon.png'
import appStoreIcon from '../../assets/images/appstore-icon.png'
import twitter from '../../assets/images/twitter-icon.png'
import instagram from '../../assets/images/instagram-line.png'
import linkedin from '../../assets/images/linkedin-icon.png'
import facebook from '../../assets/images/facebook-icon.png'
import styles from './Footer1.module.css'
import Link from "next/link";

const Footer1 = () => {
    return (
        <div>
            <div className='flex align-items-center border-bottom' style={{paddingBottom: 40}}>
                <Image src={logo} alt='logo' className={styles.logo} />
                <div className='ml-auto flex align-items-center'>
                    <span>Your journey starts here, get the app</span>
                    <Image src={appStoreIcon} alt='apple store icon' className={styles.appStoreIcons} style={{marginLeft: 20}} />
                    <Image src={googlePlayIcon} alt='google play icon' className={styles.appStoreIcons} style={{marginLeft: 15}} />
                </div>
            </div>
            <div className={styles.footerMiddleContent} style={{paddingLeft: 40, paddingRight: 40}}>
                <div>
                    <p className={styles.footerListHeader}>Features</p>
                    <div className={styles.footerList}>
                        <ul style={{paddingLeft: 0}}>
                            <li style={{marginBottom: 12}}>
                                <Link href='#' className={styles.footerListItem}>Book a car</Link><br/>
                            </li>
                            <li style={{marginBottom: 12}}>
                                <Link href='#' className={styles.footerListItem}>Treepz for partners</Link>
                            </li>
                            <li style={{marginBottom: 12}}>
                                <Link href='#' className={styles.footerListItem}>How it works</Link>
                            </li>
                            <li style={{marginBottom: 12}}>
                                <Link href='#' className={styles.footerListItem}>FAQs</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className={styles.footerListHeader}>Company</p>
                    <div className={styles.footerList}>
                        <ul style={{paddingLeft: 0}}>
                            <li style={{marginBottom: 12}}>
                                <Link href='#' className={styles.footerListItem}>About</Link><br/>
                            </li>
                            <li style={{marginBottom: 12}}>
                                <Link href='#' className={styles.footerListItem}>Press</Link>
                            </li>
                            <li style={{marginBottom: 12}}>
                                <Link href='#' className={styles.footerListItem}>Help</Link>
                            </li>
                            <li style={{marginBottom: 12}}>
                                <Link href='#' className={styles.footerListItem}>Blog</Link>
                            </li>
                            <li style={{marginBottom: 12}}>
                                <Link href='#' className={styles.footerListItem}>Help center</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className={styles.footerListHeader}>Locations</p>
                    <div className={styles.footerList}>
                        <ul style={{paddingLeft: 0}}>
                            <li style={{marginBottom: 12}}>
                                <Link href='#' className={styles.footerListItem}>Ghana</Link><br/>
                            </li>
                            <li style={{marginBottom: 12}}>
                                <Link href='#' className={styles.footerListItem}>Kenya</Link>
                            </li>
                            <li style={{marginBottom: 12}}>
                                <Link href='#' className={styles.footerListItem}>Nigeria</Link>
                            </li>
                            <li style={{marginBottom: 12}}>
                                <Link href='#' className={styles.footerListItem}>Uganda</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className={styles.footerListHeader}>Hosting</p>
                    <div className={styles.footerList}>
                        <ul style={{paddingLeft: 0}}>
                            <li style={{marginBottom: 12}}>
                                <Link href='#' className={styles.footerListItem}>List your car</Link><br/>
                            </li>
                            <li style={{marginBottom: 12}}>
                                <Link href='#' className={styles.footerListItem}>Insurance and protection</Link>
                            </li>
                            <li style={{marginBottom: 12}}>
                                <Link href='#' className={styles.footerListItem}>FAQs</Link>
                            </li>
                        </ul>
                    </div>
                    <br/>
                    <p className={styles.footerListHeader}>Follow us</p>
                    <div className={styles.socialIconsContainer}>
                        <Image src={twitter} alt="twitter icon" className={styles.socialIcon} />
                        <Image src={facebook} alt="twitter icon" className={styles.socialIcon} />
                        <Image src={linkedin} alt="twitter icon" className={styles.socialIcon} />
                        <Image src={instagram} alt="twitter icon" className={styles.socialIcon} />
                    </div>
                </div>
            </div>
            <div className={styles.footerBottomContent}>
                <p className={styles.footerBottomText}>
                    &copy; {new Date().getFullYear()} Treepz.com, Inc. All rights reserved.
                </p>
                <div className="ml-auto d-flex">
                    <Link href="#" className={styles.footerBottomText} style={{textDecoration: 'underline'}}>
                        Terms & Conditions |
                    </Link>
                    <Link href="#" className={styles.footerBottomText} style={{textDecoration: 'underline'}}>
                        Privacy Policy |
                    </Link>
                    <Link href="#" className={styles.footerBottomText} style={{textDecoration: 'underline'}}>
                        Cookie Policy
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer1;