import React from 'react';

function Contact() {
  return (
    <>
      <div className='flex h-screen items-center justify-center bg-gray-100'>
        <div className='bg-white rounded-lg shadow-lg p-8 max-w-md w-full'>
          <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

          <form className='space-y-4'>
            <div>
              <label className='block text-gray-700'>Name</label>
              <input
                type="text"
                placeholder='Enter your name'
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500'
              />
            </div>

            <div>
              <label className='block text-gray-700'>Email</label>
              <input
                type="email"
                placeholder='Email address'
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500'
              />
            </div>

            <div>
              <label className='block text-gray-700'>Message</label>
              <textarea
                placeholder='Enter your message'
                rows='4'
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500'
              ></textarea>
            </div>

            <button
              type='submit'
              className='bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition duration-300'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
