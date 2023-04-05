// 16.8 버전 이후로 함수형에서 state 사용 가능
import { useState } from "react"

// css파일 들고오기
import './arrowState.css'


// 함수형 컴포넌트의 특징
// 1) this 사용 x
// 2) 안에 값을 넣어줄 때 변수로 할당, const let 사용

const ArrowState = (props) => {
    // useState는 항상 함수(컴포넌트) 안에 작성
    const [message, setMessage] = useState(
        {
            time:"10:53", 
            text : "메세지입니다"
        })
    // useState는 여러 번 사용할 수 있다.
    const [number,setNumber] = useState(0);

    const [array,setArray] = useState([1,2,3,4]);

    // map을 이용하여 id값과 name을 화면에 출력
    const [students, setStudents] = useState(
        [
            {id : 1, name : "홍길동", checked:true},
            {id : 2, name : "성춘향",checked:false},
            {id : 3, name : "흥부", checked:false}
        ]
    )
    
    // 학생 이름을 받아올 공간
    const [inputName, setInputName] = useState("");

    // 화면의 업데이트에 상관없이 사용하는 변수
    let id = students.length+1;


    
    // 메소드 작성
    const inputChange = (e)=>{setInputName(e.target.value)}

    const addStudent = ()=>{
        const newStudents = students.concat(
            {
                id : id++, name : inputName
            }
        )
        setStudents(newStudents)
        setInputName("");
    }

    const deleteStudent = (id) => {
        const newStudents = students.filter(
            (s) => s.id !== id
        )
        setStudents(newStudents)
    }


    return(
        <div>
            <p> {number},{message.text} </p>
            <button
                // useState로 작성한 함수를 통해서 값을 넣을 때 
                // 그 값의 자료형이 같지 않아도 넣어준다
                // 작성할 때 그 값의 자료형을 확인하고 동일한 형태로 할당
                // 객체의 일부분만 수정해서 넣을 때 사용하는 연산자 : ...
                // ...(스프레드 연산자 사용) : 객체나 배열 안에 값(요소)을 꺼내 사용
                // 객체에서 동일한 속성 이름을 사용하면 마지막에 적은 값 사용
                onClick={()=>{setMessage({...message, text : "수정된 내용"})}}
            >
                글자 값 수정
            </button>

            {
                array.map((num,i)=><li key={i}>{num}</li>)
            }

            <h3>학생 추가</h3>
            <input type="text"
                onChange={inputChange}
                value={inputName}
            />
            <button
                onClick={addStudent}
            >추가</button>

            <ul>
            {
                students.map((student)=><li 
                key={student.id}
                className={student.checked ? "on" : ""}
                >
                    <input type="checkbox" 
                        checked={(student.checked)}
                        readOnly
                        onClick={()=>{
                            // 체크박스를 클릭하면, 클릭한 객체의 checked 값이 바뀜
                            // map을 이용하여 작성
                            // map() : 배열 안에 요소의 값을 return을 통해 새로운 배열 만듦
                            // 클릭한 객체를 찾았다면 -> 객체의 checked 값을 수정해서 return
                            const newStudents =  students.map((s)=>{
                                // s 통해서 각 객체값 확인
                                // 1) 클릭한 체크박스의 id값과 모든 s의 id와 비교
                                // 2) id값이 같지 않다면 원래 객체
                                // 3) id값이 같다면 checked 값을 ! 이용하여 수정한 객체
                                if(student.id !== s.id) {
                                    return s;
                                }
                                else {
                                    // 원래 객체에서 checked 값만 수정하기 위해서
                                    // s 안에 있는 속성을 ...(스프레드)를 이용하여 추가
                                    // 수정 할 속성인 checked를 작성해서 수정
                                    return{...s, checked: !s.checked}
                                }
                            })
                            setStudents(newStudents);
                        }}
                    />
                    {student.id}.{student.name}
                    <button
                        onClick={()=>{deleteStudent(student.id)}}
                    >X
                    </button>
                </li>)
            }
            </ul>

            
        </div>
    )
}

export default ArrowState