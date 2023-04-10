import React, { Component } from 'react'

export class MainTrip extends Component {
    render() {
    return (
        <div>
            <section class="pictures">
            <div class="picture-wrap">
                <div class="picture-explain">
                    <h1>나의 조행기</h1>
                    <p>자세한 설명</p>
                </div>
                <div class="picture-buttons" id="slider2-buttons">
                    <a class="on" href="">사진1</a>
                    <a href="">사진2</a>
                    <a href="">사진3</a>
                </div>
            </div>

            <div id="slider2" class="slider2">
                <div class="slider2-item"></div>
                <div class="slider2-item"></div>
                <div class="slider2-item"></div>
            </div>

        </section>
        </div>
    )
    }
}
export default MainTrip