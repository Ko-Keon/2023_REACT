import React,{useState} from 'react'
import PostItem from './PostItem';
import './css/post.css'

export default function PostList(props) {
  const {items} = props
  return (
    <div>
        {
            items.map((item)=>
                <PostItem item = {item}/>
            )
        }
    </div>
  );
}
