import React from 'react';

import styles from './Footer.module.css';

export default function Footer() {
return ( 
        <> 
            <div className={styles.main}>
                <div className={styles.container1}>
                <h1 className={styles.footer1}>Inspiration for future getaways</h1>
            </div>
            
            <h1 className={styles.footerhead}>Travel tips & inspiration</h1>
            <hr />
            <div className={styles.footer1}>
                
                <div className={styles.subtext}>
                    <h1>Family travel hub</h1>
                    <p>Tips and inspiration</p>
                </div>
                <div className={styles.subtext}>
                    <h1>Family budget travel</h1>
                    <p>Get there for less</p>
                </div>
                <div className={styles.subtext}>
                    <h1>Vacation ideas for any budget</h1>
                    <p>Make it special without making ir</p>
                </div>
                <div className={styles.subtext}>
                    <h1>Travel Europe on a budget</h1>
                    <p>How to take the kids to Europe for less</p>
                </div>
                <div className={styles.subtext}>
                    <h1>Outdoor adventure</h1>
                    <p>Explore natur with the family</p>
                </div>
                <div className={styles.subtext}>
                    <h1>Bucket list national parks</h1>
                    <p>Must-see parks for family travel</p>
                </div>
                <div className={styles.subtext}>
                    <h1>Kid-friendly state parks</h1>
                    <p>Check out these family-friendly hikes</p>
                </div>
            </div>
            <div className={styles.footercontent}>
                 <div className={styles.subtext}>
                    <h4>Support</h4>
                    <p>Help Center</p>
                    <p>Get help with a safety issue</p>
                    <p>AirCover</p>
                    <p>Anti-discrimination</p>
                    <p>Disability support</p>
                    <p>Cancellation options</p>
                    <p>Report neighborhood concern</p>
                </div>
            <div className={styles.subtext}>
                <h4>Hosting</h4>
                <p>Airbnb your home</p>
                <p>Airbnb your experience</p>
                <p>Airbnb your service</p>
                <p>AirCover for Hosts</p>
                <p>Hosting resources</p>
                <p>Community forum</p>
                <p>Hosting responsibility</p>
                <p>Airbnb-friendly apartments</p>
                <p>join a free Hosting class</p>
                <p>Find a co-host</p>
            </div>
            <div className={styles.subtext}> 
                <h4>Airbnb</h4>
                <p>2025 Summer Release </p>
                <p>Newsroom</p>
                <p>Careers</p>
                <p>Investors</p>
                <p>Gift cards</p>
                <p>Airbnb.org emergency stays</p>
            </div> 
            </div>
            </div> 
    </> 
);
}