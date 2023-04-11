import React from 'react'
import {Link} from 'react-router-dom'
import FormComp from '../components/FormComp'

export default function Home() {
    const fruit = "apple"
    const fruits = ["apple", "orange", "melon"]
    return (
        <div>
            <h1>Home</h1>
            <p>현재 화면은 홈입니다.</p>
            {/* a태그 대신 컴포넌트의 주소로 이동 */}
            <Link to = "/about">About</Link> <br />
            {/* to의 속성값으로 js 문자열 가능 */}
            <Link to = {`/story/${fruit}`}>Story</Link>
            <hr />

            <FormComp/>


            {/* map을 이용해서 배열 값을 Link의 to 주소값으로 사용 */}
            {
                fruits.map((f,i)=>(
                    <Link to={`/stroy/${f}`} key={i}> | [{f}story] | </Link>
                ))
            }
            <hr />
            {/* fruits의 map을 사용하여 /story2/apple, /story2/orange, /story2/melon */}
            {
                fruits.map((f,i)=>(
                    <Link to={`/stroy2/${f}`} key={i}> | [{f}story2] | </Link>
                ))
            }
            
        </div>
    )
}
