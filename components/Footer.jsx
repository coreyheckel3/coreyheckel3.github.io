import React from 'react';
import styles from './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <p className='contactInfo'>
          Contact Me:
        </p>
        <p className='contactItem'>
          Email: <a href="mailto:coreyheckel3@gmail.com">coreyheckel3@gmail.com</a>
        </p>
        <p className='contactItem'>
          Phone: (914) 336-7015
        </p>
        <p className='contactItem'>
          Port Chester, NY
        </p>
      </div>
    </footer>
  );
}

export default Footer;
