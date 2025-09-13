import React from 'react';
import CommonTable from "./CommonTable";
import { servicesTableData } from '../../../data/adminIndex';
import Toggle from './Toggle';
import ActionsButton from '../common/ActionsButton';
const servicesTableColumns = [

  { header: "Number", accessor: "number" },
   {
    header: "Image", accessor: "imageUrl",
    render: (row) => (
      <div className="flex items-center">
        <img
          src={row.imageUrl}
          className="w-12 h-12 rounded object-cover border"
        />
      </div>
    ),
  },
  { header: "Title", accessor: "title" },
  { header: "Category", accessor: "category" },
  { header: "Time", accessor: "time" },
  { header: "Price", accessor: "price" },
  { header: "Discount", accessor: "discount" },
  {
      header: "Genders", accessor: "gender",
      render: (row) => (
        <div className="flex flex-wrap gap-1">
        <button className={`bg-${row.gender === "Male" ? "blue" : "red"}-500 font-semibold text-white px-3 py-1 rounded-xl text-xs hover:bg-blue-300 transition-colors`}>
          {row.gender}
        </button>
      </div>
      ),},
  {
    header: "Salon", accessor: "salon",
    render: (row) => (
      <div className="flex flex-wrap gap-1">
        <button className="bg-cyan-700 font-semibold text-white px-3 py-1 rounded-xl text-xs hover:bg-blue-300 transition-colors">
          {row.salon}
        </button>
      </div>
    ),},
  {
    header: "Status (ON/OFF)", 
    render: (row) => (
      <div className="flex flex-wrap gap-1">
        <Toggle/>
      </div>
    ),},
  {
    header: "Actions",
    render: (row) => (
      <ActionsButton btn1="View" btn2="Delete" />
    ),
  }, 
];
function ServicesTable() {
  return (
    <div className="w-full">
      <CommonTable 
        title="Services"
        columns={servicesTableColumns} 
        data={servicesTableData} 
      />
    </div>
  );
}
export default ServicesTable;