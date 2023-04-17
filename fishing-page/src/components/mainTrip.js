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

export default function MainTrip() {
    const [template, setTemplate] = useState(0);

    const PictureBtn = (index) => {
        setTemplate(index);
    };

    return (
    <div>
        <h1>나의 조행기</h1>
        
    <div>
        <img src={images[template]} alt={`Image ${template + 1}`} />
        <p>{descriptions[template]}</p>
    </div>
    <div>
            {images.map((image, index) => (
                <button key={index} onClick={() => PictureBtn(index)}>
            {`${index + 1}`}
                </button>
        ))}
        </div>
    </div>
);
}