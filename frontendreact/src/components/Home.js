import React from 'react'
import NavigationBar from './NavigationBar';
import './Home.css';

function Home() {
  return (
    <div className='Home'>
      <NavigationBar />
      <br/>
      <div className='Home1'>
      <br />
      <h1>Welcome to <spna className='x'>Fitness Point</spna></h1>
      <br/>
      <h2>Get in Shape and be Healthy </h2>
      </div>
    </div>
  )
}

export default Home
