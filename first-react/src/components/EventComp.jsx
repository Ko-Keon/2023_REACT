import React, { Component } from "react";

export class EventComp extends Component {
    // state 작성
    constructor(props) {
        super(props);
        this.state = {
            name : "홍길동",
            address : "부산",
            toggle : true,
            color : "",
            input : "",
            inputNickname : "",
            inputBook : "",
        }
        // 메소드에 .bind로 묶어서 this 전달
                            // 아래 this.printEvent는 작성한 메소드
                            // 그 메소드에 .bind(this)로 연결
        this.printEvent = this.printEvent.bind(this);
        this.printAddress = this.printAddress.bind(this);
        this.setToggle = this.setToggle.bind(this);
        this.changeColor = this.changeColor.bind(this);
        // this.printEvent는 이름
        // let num = 0; num= = num+1 -> num의 결과 : 1
    }

    // 이벤트 안에서 작성한 함수 그대로 들고와서 사용할 수 있다.
    // render에서 사용한 값을 쓸 수 없다.
    // this.state.name을 통해서 접근
    // 메소드에서 바로 bind를 통해 this를 묶어줄 수 없다.
    // 메소드만 만들어서 바로 사용하면 this를 찾지 못해서 오류
    // >> constructor 들어가서 bind로 묶어서 사용
    printEvent(){
        console.log("이벤트 출력");
        console.log(this.state.name);
    }

    printAddress() {
        console.log(this.state.address);
        console.log("이벤트 완료");
    }

    // this.setState 사용해서 값 수정
    setToggle(){
        this.setState({toggle:!this.state.toggle})
    }

    changeColor(e) {
        if(e.type==="mouseenter"){
            this.setState({color : "red"})
        }
        else if(e.type==="mouseleave"){
            this.setState({color : ""})
        }
        
    }

    // 화살표 함수를 가지는 메소드
    // 메소드 이름에 화살표 함수 작성
    arrowPrint=()=>{
        console.log("이벤트 실행");
        console.log(this.state.name);
    }

    changeName=()=> {
        this.setState({name : "성춘향"})
    }

    // onChange 공용 메소드
    onInputChange = (e) => {
        // inputNickname을 그대로 사용 -> inputNickname에만 값이 들어간다
        // e.target.name : name 속성값을 가져와서 사용
        // 변수 값을 사용하려면 [] 에 담아 사용
        this.setState({[e.target.name] : e.target.value})
    }

    render() {
        // render안에서 this = EventComp;
        // this.state는 construct의 속성값
        const {name} = this.state;

        return(
            // 이벤트를 위한 버튼 작성
            <div>
                <h3>버튼을 클릭했을 때 console.log("이벤트 실행");</h3>
                <button
                    // 실행 할 함수 내용이 짧을 때 (화살표 함수를 이용해 바로 작성)
                    // 이벤트 객체 사용 가능
                    // this를 사용했을 때 자기 자신 클래스 컴포넌트 호출
                    // -> 클래스 컴포넌트에서 사용하는 props와 state 호출
                    onClick={(e)=>{console.log(e,this)}}
                >
                    화살표함수를 사용해서 이벤트 실행
                </button>
                <button
                    // 익명함수를 사용해서 이벤트 객체 사용 가능
                    // this를 사용하면 연결된 객체가 없으므로 undefined 출력
                    // html 파일에서 js 익명함수를 들고오면 window객체로 들고오지만
                    // react에서 익명함수를 들고오면 this의 값이 undefined이다.
                    // react에서 익명함수를 사용하려면 함수의 this값을 연결
                    // this값을 연결하기위해 .bind()
                    // return 안에서 .bind(this) 불러오는 this = EventComp
                    onClick={function(e){console.log(e,this)}.bind(this)}
                >
                    익명함수를 사용해서 이벤트 실행
                </button>

                <h3>이벤트의 함수(메소드)를 따로 작성하는 방법</h3>
                <p>
                    버튼을 눌렀을 때 console.log(이벤트 출력)
                    this.state.name "홍길동"을 출력
                </p>

                <button
                    onClick={function(){
                        console.log("이벤트 출력");
                        // name 값을 render에서 this.state로 가져와서 this 연결 안해도 사용 가능
                        console.log(name);
                    }.bind(this)
                }
                >
                    메소드로 작성한 이벤트
                </button>

                <button
                    // 작성한 메소드를 들고올 때 this. 이용한다
                    onClick={
                        this.printEvent
                }
                >
                    메소드로 작성한 이벤트
                </button>

                {/* 이벤트 : 메소드 만들기 */}
                <p>
                    버튼을 누르면 state의 address 부산을 출력하고
                    console.log를 통해 이벤트 완료 출력
                </p>
                <button
                    onClick={
                        this.printAddress
                    }
                >
                    이벤트
                </button>

                {/* this.setState를 사용하는 메소드 */}
                <button
                    onClick={function(){
                        this.setState({toggle:!this.state.toggle})
                    }.bind(this)
                }
                >
                    {this.state.toggle ? "on" : "off"}
                </button>

                <button
                    onClick={
                        this.setToggle
                }
                >
                    {this.state.toggle ? "on" : "off"}
                </button>

                {/* state의 color : "" 추가 후
                    changeColor 메소드를 만들고
                    메소드에서 this.state.color값을 "red"로 수정 */}
                <p
                    onMouseEnter={ this.changeColor }
                    onMouseLeave={ this.changeColor }
                    style = {{color : this.state.color}}
                    
                >
                    p태그에 마우스를 올리면 글자를 빨간색으로 바꾸기
                </p>

                {/* 화살표 함수로 메소드 만들어서 사용하기 */}
                <button
                    onClick={()=>{
                        console.log("이벤트 실행");
                        console.log(this.state.name);
                    }
                }
                >
                    화살표 함수를 사용한 이벤트
                </button>

                <button
                    onClick={
                        this.arrowPrint
                }
                >
                    화살표 함수를 사용한 이벤트
                </button>

                <button
                    onClick={this.changeName}
                >
                    {name}
                </button>

                {/* form-input 태그의 값 사용하기 */}
                <h3>input 태그에서 값을 가져올 state를 onChange로 수정</h3>
                <p>{this.state.input}</p>
                <input type="text"
                    onChange={(e)=>{
                        console.log(e.target.value)
                        this.setState({input : e.target.value})
                        // setState는 비동기, 바로 state에 접근해서 값을 출력하면 이전 값이 나온다.
                        console.log("input",this.state.input)
                    }
                }
                />

                {/* change 공용 함수 만들기 */}
                <h3>input 2개에서 값 받아오기</h3>
                <p>inputNickname의 값 : {this.state.inputNickname}</p>
                <input type="text"
                    name = 'inputNickname'
                    onChange={this.onInputChange}
                />

                <p>inputBook의 값 : {this.state.inputBook}</p>
                <input type="text"
                    name = 'inputBook'
                    onChange={this.onInputChange}
                />
            </div>
        )
    }
}


export default EventComp