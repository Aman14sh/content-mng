import React from 'react'
export const Navbar = () => {
  return (
    <div className='bg-sky-300'>
        <div className='container flex gap-11 h-10 text-center mx-auto justify-between bg-gradient-to-r from-cyan-200 to-blue-400 border-6
        '>
            <div className='text-2xl border rounded-md bg-white px-3 font-medium'>
             BlogsCreator
            </div>
            <div className='text-2xl border rounded-md bg-white px-3 font-medium'>
              About
            </div>
        </div>
        </div> 
  )
}
