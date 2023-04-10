import React, { Component } from 'react'
import "./css/mainSlide.css"

export class MainSlide extends Component {
    
    render() {
    return (
        <div>
            <section class="banner">
            <div class="slider">
                <div class="slider-item">1</div>
                <div class="slider-item">2</div>
                <div class="slider-item">3</div>
                <div class="slider-button prev" id="prev-button">&lt;</div>
                <div class="slider-button next" id="next-button">&gt;</div>
            </div>
        </section>
        </div>
    )
    }
}

export default MainSlide