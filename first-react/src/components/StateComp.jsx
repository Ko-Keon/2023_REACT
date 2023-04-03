import { Component } from 'react'

class StateComp extends Component {
    //state 컴포넌트 안에서 사용되는 변수
    constructor(props) {
        // constructor를 사용하면 props를 따로 연결
        super(props);
        // this.state안에 객체 형태로 값을 작성할 수 있다
        this.state = {
            number : 0,
        }
    }

    // 화면에 출력되는 html
    // 가상돔을 화면에 출력하기 위해 render()를 호출
    // 호출시 render 안에서 사용한 변수는 초기화된다
    // 초기화 되지 않으려면 전역변수 또는 this.state 사용
    render() {
        // this.state의 값을 비구조화 할당을 통해 사용
        const {number,name} = this.state;
        let count = 0;
        // return의 html안에서 직접 불러와서 사용
        return(
            <div>
                <h2>{name}</h2>
                <h3>state의 값{number},변수값 {count}</h3>
                <h3>{this.state.number}</h3>
                <button
                    onClick={ ()=>{ 
                        this.setState( {number : number+1} )
                    } }
                >
                    +10
                </button>
                <button
                    onClick={()=>{
                        count++;
                        console.log(count)
                    }}
                >
                    count+1
                </button>
                {/* 버튼을 눌렀을 때 number 값이 -1씩 감소 */}
                <button
                    onClick={ ()=>{ 
                        // 하나의 이벤트에서 setState를 여러 번 부를 경우
                        // 원하지 않는 값으로 나올 수 있다.
                        this.setState( {number : number-1} )
                        this.setState( {number : number-1} )
                        // 이전에 있던 state값을 preState로 들고와서 수정
                        // 값이 바뀐 후에 들고오기에 동기적으로 값 수정
                        // ()=>() 형태로 사용하는 이유 : return으로 객체 전달
                        // (prevState)=>({state속성 : 값})
                        this.setState((prevState)=>({number:prevState.number-1}))
                    } }
                    >
                    -1
                </button>

                {/* 버튼을 눌렀을 때 number 값이 0이 됨 */}
                <button
                    onClick={()=>{
                        this.setState({number : 0})
                    }}
                >
                    set 0
                </button>

            </div>
        )
    }
}
export default StateComp;