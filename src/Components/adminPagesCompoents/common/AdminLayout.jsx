import React, { useState, useEffect } from "react";
import Header from "../adminHeader/header";
import Sidebar from "../adminHeader/Sidebar";

const AdminLayout = ({ children, title, subtitle, actions = null }) => {
  const [isOpen, setOpen] = useState(false);

  // Close sidebar on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <section className="bg-gray-100 w-full min-h-screen flex flex-col">
      {/* Header */}
      <Header isOpen={isOpen} setOpen={setOpen} />

      {/* Body layout */}
      <div className="flex flex-1 ">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} />

        {/* Overlay for mobile */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Main Content - With proper overflow handling */}
        <main className="flex-1 transition-all duration-300 ease-in-out p-4 lg:p-6 overflow-hidden">
          <div className="h-full overflow-y-auto">
            <div className="space-y-6 max-w-full">
              
              {/* Page Header */}
              {(title || subtitle || actions) && (
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    {title && <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">{title}</h1>}
                    {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
                  </div>
                  {actions && (
                    <div className="flex items-center gap-3">
                      {actions}
                    </div>
                  )}
                </div>
              )}
              
              {/* Page Content - Constrained width for tables */}
              <div className="w-full max-w-full overflow-hidden">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default AdminLayout;