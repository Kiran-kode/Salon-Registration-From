import React from 'react';
import CommonTable from "./CommonTable";
import { bookingsTableData } from '../../../data/adminIndex';
import Toggle from './Toggle';
import ActionsButton from '../common/ActionsButton';
import Label from '../common/Label';

const bookingsTableColumns = [
     { header: "Booking Number", accessor: "bookingId" },
    { header: "User", accessor: "user", 
         render: (row) => (
        <button className="bg-cyan-700 font-semibold text-white px-3 py-1 rounded-xl text-xs hover:bg-cyan-800  transition-colors">
          {row.user}
        </button>
    ),
     },
    { header: "Salon", accessor: "salon",
         render: (row) => (
        <button className="bg-cyan-700 font-semibold text-white px-3 py-1 rounded-xl text-xs hover:bg-cyan-800 transition-colors">
          {row.salon}
        </button>
     
    ),
     },
    { header: "Status", accessor: "status",
          render: (row) => (
        <button className="bg-yellow-500 font-semibold text-white px-3 py-1 rounded-xl text-xs hover:bg-yellow-400 transition-colors">
          {row.status}
        </button>
          )
     },
  { header: "Date & Time", accessor: "dateTime" },
   { header: "Service Amount", accessor: "serviceAmount" },

  { header: "Discount Amount", accessor: "discountAmount" },
  { header: "Subtotal", accessor: "subtotal" },
  { header: "Total Tax Amount", accessor: "totalTaxAmount" },
  { header: "Payable Amount", accessor: "payableAmount" },
  { header: "Order Date", accessor: "orderDate" },
  {
    header: "Actions",
    render: (row) => (
 <button className="bg-cyan-700 font-semibold text-white px-3 py-1 rounded text-xs hover:bg-cyan-800 transition-colors">
          View
        </button>
            ),
  },
];
function BookingsTable() {
  return (
    <div className="w-full">
      <CommonTable 
        title="Bookings"
        columns={bookingsTableColumns} 
        data={bookingsTableData} 
      />
    </div>
  );
}

export default BookingsTable;