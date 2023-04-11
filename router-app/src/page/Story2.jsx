import React from 'react'
// URL 파라미터 값 가져오는 함수
import { useParams } from 'react-router-dom'

export default function Story2() {

    const params = useParams(); // 객체
    const {name} = useParams();
    return (
        <div>
            <h1>{params.name} Story2</h1>
            <p>{name} 현재 화면은 story2입니다</p>
        </div>
    )
}