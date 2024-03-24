/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export const NavBarComponent = ({ usuario, setUsuario}) => {
  return (
    <>
    <header className=" grid w-[100vw]">
        <nav className=" grid grid-cols-3 bg-[#0f172a] align-baseline mx-auto sm:w-[900px] md:w-[660px] lg:w-[900px] xl:w-[1200px] justify-around text-white text-[10px] md:text-lg  h-[20%] py-16">
          
            <Link to='/' className="hover:text-[#f87316] hover:cursor-pointer">Home</Link>
          
          
            <p className="justify-self-center ">GAMOR</p>
         
          <div className=" flex flex-row justify-self-end mr-3">
            {usuario ? 
            <div>
              <button onClick={() => setUsuario(null)} className="hover:text-[#f87316] hover:cursor-pointer mr-5">SignOut</button>
            </div>
            
            :
            <Link to='/login' className="hover:text-[#f87316] hover:cursor-pointer mr-5">SignIn</Link>
            
            }
            <p className=" hover:text-[#f87316] hover:cursor-pointer">Create Account</p>
          </div>
          
        </nav>
    </header>
    </>
  )
}
