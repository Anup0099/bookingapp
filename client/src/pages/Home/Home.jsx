import React from 'react'
import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
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
      </div>
    </div>
  )
}

export default Home
