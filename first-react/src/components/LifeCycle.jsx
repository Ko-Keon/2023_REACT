import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0,
            date : new Date()
        }
        // 속성 또는 필드라고도 한다
        // 컴포넌트에서 전역으로 사용하고싶을 떄
        this.timerID = "";
    }
    componentDidMount(){
        console.log("마운트가 되었습니다")
        // 처음 한번 실행하는 내용 작성
        // 또는 외부(공공데이터)에서 값을 한 번만 가져올 때
        setInterval(()=>{this.tick()},1000)
    }

    // 라이프 사이클 메소드 : 업데이트가 되었을 때 : 화면이 바뀌었을 때
    // 현재 컴포넌트가 업데이트 될 때 마다 실행
    // props의 값이 바뀔 때, setState를 통해서 값이 바뀔 떄
    componentDidUpdate() {
        console.log("업데이트가 되었습니다")
    }

    componentWillUnmount() {
        console.log("컴포넌트가 언마운트 되었습니다")
    }

    printClock = (time)=> {
        // 가능하다면 this.setState 사용 X
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        return `${hours}:${minutes}:${seconds}`
    }

    tick = () => {
        this.setState({date : new Date()})
    }

    render() {
    return (
        <div>
            <h3>라이프 사이클</h3>
            <h3>{this.state.count}</h3>
            <button
                onClick={()=>{this.setState({count:this.state.count+1})}}
            >
                +1
            </button>
            <hr />
            <h3>시계 : {this.printClock(this.state.date)}</h3>
        </div>
    )
    }
}
