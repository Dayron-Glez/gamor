/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
export const LoginView = ({setUsuario}) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const password = e.target.elements.password.value;
    console.log(name);
    console.log(password);
    setUsuario(name)
    navigate('/')
  }
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">Name</label>
        <div className="mt-2">
          <input id="name" name="name" type="text"  required className="block border-2 w-full rounded-md py-1.5 text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:border-[#f87316]  sm:text-sm sm:leading-6" placeholder=' Enter your name'/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Password</label>
          
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password"  required className="block border-2 w-full rounded-md py-1.5 text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:border-[#f87316]  sm:text-sm sm:leading-6" placeholder='Enter your password'/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>
  </div>
</div>

    </>
  )
}
