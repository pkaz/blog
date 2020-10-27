import React from 'react';

import Header from '../components/header'
import Footer from '../components/footer'

import '../styles.scss'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header label="PkazBlog" />
      <div className="page-content">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
