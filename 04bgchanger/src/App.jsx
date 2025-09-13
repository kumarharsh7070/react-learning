import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200 relative" style={{ backgroundColor: color }}>
      
      {/* This is now fixed to the bottom-center */}
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=>setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:color}}
          >Red</button>
           <button
                     onClick={()=>setColor("green")}

          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"green"}}
          >Green</button>
           <button
                     onClick={()=>setColor("yellow")}

          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor:"yellow"}}
          >Yellow</button> <button
                    onClick={()=>setColor("purple")}

          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"purple"}}
          >purple</button>
           <button
                     onClick={()=>setColor("pink")}

          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor:"pink"}}
          >pink</button>
           <button
                     onClick={()=>setColor("blue")}

          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"black"}}
          >Blue</button>
        </div>
      </div>

    </div>
  );
}

export default App;
