import React from 'react'
import './Sidebar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
  return (
    <div className='sidebar'>
       <div className="sidebar__header">
        <IconButton>    
                <AccountCircleIcon className='account_icon'/>
        </IconButton>
        <div className="sidebar__headerRight">
        <IconButton>    
       <DonutLargeIcon/>
       </IconButton>

       <IconButton>    
       <ChatIcon/>
       </IconButton>

       <IconButton>    
       <MoreVertIcon/>
       </IconButton>
        </div>
       </div> 
       <div className="sidebar_search">
          <div className="sidebar__searchContainer">
             <SearchIcon/>
             <input type="text" placeholder='Search or start new chat' />
          </div>
       </div>
         
         <div className="sidebar__chat">

               <SidebarChat/>
               <SidebarChat/>
               <SidebarChat/>
               <SidebarChat/>
            
         </div>       
      </div>
  )
}

export default Sidebar
