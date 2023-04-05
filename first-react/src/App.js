import './App.css';
import MyComponent from './components/MyComponent';
// 동일한 파일에서 두개이상 내보냈을때, 그 각각의 값을
// 각각 가져와야 쓸수 있다
import LoginComp from './components/LoginComp';
import { LoginText } from './components/LoginComp';
import TextComp from './components/TextComp';
import OtherComp from './components/OtherComp';
import StateComp from './components/StateComp';
import EventComp from './components/EventComp';
import RefDomEvent from './components/RefDomEvent';
import MapComp from './components/MapComp';
import LifeCycle from './components/LifeCycle';
import ArrowComponent from './components/ArrowComponent';
import ArrowTest from './components/ArrowTest';
import ArrowState from './components/ArrowState';

// 리액트에서 오류가 드는 이유
// 1. 존재하지 않는 컴포넌트 출력
// (컴포넌트를 만든 이후에 이름은 바꾸지 말 것)
// 이름을 바꾼 후에는 바꾼 이름으로 모든 컴포넌트 수정

function App() {
  return (
    <div className="App">
      <h1>리액트 프로젝트를 수정해서 사용합니다</h1>
      <MyComponent />
      {/* 만든 컴포넌트에 속성=값을 통해 값을 props전달 */}
      <LoginComp login={true} name="홍길동" />
      {/* 만든 컴포넌트 사이에 글자를 적어서 전달 */}
      {/* props의 children으로 전달 */}
      {/* props 값을 전달하지 않으면 undefined로 들어간다 */}
      <LoginComp>내용전달</LoginComp>
      {/*
      새로운 TextComp를 만들어서 children에 들어간 값을 h1태그에 넣어 출력
      name값을 받아와서 p태그에 name님을 출력한다
       */}
      <TextComp name="홍길동">반갑습니다</TextComp>
      <TextComp name="성춘향">반갑습니다</TextComp>
      <OtherComp name = {123}></OtherComp>
       {/* State를 가진 컴포넌트 */}
      <StateComp/>
      <StateComp/>

      {/* 이벤트 */}
      <EventComp/>

      {/* RefDOm */}
      <RefDomEvent/>

      {/* 컴포넌트의 반복 */}
      <MapComp/>

      {/* 라이프사이클 */}
      <LifeCycle/>

      {/* 함수형 컴포넌트 */}
      <ArrowComponent text = "문자열을 전달"/>
      <ArrowComponent>children으로 전달</ArrowComponent>

      {/* 함수형 컴포넌트 실습 - 아래 컴포넌트를 함수형으로 만들고 출력하기*/}
      <ArrowTest name = "green" check={true}/>
      <ArrowTest>환영합니다</ArrowTest>

      {/* 함수형 컴포넌트 state 사용 */}
      <ArrowState/>



    </div>
  );
}

// import를 이용하여 다른 파일에서 값을 가져올때
// export를 이용해서 내보내는 값
export default App;