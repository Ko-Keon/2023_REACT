import React, { useEffect, useRef } from 'react'
import './css/modal.css'

export default function PostModalBasic(props) {
    const {setModalOpen,content} = props

    // 모달창 끄기
    const closeModal = () => {
        setModalOpen(false)
    }

    // 모달창 외부 클릭시 창 닫기
    // modal을 useRef로 처리
    const modalRef = useRef(null);

    useEffect(()=>{
        const handler = (e) => {
            // 이벤트 발생한 곳이 모달창이 아니면 모달창 닫기 처리
            if(modalRef.current && !modalRef.current.contains(e.target)){
                setModalOpen(false)
            }
        };
        
        // 모달창 외부 클릭시 창 닫기
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
        }, [setModalOpen]);
    

    return (
        <div ref={modalRef} className='modal-container'>
            <button className='close' onClick={closeModal}>닫기</button>
            <p className='modal-content'>{content}</p>
        </div>
)
}
