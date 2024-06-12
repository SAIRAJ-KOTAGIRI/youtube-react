import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from './utils/store/chatSlice';
import { generateRandomName, makeRandomMessage } from './utils/helper';

const LiveChat = () => {

    const [liveMessage, setLiveMessage]  = useState()

    const dispatch = useDispatch();

    const dispatchLiveMessageHandler = (e) => {
        e.preventDefault()
        dispatch(
            addMessage({
                "name": "sai raj",
                message: liveMessage
            })
        )
        setLiveMessage("")
    }

    const chatMessages = useSelector(store => store.chat.messages)
    console.log(chatMessages , 'chat message')
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("API Polling")
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20)
            }))
        }, 2000)
        return () => clearInterval(interval)
    }, [])

  return (
    <>
        <div className='overflow-y-scroll flex-col-reverse flex rounded-lg w-full h-[600px] ml-2 p-2 border border-black bg-gray-100'>
            <div>
                {
                    
                    chatMessages?.map((eachChatMesage, index) => (
                        <ChatMessage key={index} name={eachChatMesage.name} message={eachChatMesage.message}/>
                    ))
                }
            </div>
            
        </div>
        <form className='w-full p-2 ml-2 border border-black rounded-lg' 
            onSubmit={(e) => 
                dispatchLiveMessageHandler(e)
            }
        >
            <input className='px-2 w-64 border border-black' type='text' value={liveMessage} onChange={(e) => {
                setLiveMessage(e.target.value)
            }}/>
            <button className='px-2 mx-2 bg-green-100 border-green-100'>Submit</button>
        </form>
    </>
  )
}

export default LiveChat