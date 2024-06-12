import React, { useMemo, useState } from 'react'
import { findNthPrime } from './utils/helper';

const Demo = () => {

    const [text, setText] = useState(0);
    const [isDarkTheme, setDarkTheme] = useState(false)
    const prime = useMemo(() => findNthPrime(text), [text])
    // const prime = () => findNthPrime(text)
    return (
        <div className={'m-4 p-2 w-96 h-96 border border-black' + (isDarkTheme ? " bg-gray-900 text-white" : '')}>
            <div>
                <button className='rounded-lg border-black bg-green-200 p-2 m-2 text-black' onClick={() => setDarkTheme(!isDarkTheme)}>Change Theme</button>
            </div>
            <div>
                <input className='px-2 border border-black w-72 text-black' type='number' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div>
                <h1 className='font-bold'>
                    Nth Prime: {prime}
                </h1>
            </div>
        </div>
    )
}

export default Demo;