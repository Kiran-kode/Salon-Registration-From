import React from 'react'

const ActionsButton = ({btn1, btn2}) => {
  return (
    <>
     <div className="flex flex-wrap gap-1">
        <button className="bg-blue-400 text-white px-3 py-1.5 font-semibold rounded text-xs hover:bg-blue-600 transition-colors">
          {btn1}
        </button>
        <button className="bg-red-400 text-white px-3 rounded py-1.5 font-semibold text-xs hover:bg-red-600 transition-colors">
          {btn2}
        </button>
      </div>
    </>
  )
}

  


export default ActionsButton