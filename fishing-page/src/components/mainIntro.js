import React, { useEffect } from 'react'
import "./css/mainIntro.css"

function MainIntro() {
    useEffect(()=>{
        function Scroll() {
            
        const intro = document.querySelector("#intro")

            if(window.scrollY>=200) {
            intro.classList.add("scrollon")
            }
            else {
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
            <section className="intro-scroll" id="intro">
            <div className="fishing-intro">
                <h1>부산 바다 루어</h1>
                <p>부산 바다 루어는 날씨와 물때 그리고 다양한 낚시 포인트 정보를 제공합니다.</p>
            </div>
            <div className="fishing-intro-image">
                <div className="image"></div>
            </div>
        </section>
        </div>
    )
    }


export default MainIntro