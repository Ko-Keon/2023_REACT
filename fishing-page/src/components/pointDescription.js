import React from 'react'
import './css/pointDescription.css'

export default function PointDescription() {
    return (
    <div>
        <table id='table'>
            <tr>
                <td scope='col'>-포인트명 : </td>
                <td scope='col'>-지역 : </td>
            </tr>
            <tr>
                <td>-수심 : </td>
                <td>-저질 : </td>
            </tr>
            <tr>
                <td>-적정 물 떄 : </td>
                <td>-대상어 : </td>
            </tr>
            <tr>
                <td id='td1'>-지역소개 : </td>
            </tr>
            <tr>
                <td id='td1'>-주의사항 : </td>
            </tr>
        </table>
    </div>
)
}
