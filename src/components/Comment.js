import React from 'react'

const Comment = (props) => {
    const {name, text, replies} = props.data
    console.log(props)
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2 border border-blue-100">
        <img className="w-10 h-10" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUcZP8UWywZOYwpOUMcf4S6-HmAxHMIx4OA&s"/>
        <div className="px-3">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment