import React from 'react'
import Login from './Login'

import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data); // Log form data to console
      };
    
  return (
   <>
   <div className=' flex h-screen items-center  justify-center'>
   <div className=" w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link  to ='/'className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
   <h3 className="font-bold text-lg">Signup</h3>



   <div className='mt-4 space-y-2'>
        <span className=''> Name  </span>
        <br />
           <input type='text'
           placeholder='Enter your Name' className='w-80 px-3  py-1 border rounded-md'
           {...register('name', { required: true })}
/>
<br />
              {errors.name && <span className='text-sm text-red-500'> This field is required</span>}
       
    </div> 







    <div className='mt-4 space-y-2'>
        <span className=''> Email  </span>
        <br />
           <input type='email'
           placeholder='Enter your email' className='w-80 px-3  py-1 border rounded-md'
           {...register('email', { required: true })}
           />
            <br />
            {errors.email && <span className='text-sm text-red-500'> This field is required</span>}
       
    </div> 


  
    <div className='mt-4 space-y-2'>
        <span className=''> Password  </span>
        <br />
           <input type='password'
           placeholder='Set  Password ' className='w-80 px-3  py-1 border rounded-md'
           {...register('password', { required: true })}
           />
       

       <br />
       {errors.password && <span className='text-sm text-red-500'> This field is required</span>}
    </div>

<br />


<div className='flex justify-around mt-4'>
    <button className='bg-pink-500 text-white px-3 py-1  hover:bg-pink-700 rounded-md cursor-pointer'>Signup</button>
 <p>Have Account?  {" "}

    <button   className='underline text-blue-500 cursor-pointer'

 onClick={()=>document.getElementById('my_modal_3').showModal()}>
  

 Login  </button>   {" "}
 <Login/>


 </p>
</div>
</form>
    
     {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
  </div>


  
</div>
   </div>
   </>
  )
}

export default Signup