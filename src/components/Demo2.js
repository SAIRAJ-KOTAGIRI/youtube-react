import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 10;

  const ref = useRef(0)

  const i = useRef(null)
  useEffect(() => {
    if(i.current) return;
    i.current = setInterval(() => console.log("React" + Math.random()), 1000);
    return () => clearInterval(i.current);
  }, [])

/**
 * not like ref = 0
 * ref = {current: 0}
 */

  return (
    <div className='m-4 p-4 bg-slate-50 border border-black w-96 h-96'>
      <div>
        <button className='bg-green-100 rounded-sm p-2 m-2' onClick={() => { x = x + 1 }}>Increase X</button>
        <span className='font-bold'>Let: {x}</span>
      </div>
      <div className='mt-5'>
        <button className='bg-green-100 rounded-sm p-2 m-2' onClick={() => { setY(y+1) }}>Increase Y</button>
        <span className='font-bold'>State Variable: {y}</span>
      </div>
      <div className='mt-5'>
        <button className='bg-green-100 rounded-sm p-2 m-2' onClick={() => { ref.current = ref.current + 1  }}>Increase Reference</button>
        <span className='font-bold'>Ref: {ref.current}</span>
      </div>
      <button className='bg-red-900 p-4 m-4 text-white font-bold rounded-lg' onClick={() => clearInterval(i.current)}>
        Stop Printing
      </button>
    </div>
  )
}

export default Demo2