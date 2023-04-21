import React from 'react'
import './css/mainTrip.css'

function MainTrip() {
    return (
        <div>
            <h1>나의 조행기</h1>
        <div className='body'>
            <div className='container'>
                <div className='card'>
                    <div className='imgBox'>
                        <img src='./img/조행기1.png'/>
                    </div>
                    <div className='content'>
                        <h2>card one</h2>
                        <p>조행기에 대한 내용</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='imgBox'>
                        <img src='./img/조행기2.png'/>
                    </div>
                    <div className='content'>
                        <h2>card one</h2>
                        <p>조행기에 대한 내용</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='imgBox'>
                        <img src='./img/조행기3.png'/>
                    </div>
                    <div className='content'>
                        <h2>card one</h2>
                        <p>조행기에 대한 내용</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='imgBox'>
                        <img src='./img/조행기4.png'/>
                    </div>
                    <div className='content'>
                        <h2>card one</h2>
                        <p>조행기에 대한 내용</p>
                    </div>
                </div>
            </div>
            
            
        </div>
        </div>
    );
}

export default MainTrip;