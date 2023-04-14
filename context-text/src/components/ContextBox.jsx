import React,{useContext} from 'react'
import ThemeContext from '../context/ThemeContext'


export default function ContextBox() {
  return (
    <div>
        <ContextText></ContextText>
    </div>
  )
}

function ContextText() {
    // useContext() ThemeContext 가져와서 출력
    const text = useContext(ThemeContext)
    return <p>{text}</p>
}