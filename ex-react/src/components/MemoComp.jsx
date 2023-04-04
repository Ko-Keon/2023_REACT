import React, { Component } from 'react'

export default class MemoComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memoList : [
                {id:1, memo:"기록", time:new Date()},
                {id:2, memo:"연습", time:new Date()}
            ],
            inputText : ""
        }
        this.id = 3;
    }

    addMemo = ()=> {
        const newMemo = this.state.memoList.concat(
            {
                id : this.id,
                memo : this.state.inputText,
                time : new Date()
            }
        )
        this.setState({memoList:newMemo});
        this.id++
        this.setState({inputText : ""})
    }

    deleteMemo = (memo)=> {
        const newMemo = this.state.memoList.filter((m)=>m.id !== memo.id)
        this.setState({memoList : newMemo})
    }

    // 시간값을 편하게 출력하기 위한 메소드
    // 출력 : return을 통해서 화면에 출력 가능
    // 시간을 출력하기 위해 time 값 가져옴
    printClock = (time)=> {
        // 가능하다면 this.setState 사용 X
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        return `${hours}:${minutes}:${seconds}`
    }


    render() {
    return (
    <div>
        <hr />
        <h1>메모리스트 출력</h1>
        <input type="text" 
            onChange={(e)=>{this.setState({inputText : e.target.value})}}
        />
        <button
            onClick={this.addMemo}
        >
            메모 추가
        </button>

        <table>
            <tbody>
                <tr>
                    <td>아이디</td>
                    <td>메모</td>
                </tr>
                {
                    this.state.memoList.map((Memo)=>
                    <tr key={Memo.id}>
                        <td>{Memo.id}.</td>
                        <td
                            onClick={()=>{this.deleteMemo(Memo)}}
                            >
                            {Memo.memo} / 시간 : {this.printClock(Memo.time)}
                        </td>
                    </tr>
                    )
                }

                
            </tbody>
        </table>

                <ul>
                    <li>아이디 메모</li>
                    {
                        this.state.memoList.map((Memo)=>
                        <li key={Memo.id}>
                            <span>{Memo.id}. </span>
                            <span
                                onClick={()=>{this.deleteMemo(Memo)}}
                            >
                                {Memo.memo} / 시간 : {this.printClock(Memo.time)}
                            </span>

                        </li>
                        )
                    }
                </ul>

    </div>
    )
}
}




