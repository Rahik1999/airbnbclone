
import React from 'react';
import styles from './Header.module.css'
import Image from 'next/image';
export default function Header() {
 
  return(
    <>
  <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="#" ><Image className={styles.logo}  src="airbnb.png" alt="" /></a>
        <p className={styles.text1}>airbnb</p>
        <a href=""><Image  className={styles.home}  src="home.avif" alt="" /></a>
        <p className={styles.text2}>Homes</p>
        <a href="#"><Image  className={styles.parashut} src="parashut.avif" alt="" /></a>
         <span className={styles.text3}>Experiences</span>
        <a href="#"><Image   className={styles.bell} src="bell.avif" alt="" />
          <span className={styles.text4}>Services</span>
        </a>
        
       
  
      <div className={styles.lastelement}>
            <div className={styles.globe}>
                 <a href=""><Image src="/globe.svg" className={styles.myglobe} alt='globe'/></a>
            </div>
            <div className='icon'>
                 <a href=""><Image src="icon.png" className={styles.icon} alt="" /></a>
            </div>
           
      </div>
      </nav>
        <div className={styles.searchBar}>
         <input className={styles.input} placeholder="Where are you going?" />
         <input className={styles.input} type='date' placeholder="Add dates" />
          <input className={styles.input} type='date' placeholder="Add dates" />
         <input className={styles.input} placeholder="Guests" />
        <button className={styles.mybtn}><img className={styles.img} src="search.png" alt="" /></button>
      </div>
  </header>

  </>
);
};
