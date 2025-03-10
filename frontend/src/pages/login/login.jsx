
import { useState } from "react";
import {Link} from "react-router-dom";
import useLogin from "../../hooks/useLogin.js";

const Login = () => {
  const [inputs, setInputs] = useState({
    userName : "",
    password : "",
  })

  const {login,loading} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

      
        <div className = "w-full p-6 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">

            <h1 className='text-3xl font-semibold text-center text-black'>
                Login
            <span className='text-gray-400'> Chat App</span>
            </h1>

            <form onSubmit={(handleSubmit)} >
              <div>
                <label htmlFor="username" className='label p-2 text-base label-text'>
                  Username
                </label>
                <input  value ={inputs.userName} onChange={(e) => { setInputs({...inputs, userName : e.target.value})  }} id="username" type="text" placeholder=' Enter Username' className='w-full input input-bordered h-10' />
              </div>

          <div>
            <label htmlFor="password" className='label p-2 text-base label-text'>
              Password
            </label>
            <input value={inputs.password} onChange={(e) => { setInputs({...inputs, password : e.target.value}) }} id="password" type="password" placeholder=' Enter Password' className='w-full input input-bordered h-10' />

          </div>
          <div>
           <Link  to = {"/signup"} className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block' > {"Don't"} have an account?  </Link>
          </div>
          <div>
          <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
            </form>

        </div>
      
    </div>
  )
}


export default Login;

// Starter Code

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>


//       <div className="w-full p-6 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">

//         <h1 className='text-3xl font-semibold text-center text-black'>
//           Login
//           <span className='text-gray-400'> Chat App</span>
//         </h1>

//         <form >
//           <div>
//             <label htmlFor="username" className='label p-2 text-base label-text'>
//               Username
//             </label>
//             <input id="username" type="text" placeholder=' Your Username' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label htmlFor="password" className='label p-2 text-base label-text'>
//               Password
//             </label>
//             <input id="password" type="password" placeholder=' Your Password' className='w-full input input-bordered h-10' />

//           </div>
//           <div>
//             <a href="#" className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block' > {"Don't"} have an account? </a>
//           </div>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">Login</button>
//           </div>
//         </form>

//       </div>

//     </div>
//   )
// }

