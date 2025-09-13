import React, { useState } from "react";
import Bookings from "../../Components/adminPagesCompoents/dashboard/bookings/Bookings";
import Salon from "../../Components/adminPagesCompoents/dashboard/Salon";
import PlatfromEarning from "../../Components/adminPagesCompoents/dashboard/PlatfromEarning";
import Withdrawals from "../../Components/adminPagesCompoents/dashboard/Withdrawals";
import WalletRecharge from "../../Components/adminPagesCompoents/dashboard/WalletRecharge";
import AdminLayout from "../../Components/adminPagesCompoents/common/adminLayout";

const Dashboard = () => {
  return (
  
        <AdminLayout>
          <Bookings />
          <Salon />
          <PlatfromEarning />
          <Withdrawals />
          <WalletRecharge />
        </AdminLayout>
        
  );
};

export default Dashboard;
