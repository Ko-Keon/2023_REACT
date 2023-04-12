import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../css/headerlink.css'

// 링크들을 모아서 헤더에 고정
export default function HeaderLink() {
    const fruit = "banana";

  return (
    <div>
        {/** a태그 대신 컴포넌트의 주소로 이동 */}
        <NavLink 
          className={({isActive})=>isActive? "link-style" : undefined} 
          to="/about"
        >
          About
          </NavLink>
        {/** to의 속성값으로 자바스크립의 문자열 가능 */}
        <NavLink
          to={`/story/${fruit}`}
          className={({isActive})=>isActive? "link-style" : undefined}
        >
          Story
          </NavLink>
        <Link to="/articles">Articles</Link>
        <Link to ="/story2">Story2</Link>
        <Link to = "/navigate"></Link>
    </div>
  )
}
