import React from "react"
import { useDispatch } from "react-redux"
import { toggleMenu } from "./utils/store/appSlice";


const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
    return (
        <div className="grid grid-flow-col p-5 m-5 shadow-lg"> 
            <div className="flex col-span-1">
                <img onClick={() => toggleMenuHandler()} className="cursor-pointer h-8" alt="menu" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"/>
                <img className="cursor-pointer h-8 mx-2" alt="youtube-logo" src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"/>
            </div>
            <div className="col-span-10 px-10">
                <input className="border border-gray-400 w-11/12 p-2 rounded-l-full" type="text" placeholder="Search"/>
                <button className="cursor-pointer border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200">🔍</button>
            </div>
            <div className="col-span-1">
                <img className="h-8" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUcZP8UWywZOYwpOUMcf4S6-HmAxHMIx4OA&s"/>
            </div>
        </div>
    )
}

export default Head;