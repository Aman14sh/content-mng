import React from 'react'

export const Advance = (props) => {
  return (
    <>
    {props.uploading ?
       (<p className='w-[90%]'><div className='w-[100%] flex gap-2'><img src={props.img[0]} width='200px' height='150px' className='images  py-3'></img>
       <p className='w-[300px]'>
        {props.doc}
        </p>
       </div>{props.doc2}</p>): 
         (<p className='w-[90%]'><div className='w-[100%] flex gap-2'><img src={props.img[0]} width='200px' height='150px' className='images  py-3'></img>
         <p className='w-[300px]'>
          {props.doc}
          </p>
         </div>{props.doc2} </p>)
         }
         </>
  
  )
}
