import React from 'react';
import CommonTable from "./CommonTable";
import { salonTableData } from '../../../data/adminIndex';
import ActionsButton from '../common/ActionsButton';
import Label from '../common/Label';

const salonTableColumns = [

  { header: "Number", accessor: "number" },
  { header: "Salon Name", accessor: "salonName" },
{
    header: "Genders Served", accesor: "gendersServed",
    render: (row) => (
      <Label Label={row.gendersServed} color="#3abaf4"/>
    ),},
  { header: "Lifetime Earning", accessor: "lifetimeEarning" },
  { header: "Top Rated", accessor: "topRated" },
  { header: "Contact", accessor: "contact" },
  { header: "Owner", accessor: "owner" },
  {
    header: "Actions",
    render: (row) => (
      <ActionsButton btn1="View" btn2="Block" />
    ),
  },
  
];

function SalonsTable() {
  return (
    <div className="w-full">
      <CommonTable 
        title="Salons Management"
        columns={salonTableColumns} 
        data={salonTableData} 
      />
    </div>
  );
}
export default SalonsTable;