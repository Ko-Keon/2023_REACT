import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'

function Header() {
    useEffect(()=>{
        function Scroll() {
            const nav = document.querySelector("#nav")
            const intro = document.querySelector("#intro")

            if(window.scrollY>=200) {
                nav.classList.add("scrollon")
                intro.classList.add("scrollon")
            }
            else {
                nav.classList.remove("scrollon")
                intro.classList.remove("scrollon")
            }
        }
        window.addEventListener("scroll",Scroll)
        return ()=> {
            window.removeEventListener("scroll",Scroll)
        }
    },[])
    return (
        <div>
            <header className="head">
        <nav className="nav" id="nav">
            <div className="logo">Busan Bada Lure</div>
            <ul className="nav-menu">
                <li><a href="#main">메인</a></li>
                <li><a href="#weather">날씨&물때</a></li>
                <li><a href="#point">포인트 정보</a></li>
            </ul>
        </nav>
    </header>
        </div>
    )
}

export default Header