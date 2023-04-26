import './css/weather.css'
import React,{useEffect,useState} from 'react'
import './windy.js'
import {useLocation} from 'react-router-dom'

// 아래 함수는 '/' 일 때 hidden이 true 값이 되어 화면에 안보이게 하고
// false 일 떄 화면이 보이게 하는 함수
// css에 hidden과 show로 설정해 놓음
export default function Weather() {
  const location = useLocation();

  const [hidden,setHidden] = useState(true)
  useEffect(()=>{
    if(location.pathname == '/weather') {
      setHidden(false)
    }
    else {
      setHidden(true)
    }
  })
  
  return (
    <div className={ hidden ? 'hidden' : 'show'}>
      {/* index.html 안에 id=windy 값을 찾아 아래 div 빈 공간 안에 대입 */}
      <div className='title'>
      <h1>Weather</h1>
      </div>
      <div id="windy"></div>
    </div>
  )
}
