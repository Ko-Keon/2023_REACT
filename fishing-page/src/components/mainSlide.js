import React, { useState, useEffect } from 'react'
import "./css/mainSlide.css"

const images = [
    'https://ifh.cc/g/FMzJKg.jpg',
    'https://ifh.cc/g/Aop6WZ.jpg',
    'https://ifh.cc/g/74QcCb.jpg'
    ];

    function MainSlide() {
        const [index, setIndex] = useState(0);

        useEffect(() => {
        const intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(intervalId);
        }, []);

    return (
        <div>
            <img id='main-slide-img' src={images[index]} alt={`Image ${index + 1}`} />
        </div>
    );
}

export default MainSlide











