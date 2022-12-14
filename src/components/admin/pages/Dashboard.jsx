import React, { useEffect, useState } from 'react';
 
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import ViaList from '../partials/dashboard/ViaList';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import ChargeList from '../partials/dashboard/ChargeList';
import PayList from '../partials/dashboard/PayList';

function Dashboard({ viaCategories }) {

  const [sidebarOpen, setSidebarOpen] = useState(false); 
  
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} viaCategories={viaCategories} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <WelcomeBanner />
            <div className="grid grid-cols-12 gap-6">
              {/* Via list */}
              {viaCategories.map((category, index) => {
                return(
                  <ViaList category={category} key={index} categoryId = {category.id} />
                );
              })}
              {/* Table (Top Channels) */}
              <DashboardCard06 />
              {/* Table (Top Channels) */}
              <DashboardCard11 />
              {/* Nạp/Mua */}
              <ChargeList />
              <PayList />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;