import React, { useState } from 'react';
import "./css/pointSlide.css";

const images = [
    'https://ifh.cc/g/29nFz2.jpg',
    'https://ifh.cc/g/CQ6NSX.jpg',
    'https://ifh.cc/g/NkoM4a.jpg'
];

function PointSlide() {
    const [index, setIndex] = useState(0);

    function btnPrev() {
    // 이전 이미지로 이동합니다.
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
}

    function btnNext() {
    // 다음 이미지로 이동합니다.
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
}

    return (
        <div id='point-slide'>
        <img id='point-slide-img' src={images[index]} alt={`Image ${index + 1}`} />
        <div id='slide-btn'>
            <button id='prev-btn' onClick={btnPrev}>{'<'}</button>
            <button id='next-btn' onClick={btnNext}>{'>'}</button>
        </div>
    </div>
);
}

export default PointSlide;