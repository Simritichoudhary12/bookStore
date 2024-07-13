import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {} from 'react-router-dom'
import {Link} from "react-router-dom"
function Course() {
  return (
    <>
    <div className='max-w-screen-2xl conatiner mx-auto  md:px-20 px-4'>
        <div className='m-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl  font-semibold'>We are delighted to have you 
                <span className='text-pink-500'> Here! :)</span> 
                </h1>

                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis aliquid tenetur numquam sapiente necessitatibus culpa perferendis ipsum harum! Rerum fugit, corporis cupiditate quidem dolorem asperiores aspernatur molestias nulla repellat alias a ab veritatis esse architecto ut eligendi voluptas officia eum, ipsum sint! Explicabo at quod iure tempore laborum odit?

                </p>
              <Link to = '/'>
              <button className='cursor-pointer mt-6 bg-pink-500 px-4 py-2 rounded-md text-white hover:bg-pink-700 duration-300'>Back</button>
              </Link>

        </div>
<div className='mt-12  grid  grid-cols-1 md:grid-cols-4'>
    {
        list.map((item)=>(
            <Cards  item = {item} key={item.id}/>
        ))
    }
</div>
    </div>
    </>
  )
}

export default Course