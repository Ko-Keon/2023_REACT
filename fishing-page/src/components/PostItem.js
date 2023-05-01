import React,{useState} from 'react'
import './css/post.css'


export default function PostItem(props) {
  const {id,title,date} = props.item;
  return (
    <div className='post-list'>
        <span>{id}</span>
        <span className='title'>{title}</span>
        <span>{date}</span>
    </div>
  )
}
