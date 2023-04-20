import React, { Component } from 'react'
import './css/footer.css'

export class Footer extends Component {
    render() {

    return (
        <div>
        <footer className="footer">
        <div className="footer-logo">로고</div>
        <div className="info">
            <p>주소</p>
            <p>대표전화</p>
            <p>SNS</p>
            <p>@2022 Busan Bada Lure</p>
            <a class="top" id="top" href="#">맨위로</a>
        </div>
    </footer>
        </div>
    )
    }
}

export default Footer