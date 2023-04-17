import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import WeatherTime from './components/weatherTime';
import Point from './components/point';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Weather from './components/weather';
import { useRef } from 'react';



function App() {
  // ref사용, current값을 가지며 dom 요소에 접근
  const WindyApp = useRef(null);

  // 연결된 라우터로 페이지 이동시 항상 페이지가 최상단으로 초기화되게 설정
  const navigateTop = useNavigate();
  
  useEffect(()=>{
    window.scrollTo(0,0);
  },[navigateTop])

  
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/weather' element={<WeatherTime/>}/>
        <Route path='/point' element={<Point/>}/>
      </Routes>
      
      <Weather ref={WindyApp}/>
      
      <Footer/>
    </div>
  )
}

export default App;
