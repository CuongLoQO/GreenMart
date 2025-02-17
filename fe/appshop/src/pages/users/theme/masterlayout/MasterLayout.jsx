import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const MasterLayout = ({ children, ...props }) => {
  return (
    <>
      <Header />
      <main {...props}>{children || <p>Loading...</p>}</main>
      <Footer />
    </>
  );
};

export default MasterLayout;