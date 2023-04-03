import React, { Component } from "react";
// 컴포넌트에서 원하는 컴포넌트를 들고와서 사용 가능
import EventComp from "./EventComp";

export class RefDomEvent extends Component {
    constructor (props) {
        super(props);

        // 1. input 태그가 들어갈 공간 (변수)
        this.textInput = null;
        // 2. ref 콜백 함수를 통해 DOM에 접근

        // 1) ref에 들어갈 함수 작성
        this.setTextInputRef = (element) => {
            // 2) element를 통해서 ref로 DOM을 가져온다.
            // 3) 저장해서 쓰기 위해 만든 공간에 할당
            this.textInput = element;
        }
        
        // 16.3버전 이후 사용 가능
        this.myRef = React.createRef();

        // ref 연습
        // ref 콜백 함수
        this.inputBackground = null;
        this.setInputBackground = (element)=> {
            this.inputBackground = element;
        }
        // createRef 작성
        this.backgroundRef = React.createRef();

        // 직접 작성한 컴포넌트도 ref를 통해 들고올 수 있다.
        this.myComp = React.createRef();
    }


    // this.textInput 접근하는 메소드
    textInputEvent = ()=> {
        if(this.textInput) {
            // ref를 통해 DOM을 가져와 그 안에 있는 내용에 JS에서 가져온 것 처럼 접근
            this.textInput.focus();
        }
    }

    // myRef 확인
    myRefEvent = ()=>{
        if(this.myRef.current) {
            this.myRef.current.focus();
        }
    }

    // 실습
    TestRefClass = ()=> {
        this.inputBackground.style.backgroundColor = "red"
    }

    TestRefClass2 = ()=> {
        this.backgroundRef.current.style.backgroundColor = "red"
    }


    render(){ 
    return (
        <div>
            <h1>Ref를 통해 input 가져오기</h1>
            <input type="text"
                // 3. ref 속성을 이용해서 setTextInputRef를 호출
                ref={this.setTextInputRef}
            />
            {/* input 태그가 들고와졌는지 확인 */}
            <button onClick={()=>{console.dir(this.textInput)}}>
                console에 textInput 출력
            </button>
            <button
                onClick={this.textInputEvent}
            >
                버튼을 누르면 input에 포커스
            </button> <br />

            <input type="text" 
                ref = {this.myRef}
            />
            <button
                onClick={()=>{console.log(this.myRef)}}
            >
                myRef 값 확인
            </button>
            <button
                onClick={this.myRefEvent}
            >
                myRef에 포커스 
            </button> 

            <hr />
            <h2>ref 연습</h2>
            <input type="text" 
                ref = {this.setInputBackground}
            />
            <button
                onClick={this.TestRefClass}
            >
                색을 바꿉니다
            </button>
            
            <input type="text" 
                ref={this.backgroundRef}
            />
            <button
                onClick={this.TestRefClass2}
            >
                색을 바꿉니다
            </button>

            <hr />
            <h2>컴포넌트를 불러와서 ref를 통해 가져오기</h2>
            <EventComp ref={this.myComp}/>
            <button
            // 컴포넌트를 ref로 들고오게 되면 그 컴포넌트에 있는 
            // 메소드, state, props에 다 접근 가능
            // state와 props의 경우 값을 가져올 수 있고
            // 메소드의 경우 메소드를 실행 할 수 있다.
                onClick={()=>{console.dir(this.myComp.current)}}
            >
                ref로 들고온 myComp 확인
            </button>
            <hr />
            <h3>
                리액트에서 이벤트를 사용할 떄
                화살표함수 / 익명함수에 넣어서 사용하는 이유
            </h3>
            <p>JS에서 addEventListener를 사용할 떄와 동일하다</p>
            <p>
                addEventListener에서 함수를 넣을 때 함수 이름을 넣어 실행 <br />
                그래서 함수이름() 실행한 결과를 넣어주면, 이벤트가 실행할 때 마다 되는것이 아니라
                화면이 렌더링 할 때 실행
            </p>

        </div>
    )
}
}





export default RefDomEvent;