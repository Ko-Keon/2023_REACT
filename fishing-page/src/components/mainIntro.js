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
            <div className='intro-wrap'>
            <div className="intro-scroll" id="intro">
            <div className="fishing-intro">
                <h1 className='intro-title'>
                    <span>B</span><span>usan</span>
                    <span>B</span><span>ada</span>
                    <span>L</span><span>ure</span>
                </h1>
                <p className='intro-des'>
                    <p>부산 바다 루어는 날씨와 물때 그리고 다양한 낚시 포인트 정보를 제공합니다.</p>
                    <p>여러분의 이야기도 들려주세요!</p>
                </p>
            </div>
        </div>
            </div>
        </div>
    )
    }


export default MainIntro