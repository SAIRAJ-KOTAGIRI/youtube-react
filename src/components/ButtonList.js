import React from "react"
import Button from "./Button";


const ButtonList = () => {
    const listRec = ["All", "Gaming", "Songs", "Live", "Cricket", "Soccer", "News", "Cooking", "Valentines"]
    return (
        <div className="flex">
            {
                listRec?.map((eachRecord) => (
                    <Button key={eachRecord} name={eachRecord}/>
                ))
            }
        </div>
    )
}

export default ButtonList;