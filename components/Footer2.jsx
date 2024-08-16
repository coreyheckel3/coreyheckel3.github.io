import React from 'react';

const Footer2 = () => {
  return (
    <footer
      style={{
        position: 'absolute, bottom',
        bottom: 0,
        width: '100%',
        backgroundColor: '#1f2b37',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <p>Contact Me:</p>
        <p>Email: <a href="mailto:coreyheckel3@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>coreyheckel3@gmail.com</a></p>
        <p>Phone: (914) 336-7015</p>
        <p>Port Chester, NY</p>
      </div>
    </footer>
  );
};

export default Footer2;
