import './SidebarChat.css'

const SidebarChat = ({addNewChat}) => {


  const createChat =()=>{

    const roomName= prompt('Please enter name for chat')
  }


  return (!addNewChat?
    <div className='sidebarChat'>
        
      <div className='contact'>
       <img src="https://icons.veryicon.com/png/o/internet--web/iview-3-x-icons/md-contact.png" alt="" width='100%' />
       </div>

      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>Last Message.....</p>
      </div>
    </div>:
    <div className='sidebarChat' onClick={createChat} >
      <h2>Add new Chat</h2>
    </div>
  )
}

export default SidebarChat
