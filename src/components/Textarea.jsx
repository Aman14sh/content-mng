import React,{useState} from 'react'
import fileupload from '../images/logo.png'
import { Basic } from './Templates/Basic';
import { Advance } from './Templates/Advance';
export const Textarea = () => {
  const [text,setText]=useState("");
  const [img,setImg]=useState([]);
  const [doc,setDoc]=useState('');
  const [doc2,setDoc2]=useState('');
  const [uploading,setUploading]=useState(true)
  const [basic,setBasic]=useState(false);
  const [advance,setAdvance]=useState(true);
    function handleChange(e){
      e.preventDefault()
        const textv=e.target.value;
       setText(textv);
    }
    function handleUpload(e){
      const imgs=e.target.files;
      const selectedImgs=Array.from(imgs);
      const imgArray=selectedImgs.map((file) =>{
        return window.URL.createObjectURL(file)
      })
      setImg([...img,imgArray]);
    }
    function addText(e){
      e.preventDefault();
      if(text.length > 1 && uploading){
      setDoc([...doc,text]);
      e.target[1].value='';
      setText('');
      }
    if(text.length > 1 && !uploading){
      setDoc2([...doc2,text]);
      e.target[1].value='';
      setText('');
      }
    }
    function positionChanget(){
      setUploading(true);
    }
    function positionChangef(){
      setUploading(false);
    }
    function basicClick(){

    }
    function AdvanceClick(){

    }
  return (
    <div className='flex gap-[250px]'>
    <div className='sidebar w-32 items-end'>
      <h2 className='text-center font-bold'>Templates</h2>
    <ul className='flex-row my-3'>
     <button className='w-full border-2  rounded-md my-1  px-3 py-2' onClick={basicClick}><li>Basic</li></button>
     <button className='w-full border-2  rounded-md my-1 px-3 py-2 ' onClick={AdvanceClick}><li>Advance</li></button>
     <button className='w-full border-2  rounded-md my-1 px-3 py-2'><li>TwoSpace</li></button>
     </ul>
    </div>
    <div className='w-[50%] textarea text-center'>
      <form onSubmit={addText}className='textfield'>
      <label htmlFor='file' >
      <img src={fileupload} alt="" />
      <input type="file" placeholder='choose an image' id='file' className='hidden' onChange={handleUpload}></input>
      </label>
      <div>
      <h2 className='text-left font-bold text-2xl'>Enter Your text</h2>
      <textarea name="" id="" cols="30" rows="10" className='border-2 rounded-md drop-shadow-md' onChange={handleChange}>
        
      </textarea>
      <button className='border-2 rounded-md bg-sky-600 px-3 drop-shadow-md' name='text' >Add</button>
      </div>
      </form>
      <h2 className='text-center font-bold'>Document</h2>
      <div className='flex justify-center'>
      <div className='w-[90%] border-2 h-fit rounded-md drop-shadow-md'>
      {basic ? (<Basic img={img} text={text} doc={doc} doc2={doc2} uploading={uploading}/>):(<></>)}
      {advance ? (<Advance img={img} text={text} doc={doc} doc2={doc2} uploading={uploading}/>):(<></>)}
      </div>
      </div>
    
    <button className="border rounded-md bg-blue-400 px-4 mx-3 my-3 font-medium" onClick={positionChanget}>W mid</button>

    <button className="border rounded-md bg-blue-400 px-4 mx-3 my-3 font-medium" onClick={positionChangef}>W down</button>
    </div>
    </div>
  )
}
