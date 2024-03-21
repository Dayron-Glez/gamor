import { Link } from "react-router-dom"

export const NavBarComponent = () => {
  return (
    <>
        <nav className=" flex flex-row bg-[#0f172a] text-white  w-full h-20 py-16">
          <div className=" flex w-full justify-around text-xl">
            <Link to='/' className="hover:text-[#f87316] hover:cursor-pointer">Home</Link>
            <p className="">GAMOR</p>
            <Link to='/login' className="hover:text-[#f87316] hover:cursor-pointer">SignIn</Link>
            <p className=" hover:text-[#f87316] hover:cursor-pointer">Create Account</p>
          </div>
        </nav>
    </>
  )
}
