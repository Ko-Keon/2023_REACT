import React, { Component } from 'react'
import MainVideo from './mainVideo'
import MainIntro from './mainIntro'
import MainTrip from './mainTrip'
import './css/main.css'



export class Main extends Component {
  render() {
    return (
      <div>
        <div className='main-wrap'>
          <div className='main-container'>
          <h1 className='main-title'>Homepage Name</h1>
          <h4 className='main-description'>homepage description</h4>
          </div>
        <MainVideo />
        </div>
        <MainIntro />
        <MainTrip/>
      </div>
    )
  }
}

export default Main










