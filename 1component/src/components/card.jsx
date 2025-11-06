import React from 'react'

function card({name="kumar",role="developer"}) {
  return (
    <div>
      <div className="card bg-gray-800" >
        <h1 className='text-3xl font-bold text-yellow-400 mb-4'>kumar harsh is my {name}</h1>
        <h2 className='text-2xl font-semibold text-green-300 mb-4'>Domain  {role}</h2>
        <p className='text-blue-200 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ea debitis, voluptate quidem nesciunt ut molestiae commodi nostrum illum excepturi.</p>
      </div>
    </div>
  )
}

export default card
