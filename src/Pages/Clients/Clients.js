import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import HomeClients from '../Home/HomeClients'
import { Helmet } from 'react-helmet'

function Clients() {
  return (
    <>
 <Helmet>
        <title>Trusted by Satisfied Clients | WebTech Solutions
        </title>
        <meta name="description" content="Discover the success stories of our satisfied clients. At WebTech Solutions, we have a proven track record of delivering exceptional IT solutions.
" />

        {/* Open Graph (OG) tags  */}
        <meta property="og:title" content="Trusted by Satisfied Clients | WebTech Solutions
" />
        <meta property="og:description" content="Discover the success stories of our satisfied clients. At WebTech Solutions, we have a proven track record of delivering exceptional IT solutions.
" />
        <meta property="og:url" content="https://webtechsolutionsservice.com/clients" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

        {/* Twitter Card tags  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trusted by Satisfied Clients | WebTech Solutions" />
        <meta name="twitter:description" content="Discover the success stories of our satisfied clients. At WebTech Solutions, we have a proven track record of delivering exceptional IT solutions." />
        <meta name="twitter:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

        {/* Canonical tag  */}
        <link rel="canonical" href="https://webtechsolutionsservice.com/clients" />
      </Helmet>
      <Header />
      <HomeClients />
      <Footer />
    </>
  )
}

export default Clients