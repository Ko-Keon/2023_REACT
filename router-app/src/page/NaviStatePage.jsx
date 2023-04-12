import React from 'react'

// navigate를 통해 전달한 값을 받아와서 사용
// useLocation을 통해 값 전달
import{useLocation} from 'react-router-dom'


export default function NaviStatePage() {
    const location = useLocation();
    console.log(location)
  return (
    <div>
        <h3>받아온 값 : {location.state}</h3>
    </div>
  )
}
