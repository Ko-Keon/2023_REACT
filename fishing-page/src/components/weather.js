import './css/weather.css'
import React from 'react'


export default function weather() {
  return (
    <div id='weather'>
      {/* index.html 안에 id=windy 값을 찾아 아래 div 빈 공간 안에 대입 */}
      <div id="windy"></div>
    </div>
  )
}