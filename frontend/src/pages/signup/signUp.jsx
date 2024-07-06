import React from 'react'
import GenderCheckBox from './genderCheckBox';

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>


      <div className="w-full p-6 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">

        <h1 className='text-3xl font-semibold text-center text-black'>
          SignUp
          <span className='text-gray-400'> Chat App</span>
        </h1>

        <form >
          <div>
            <label htmlFor="username" className='label p-2 text-base label-text'>
              Fullname
            </label>
            <input id="username" type="text" placeholder=' Enter Fullname' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label htmlFor="username" className='label p-2 text-base label-text'>
              Username
            </label>
            <input id="username" type="text" placeholder=' Enter Username' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label htmlFor="password" className='label p-2 text-base label-text'>
              Password
            </label>
            <input id="password" type="password" placeholder=' Enter Password' className='w-full input input-bordered h-10' />

          </div>
          <div>
            <label htmlFor="password" className='label p-2 text-base label-text'>
              Confirm Password
            </label>
            <input id="password" type="password" placeholder=' Enter Password' className='w-full input input-bordered h-10' />

          </div>
          <GenderCheckBox/>
          <div>
            <a href="#" className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block' > {"Don't"} have an account? </a>
          </div>
          <div>
            <button className="btn btn-block btn-sm mt-2">SignUp</button>
          </div>
        </form>

      </div>

    </div>
  )
}

export default SignUp;



// Starter Code

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>


//       <div className="w-full p-6 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">

//         <h1 className='text-3xl font-semibold text-center text-black'>
//           SignUp
//           <span className='text-gray-400'> Chat App</span>
//         </h1>

//         <form >
//           <div>
//             <label htmlFor="username" className='label p-2 text-base label-text'>
//               Fullname
//             </label>
//             <input id="username" type="text" placeholder=' Enter Fullname' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label htmlFor="username" className='label p-2 text-base label-text'>
//               Username
//             </label>
//             <input id="username" type="text" placeholder=' Enter Username' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label htmlFor="password" className='label p-2 text-base label-text'>
//               Password
//             </label>
//             <input id="password" type="password" placeholder=' Enter Password' className='w-full input input-bordered h-10' />

//           </div>
//           <div>
//             <label htmlFor="password" className='label p-2 text-base label-text'>
//               Confirm Password
//             </label>
//             <input id="password" type="password" placeholder=' Enter Password' className='w-full input input-bordered h-10' />

//           </div>
//           <GenderCheckBox />
//           <div>
//             <a href="#" className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block' > {"Don't"} have an account? </a>
//           </div>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">SignUp</button>
//           </div>
//         </form>

//       </div>

//     </div>
//   )
// }

// export default SignUp;
