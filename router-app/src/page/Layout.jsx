import React from 'react'
import HeaderLink from '../components/HeaderLink'
import {Link,Outlet} from 'react-router-dom'


// 웹페이지의 레이아웃을 중첩 라우터로 작성
export default function Layout() {
  return (
    <div>
        <HeaderLink/>
        <Outlet/>

        <footer>
            푸터입니다
        </footer>
    </div>
  )
}
