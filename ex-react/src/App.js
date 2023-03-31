import './App.css';
import PropsComp from './components/PropsComp';
import CountComp from './components/CountComp';
import CountPropsComp from './components/CountPropsComp';
import LoginComp from './components/LoginComp';

function App() {
  return (
    <div className="App">
    {/* props를 사용하는 클래스 컴포넌트 */}
    <PropsComp color="red">props 값을 받아와서 글자색 바꾸기</PropsComp>
    {/* state를 사용하는 클래스 컴포넌트 클릭시 10씩 증가 */}
    <CountComp></CountComp>
    {/* props, state를 사용하는 클래스 컴포넌트
    props의 num값을 가져와서 버튼을 클릭 할 때마다 num씩 증가 */}
    <CountPropsComp num={5}></CountPropsComp>

    {/*
    LoginComp 작성 후
    state : name, login : false
    <input>에서 name 받아오기
    <button>에서 login true 만들기
    <h1> name 출력 -> login 값이 true일 떄 화면에 출력
    */}
    <LoginComp/>

    </div>
  );
}

export default App;
