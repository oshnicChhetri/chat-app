import React from 'react'
import SideBar from '../../components/sidebar/sideBar.jsx';
import MessageContainer from '../../components/messages/messageContainer.jsx';

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-x-hidden bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <SideBar/>
      <MessageContainer/>

    </div>
  )
}

export default Home
