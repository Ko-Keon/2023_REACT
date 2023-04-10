import React, { useEffect } from 'react'


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
                <li><a href="#intro">소개</a></li>
                <li><a href="#Line">조행기</a></li>
            </ul>
        </nav>
    </header>
        </div>
    )
}

export default Header