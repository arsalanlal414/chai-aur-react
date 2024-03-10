import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("bg-red-800")

  return (
    <div className={`w-full h-screen duration-200 ${color}`}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex justify-center flex-wrap bg-white rounded-xl gap-3 p-4 shadow-lg'>
          <button onClick={()=> setColor('bg-red-600')} className='outline-none bg-red-600 p-2 px-4 rounded-xl text-white text-2xl'>Red</button>
          <button onClick={()=> setColor('bg-green-800')} className='outline-none bg-green-800 p-2 px-4 rounded-xl text-white text-2xl'>Green</button>
          <button onClick={()=> setColor('bg-yellow-500')} className='outline-none bg-yellow-500 p-2 px-4 rounded-xl text-white text-2xl'>Yellow</button>
          <button onClick={()=> setColor('bg-blue-800')} className='outline-none bg-blue-800 p-2 px-4 rounded-xl text-white text-2xl'>Blue</button>
          <button onClick={()=> setColor('bg-pink-400')} className='outline-none bg-pink-400 p-2 px-4 rounded-xl text-white text-2xl'>Pink</button>
          <button onClick={()=> setColor('bg-gray-500')} className='outline-none bg-gray-500 p-2 px-4 rounded-xl text-white text-2xl'>Gray</button>
        </div>
      </div>
    </div>
  )
}

export default App
