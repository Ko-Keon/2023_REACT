import React from 'react'
import data from '../data/dummy.json'
import { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import DataContext from '../context/DataContext'

// json을 이용한 데이터를 들고와 목록 출력
export default function BoardList() {

    //const [dataList,setDataList] = useState(data)

    // DataContext에서 값을 가져와서 사용하기
    // {state : {boardlist}, action : {setBoardlist}}
    const value = useContext(DataContext);

  return (
    <div>
        <h3>BoardList</h3>
        <ul>
            {
                value.state.boardlist.map((data)=>(
                    <li key={data.id}>
                        <Link to={`/boardlist/${data.id}`}>
                            {data.title}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
