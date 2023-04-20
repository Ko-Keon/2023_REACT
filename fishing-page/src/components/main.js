import React, { Component } from 'react'
import MainVideo from './mainVideo'
import MainIntro from './mainIntro'
import MainTrip from './mainTrip'
import './css/main.css'



export class Main extends Component {
  render() {
    return (
      <div>
        <div id='main-wrap'>
          <h1 id='main-title'>Homepage Name</h1>
          <h4 id='main-description'>homepage description</h4>
        <MainVideo />
        </div>
        <MainIntro />
        <MainTrip/>
      </div>
    )
  }
}

export default Main










