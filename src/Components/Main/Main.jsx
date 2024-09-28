import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { assets } from '../../assets/assets'
import { addtext} from '../../features/Gemini/Gemini'
import "./Main.css"
import Geminihook from '../../app/Customhook/Geminihook'
import CircularIndeterminate from '../Loader/CircularIndeterminate'
function Main() {
  let { texxt, fetchData } = Geminihook();
  const inputtext=useSelector(state=>state.input)
  const[isfalse,setisfalse]=useState(false);
  const [p,setp]=useState()
  const[maintext,setmaintext]=useState(true)
  const [input,setInput]=useState('')
  const [output,setoutput]=useState('')
    const dispatch=useDispatch()
     async function handerlerform(e){
        e.preventDefault()
        if(input===''){
          return
        }
        setmaintext(false)
        setoutput('')
        setisfalse(true)
      await  fetchData(input)
      setisfalse(false)
    }
     useEffect(()=>{
      if(input===''){
        return;
      }
 
      dispatch(addtext({text:input,textmsg:texxt}) )

      setoutput(texxt)
      setp(texxt)
      setInput('')
     },[texxt])
     useEffect(()=>{
      setoutput(inputtext)
     },[inputtext])

  return (
    <>
    <div className='Main'>
     <div className="navbar">
     <span><strong>WOOOOGY</strong></span>
     <img src={assets.navimg_icon} alt="" />
     </div>
     <div className="contents">
     {maintext? <div className='contents-1'><h1>HeLLo dEv,</h1>
      <h3>WOOGY here.....</h3></div>:''}
     <CircularIndeterminate isfalse={isfalse}  />

     <p className='output'  dangerouslySetInnerHTML={{ __html: output }} ></p>
     </div>
     <div className="inputs">
     <form action="" onSubmit={handerlerform}>
      <input type="text" placeholder='ASK-I...' value={input}  onChange={(e)=>(setInput(e.target.value))} />
      <button className='btn' onClick={()=>setisfalse(true)}><img src={assets.find_icon} alt="" style={{}} /></button>
      </form>
      
      <p className='msgc'><b>WOOGY-CHATVOT</b> may display inaccurate info, including about people, so double-check its responses.Your privacy and WOOGY-CHATBOT Apps powered by <b>GEMINI</b></p>
     </div>
    </div>
    </>
  )
}

export default Main

