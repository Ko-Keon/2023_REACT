import React, { useState, useEffect } from 'react'
import "./css/mainSlide.css"

const images = [
    'https://ifh.cc/g/29nFz2.jpg',
    'https://ifh.cc/g/CQ6NSX.jpg',
    'https://ifh.cc/g/NkoM4a.jpg',
    'https://ifh.cc/g/X46BHf.jpg'
    ];

    // setInterval을 사용하여 조작없이 일정 시간이 지나면 자동으로 화면 전환하도록 설정
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











