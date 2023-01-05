import {useState} from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { IconButton } from '@mui/material';

import './Chat.css'

const Chat = () => {
    const [input,setInput] = useState('')
 
 const sendMessage =()=>{

 }

  return (
    <div className='chat'>

       <div className="chat__header">

       <div className='contact'>
       <img src="https://icons.veryicon.com/png/o/internet--web/iview-3-x-icons/md-contact.png" alt="" width='100%' />
       </div>

       <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ....</p>
       </div>
                 
       <div className="chat__headerRight">
      <IconButton>
           <SearchOutlinedIcon/>
      </IconButton>      
      <IconButton>
        <AttachFileOutlinedIcon/>
      </IconButton>
      <IconButton>
          <MoreVertOutlinedIcon/>
      </IconButton>
    </div>
       </div>

   

      

    <div className="chat__body">

        <div className='user_message'>
            <p className={true?"chat__message":"chat__reciever"}>
            <span className='chat__name'>Syed Abdullah Ali</span> <br/>
                Hey Guys
             <span className="chat__timestamp">3:52</span>   
            </p>
        </div>
        

    </div>
        
        <div className="chat__footer">
            <InsertEmoticonOutlinedIcon/>
            <form>
                <input
                 value={input}
                 onChange={(e)=>setInput(e.target.value)}
                 type="text" />
                <button onClick={sendMessage} type='submit'>Send a message</button>
            </form>
            <MicNoneOutlinedIcon/>
        </div>

    </div>
  )
}

export default Chat
