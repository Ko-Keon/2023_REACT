import React from 'react'
import PostList from './PostList'
import axios from 'axios'
import { useState,useEffect } from 'react'
import './css/post.css'



export default function Post() {
    const list = [
        {id:1, title : "게시글1", date : "2023-05-01"},
        {id:2, title : "게시글2", date : "2023-05-01"},
        {id:3, title : "게시글3", date : "2023-05-01"},
        {id:4, title : "게시글4", date : "2023-05-01"},
        {id:5, title : "게시글5", date : "2023-05-01"},
    ]
    const [posts,setPosts] = useState([]);

    const getPosts = () => {
        axios
        .get('http://localhost:3000/post')
        .then((response)=>{
            setPosts(response.data)
        })
    }
    useEffect(getPosts,[]);

    

  return (
    <div className='post'>
        <h1>Announcement</h1>
        <div className='post-list'>
        <PostList items={list}/>
        </div>
    </div>
  )
}
