import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import WeatherTime from './components/weatherTime';
import Point from './components/point';

function App() {
  
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/weather' element={<WeatherTime/>}/>
        <Route path='/point' element={<Point/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
