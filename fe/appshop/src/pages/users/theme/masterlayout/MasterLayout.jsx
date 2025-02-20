import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MasterLayout = ({ children, ...props }) => {
  return (
    <>
      <Header />
      <main {...props}>{children || <p>Loading...</p>}
      <ToastContainer />
      </main>
      <Footer />
    </>
  );
};

export default MasterLayout;