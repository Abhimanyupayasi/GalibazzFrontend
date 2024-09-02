import React from 'react'

function DivInformation({item}) {
  return (
    <div className='w-full mb-5 p-2 text-gray-100 rounded-md border-[1px] border-gray-50'>
        <h2>
            {item}
        </h2>
    </div>
  )
}

export default DivInformation