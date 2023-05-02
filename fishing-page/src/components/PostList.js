import React, { useState } from 'react'
import './css/post.css'
import PostModalBasic from './postModalBasic';

export default function PostList(props) {
  const {items} = props

  // 모달 노출 여부, 선택 게시글 정보를 담는 state
  const [modalOpen,setModalOpen] = useState(false)
  const [selectedPost, setSelectedPost] = useState();
  const [modalContent,setModalContent]=useState();

  // 모달창 띄우기
  const showModal = (content) => {
    setSelectedPost(content)
    setModalOpen(true);
  }
  return (
    <div>
      {items.map((item) => (
        <div className='post-list' key={item.id} onClick={() => showModal(item.modalContent)}>
          <div className='title'>{item.title}</div>
          <div>{item.date}</div>
        </div>
      ))}
      {
        modalOpen && 
        <PostModalBasic setModalOpen={setModalOpen} content={selectedPost}/>
      }
    </div>
  );
}
