import React from 'react'

export const Basic = (props) => {
  return (
    <div> 
        {props.uploading ?
        (<p><img src={props.img[0]} width='150px' height='150px' className='images relative left-[250px] py-3'></img>{props.doc}
        <div className='flex justify-between gap-5'>
        <img src={props.img[1]} width='100px' height='150px' className='images'></img> <img src={props.img[2]} width='100px' height='150px'className='images'></img>
        <img src={props.img[3]} width='100px 100px' className='images'></img>
        </div>{props.doc2}</p>) : (<p><img src={props.img[0]} width='150px' height='150px' className='images relative left-[250px] py-3'></img>{props.doc}
        <div className='flex justify-between gap-5'>
        <img src={props.img[1]} width='100px' height='150px' className='images'></img> <img src={props.img[2]} width='100px' height='150px' className='images'></img>
        <img src={props.img[3]} width='100px' className='images'></img></div>
        {props.doc2}</p>)}
    </div>
  )
}
