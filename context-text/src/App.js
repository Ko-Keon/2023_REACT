import './App.css';
import Toolbar from './components/Toolbar';
import React from 'react';

// App에 쓰기 위해, 작성한 ThemeContext 호출
import ThemeContext from './context/ThemeContext';
import ObjectContext from './context/ObjectContext';
import { DataProvider } from './context/DataContext';
import ContextBox from './components/ContextBox';
import DataBox from './components/DataBox';
import DataPrint from './components/DataPrint';

// ObjectContext.Provider의 value 값을
// 따로 변수에 저장해서 사용
// -> 변수의 값이 많다면 확인하기 힘들다
// -> Context를 만들 때, value 값도 함께 작성해서 만들자
const initValue = {name : "성춘향", login : true}

function App() {
  return (
    <div className="App">
      {/* 작성한 context를 값을 사용할 컴포넌트에 감싸서 사용 */}
      <ThemeContext.Provider value='light'>
        <ObjectContext.Provider value={initValue}>
          <Toolbar/>
        </ObjectContext.Provider>
      </ThemeContext.Provider>

      <DataProvider>
        <Toolbar/>
      </DataProvider>
      {/* ContextBox 가져와서 ThemeContext를 이용하여 blue값 전달 */}
      <ThemeContext.Provider value='blue'>
        <ContextBox/>
      </ThemeContext.Provider>

      {/* DataCOntext를 이용하여 value 값을 전달한
          DataProvider 사용 */}
      <DataProvider>
        <DataBox/>
        {/* <DataPrint/>를 작성하여 화면에 출력 */}
        <DataPrint/>
      </DataProvider>

    </div>
  );
}

export default App;
