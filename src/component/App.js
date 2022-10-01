import React from 'react'
import MiddlePanel from './MiddlePanel/MiddlePanel';
import RightPanel from './RightPanel/RightPanel';
import LeftPanel from './LeftPanel/LeftPanel';

//Tüm componentler bu App.js üzerine gelip burada sayfaya gösterilecek.

const App = () => {
  return (
    <div className='container-fluid d-flex'>
      <LeftPanel />
      <MiddlePanel />
      <RightPanel />
    </div>
  )
}

export default App
