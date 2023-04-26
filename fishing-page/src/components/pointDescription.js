import React, { useState } from 'react'
import './css/pointDescription.css'
import pointInfo from '../api/pointInfo.json'

export default function PointDescription({index}) {
    const [information, setInformation] = useState(pointInfo)

    const updateInfo = (index, key, value) => {
        setInformation(prevInformation => {
            const newInformation = [...prevInformation];
            newInformation[index][key] = value;
            return newInformation
        })
    }

    const point = information[index]

    return (
        <table id='table'>
            <tbody>
                <tr>
                    <td scope='col'>- 포인트명 : {point.title}</td>
                    <td scope='col'>- 지역 : {point.place}</td>
                </tr>
                <tr>
                    <td>- 수심 : {point.depth}</td>
                    <td>- 저질 : {point.substrate}</td>
                </tr>
                <tr>
                    <td>- 적정 물 떄 : {point.optimalWater}</td>
                    <td>- 대상어 : {point.targetFish}</td>
                </tr>
                <tr>
                    <td id='td2'>- 지역소개 : {point.description}</td>
                </tr>
                <tr >
                    <td id='td1'>- 주의사항 : {point.caution}</td>
                </tr>
            </tbody>
        </table>
    )
}