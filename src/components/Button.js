import React from 'react';

const Button = ({name}) => {
    return (
        <div className=''>
            <button className='px-3 m-5 bg-gray-200 py-2 rounded-lg'>{name}</button>
        </div>
    )
}

export default Button;