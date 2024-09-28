import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { useSelector,useDispatch } from 'react-redux'
import { removetext,setInput } from '../../features/Gemini/Gemini'
import Geminihook from '../../app/Customhook/Geminihook'

function Sidebar() {
  const { texxt,fetchData } = Geminihook();
  const [iscollapse,setiscollapse]=useState(true)
  //recive state values from Main components
  const alltexts=useSelector(state=>state.texts)
 const dispatch= useDispatch() //to send a state

  const collapsefunc=()=>{
    setiscollapse(prev=>!prev);
  }
 async function handledonclick(id,text){
    const foundText = alltexts.find(text => text.id === id);
    console.log(foundText.textmsg);
   await fetchData(text)
    
    dispatch(setInput(foundText.textmsg))
  }


  return (
    <div className='Sidebar'>
      <div className="Top">
     <img className='menu' src={assets.menu_icon} alt="" onClick={collapsefunc} />
     <div className="new-chat">
        <img className='plus' src={assets.plus_icon} alt="" />
       {iscollapse?<p onClick={()=>Main()}>New Chat</p>:null}
     </div>
     <div className="recent">
     <p className="recent-title">Recent</p>
    { alltexts.map(text=>(
       <div className="recent-entry" key={text.id}  id={text.id} onClick={()=>handledonclick(text.id,text.text)}>

       <img src={assets.message_icon} alt="" />
        {iscollapse?   <p id={text.id}>
        {text.text.length<15?text.text:text.text.substring(0,15)+"..."}
       </p>:null}
       {iscollapse?<button onClick={()=>dispatch(removetext(text.id))}><img src={assets.garbage_icon} className='garbage'></img></button>:null}
     
       
    </div>
    ))}
    
     </div>
      </div>
     <div className="Bottom">
       <div className="Bottom-item recent-entry">
        <img src={assets.question_icon} alt="" />
        {iscollapse?<p>Help</p>:null}
       </div>

       <div className="Bottom-item recent-entry">
        <img src={assets.setting_icon} alt="" />
        {iscollapse?<p>Setting</p>:null}
       </div>

       <div className="Bottom-item recent-entry">
        <img src={assets.history_icon} alt="" />
        {iscollapse?<p>History</p>:null}
       </div>
     </div>

    </div>
  )
}

export default Sidebar
