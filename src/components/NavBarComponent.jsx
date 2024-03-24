/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import sunIcon from '../assets/sunIcon.png'
import moonIcon from '../assets/moonIcon.png'
export const NavBarComponent = ({ usuario, setUsuario}) => {
  const [theme, setTheme] = useState(() => {
    if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if(theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    }
    else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
  }
  return (
    <>
    <header className=" grid w-[100vw] bg-slate-100 dark:bg-[#0f172a]">
        <nav className=" grid grid-cols-5 align-baseline mx-auto sm:w-[900px] md:w-[660px] lg:w-[900px] xl:w-[1200px] justify-around dark:text-white text-[10px] md:text-lg  h-[20%] py-16">
            <button className="" onClick={handleChangeTheme}>
              {theme === 'dark'?
              <img src={sunIcon} alt="sunIcon" className=" size-6"/>  
              :
              <img src={moonIcon} alt="moonIcon" className=" size-6"/>
            }
            </button>
            <Link to='/' className="hover:text-[#f87316] hover:cursor-pointer">Home</Link>
          
          
            <p className="justify-self-center ">GAMOR</p>
         
          <div className=" flex flex-row justify-self-end mr-3">
            {usuario ? 
            
              <button onClick={() => setUsuario(null)} className="hover:text-[#f87316] hover:cursor-pointer justify-self-end">SignOut</button>
            
            
            :
            <Link to='/login' className="hover:text-[#f87316] hover:cursor-pointer mr-5 justify-self-end">SignIn</Link>
            
            }
          </div>
            <p className=" hover:text-[#f87316] hover:cursor-pointer justify-self-end">Create Account</p>
          
        </nav>
    </header>
    </>
  )
}
