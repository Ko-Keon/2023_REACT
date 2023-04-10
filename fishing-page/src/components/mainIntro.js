import React, { Component } from 'react'
import "./css/mainIntro.css"

export class MainIntro extends Component {
    render() {
    return (
        <div>
            <section class="intro-scroll" id="intro">
            <div class="fishing-intro">
                <h1>부산 바다 루어</h1>
                <p>부산 바다 루어는 날씨와 물때 그리고 다양한 낚시 포인트 정보를 제공합니다.</p>
            </div>
            <div class="fishing-intro-image">
                <div class="image"></div>
            </div>
        </section>
        </div>
    )
    }
}

export default MainIntro