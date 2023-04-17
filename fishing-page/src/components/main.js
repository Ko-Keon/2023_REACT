import React, { Component } from 'react'
import MainSlide from './mainSlide'
import MainIntro from './mainIntro'
import MainTrip from './mainTrip'



export class Main extends Component {
  render() {
    return (
      <div>
        <MainSlide />
        <MainIntro />
        <MainTrip/>
      </div>
    )
  }
}

export default Main










