import React from 'react'
import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredproperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Maillist from '../../components/maillist/Maillist'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertylist/PropertyList'
import './Home.css'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
      <Featured/>
      <h1 className="homeTitle">browse by properties</h1>
      <PropertyList/>
      <h1 className="homeTitle">browse by properties</h1>
      <FeaturedProperties/>
      <Maillist/>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
