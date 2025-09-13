import React from 'react'

const Label = ({Label, color}) => {
  return (
   <>
   <div className="flex flex-wrap gap-1">
        <button className={`bg-[${color}] text-white px-3 py-1 rounded-xl text-xs hover:bg-blue-300 transition-colors font-semibold `}>
          {Label}
        </button>
      </div>
   </>
  )
}

export default Label