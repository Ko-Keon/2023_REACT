import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'

function Header() {
    useEffect(()=>{
        function Scroll() {
            const nav = document.querySelector("#nav")

            if(window.scrollY>=200) {
                nav.classList.add("scrollon")
            }
            else {
                nav.classList.remove("scrollon")
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
                <Link to = "/">메인</Link> &nbsp;
                <Link to = "/weather">날씨 / 물때</Link> &nbsp;
                <Link to = "/point">포인트 정보</Link>
            </ul>
        </nav>
    </header>
        </div>
    )
}

export default Header