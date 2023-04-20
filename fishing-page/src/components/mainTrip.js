import React, { useState } from 'react'
import './css/mainTrip.css'

const images = [
    "",
    "",
    "",
];

const descriptions = [
    "설명1",
    "설명2",
    "설명3",
];

function MainTrip() {
    return (
    <div>
        <h1>나의 조행기</h1>
        <div id="picture-container">
        {images.map((image, index) => (
            <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
            <p>{descriptions[index]}</p>
            </div>
        ))}
        </div>
    </div>
    );
}

export default MainTrip;