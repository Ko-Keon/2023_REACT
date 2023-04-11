import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import Weather from './components/weather';

function App() {
  
  return (
    <div>
      <Header/>
      <Main/>
      <Weather/>


      <Footer/>
    </div>
  )
}

export default App;
