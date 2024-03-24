
import './App.css'
import { Route, Routes, Navigate } from "react-router-dom";
import { MainView } from './views/MainView';
import { LoginView } from './views/LoginView';
import { NavBarComponent } from './components/NavBarComponent';

import { useState } from 'react';
function App() {
  const [usuario, setUsuario] = useState(null)

  return (
    <>

      <NavBarComponent usuario={usuario} setUsuario={setUsuario} />

      <div className=' w-full h-full'>

        <Routes>
          <Route path='/' element={usuario ? <MainView/> : <Navigate to="/login" />} />
          <Route path='/login' element={<LoginView setUsuario={setUsuario} />} />
        </Routes>


      </div>

    </>
  )
}

export default App
