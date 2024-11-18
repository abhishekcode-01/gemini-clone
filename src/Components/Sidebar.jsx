import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../assets/assets/assets'

const Sidebar = () => {
   const [extended, setextended] = useState(false);

   return (
      <div className='sidebar'>
         <div className='top'>
            <img onClick={()=>setextended(previous=>!previous)}  src={assets.menu_icon} className='menu'></img>
            <div className='new-chat'>
               <img src={assets.plus_icon}></img>
               {extended ? <p>New chat</p> : null}
            </div>
            {extended
               ?
               <div className='recent'>
                  <p className='recent-title'>Recent</p>
                  <div className='recent-entry'>
                     <img src={assets.message_icon}></img>
                     <p>what is react...</p>
                  </div>
               </div>
               : null}
         </div>
         <div className='bottom'>
            <div className='bottom-items recent-entry'>
               <img src={assets.question_icon}></img>
               {extended?<p>help</p>:null}
            </div>
            <div className='bottom-items recent-entry'>
               <img src={assets.history_icon}></img>
               {extended?<p>activity</p>:null}
            </div>
            <div className='bottom-items recent-entry'>
               <img src={assets.setting_icon}></img>
               {extended?<p>settings</p>:null}
            </div>

         </div>

      </div>
   )
}

export default Sidebar