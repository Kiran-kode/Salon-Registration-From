import React from 'react'
import { useState } from 'react';
import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
const Toggle = () => {
    const [On, setOn] = useState(false)
    const handleToggle = () => {
        setOn(prev => !prev);
    }
  return (
<>
      { On ? <FaToggleOn onClick={handleToggle} className='text-cyan-700 text-4xl w-15  '/> : <FaToggleOff onClick={handleToggle} className="text-zinc-400  text-4xl w-15" />}

</>
)
}
export default Toggle