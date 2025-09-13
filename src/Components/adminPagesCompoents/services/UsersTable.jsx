import React from 'react';
import CommonTable from "./CommonTable";
import { usersTableData } from '../../../data/adminIndex';
import ActionsButton from '../common/ActionsButton';
const usersColumns = [
  { 
    header: "Image", 
    render: (row) => (
      <div className="flex items-center">
        <img 
          src={row.imageUrl}
          className="w-12 h-12 rounded object-cover border"
        />
      </div>  
    )
  },
  { header: "Identity", accessor: "identity" },
  { header: "Full Name", accessor: "fullname" },
  { header: "Total Bookings", accessor: "totalBookings" },
  
  {
    header: "Actions",
    render: (row) => (
     <ActionsButton btn1="View" btn2="Delete" />
    ),
  },
];
function UsersTable() {
  return (
    <div className="w-full">
      <CommonTable 
        title="Users"
        columns={usersColumns} 
        data={usersTableData} 
      />
    </div>
  );
}

export default UsersTable;