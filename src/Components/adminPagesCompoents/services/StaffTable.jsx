import React from 'react';
import CommonTable from "./CommonTable";
import { staffTableData } from '../../../data/adminIndex';
import { IoToggle } from "react-icons/io5";
import { useState } from 'react';
import Toggle from './Toggle';
import { FaStar } from "react-icons/fa";
import Label from '../common/Label';

const usersColumns = [
  { 
    header: "Photo", 
    render: (row) => (
      <div className="flex items-center">
        <img 
          src={row.imageUrl}
className="w-12 h-12 rounded object-cover border"/>
      </div>
    )
  },
  { header: "Details", 
    render: (row) => (
      <div>
        <div className='flex flex-col font-semibold text-gray-400 '>
          <span>{row.name}</span>
          <span>{row.id}</span>
        </div>
        <div className='flex gap-2 font-semibold text-white mt-1'>
          <span className='bg-yellow-500 px-3 py-1 rounded-xl flex w-fit '>
          <span className='flex items-center'>
            <FaStar  className='text-white  mr-1' />{row.rating}</span>
 </span>
          {row.status === "Active" ? <span className='bg-green-500 px-2 py-1 rounded-xl'>{row.status}</span> : <span className='bg-red-500 px-2 py-1 rounded-xl'>{row.status}</span>}
        </div>
      </div>
    )
   },
  {
    header: "Salon", 
    render: (row) => (
      <Label Label={row.salon} color="#3abaf4"/>
    ),
  },
  { header: "Bookings", accessor: "Bookings" },
  
  {
    header: "Actions",
    render: (row) => (
      <div className="flex flex-wrap gap-1">
        <Toggle/>
        <button className="bg-cyan-700 font-semibold text-white px-3 py-1 rounded text-xs hover:bg-cyan-800 transition-colors">
          View
        </button> 
      </div>
    ),
  },
];



function StaffTable() {
      
  return (
    <div className="w-full">
      <CommonTable 
        title="Staff"
        columns={usersColumns} 
        data={staffTableData} 
      />
    </div>
  );
}

export default StaffTable;