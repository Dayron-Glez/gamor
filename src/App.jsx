
import './App.css'
import { Route, Routes } from "react-router-dom";
import { MainView } from './views/MainView';
import { LoginView } from './views/LoginView';
import { NavBarComponent } from './components/NavBarComponent';

function App() {


  return (
    <>
    <header>
      <NavBarComponent/>
    </header>
      <div className=' w-full h-full'>
        
        <Routes>
          <Route path='/' element={<MainView />} />
          <Route path='login' element={<LoginView />} />
        </Routes>
      </div>

    </>
  )
}

export default App
