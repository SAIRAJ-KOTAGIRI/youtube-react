import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "./utils/store/appSlice";
import { YOUTUBE_SEARCH_API } from "./utils/constants";
import { cacheResults } from "./utils/store/searchSlice";


const Head = () => {


    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)

    const searchCache = useSelector((store) => store.search)
    console.log(searchCache)
    const dispatch = useDispatch();

    useEffect(() => {

        
        // make an API call after every key press
        // But if the difference between 2 API calls is < 200 ms
        // then don't fo the apu call

        // API Call
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            } else {
                getSearchSuggestions();
            }
            
        }, 200)

        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])

    /**
     * key - i
     *  - render the component
     *  - useEffect()
     *  - start timer => make the API call after 200 ms
     * 
     * key - ip
     *  - Component Destroy method will be called (useEffect Return Method)
     *  - render the component
     *  - useEffect()
     *  - start timer => make the API call after 200 ms
     */

    const getSearchSuggestions = async() => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const jsondata = await data.json()
        setSuggestions(jsondata.length ? jsondata[1] : [])
        dispatch(cacheResults({[searchQuery] : jsondata[1]}))
    }

    
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
                <div>
                    <input onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="px-5 border border-gray-400 w-11/12 p-2 rounded-l-full" type="text" placeholder="Search"/>
                    <button className="cursor-pointer border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200">🔍</button>
                </div>
                {
                    showSuggestions && (suggestions?.length > 0) && <div className="border border-gray-100 fixed bg-white px-2 py-2 w-[54rem] shadow-lg rounded-lg">
                                            <ul>
                                                {
                                                    suggestions?.length ? 
                                                    suggestions?.map((eachSuggestion, index) => (<li key={eachSuggestion+index} className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 {eachSuggestion}</li>))
                                                    : <></>
                                                }
                                                
                                            </ul>
                                        </div>
                }
                
            </div>
            <div className="col-span-1">
                <img className="h-8" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUcZP8UWywZOYwpOUMcf4S6-HmAxHMIx4OA&s"/>
            </div>
        </div>
    )
}

export default Head;