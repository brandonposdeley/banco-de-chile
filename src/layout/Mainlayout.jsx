// @ts-nocheck
import React, {
  useState,
} from 'react';

import { useLocation } from 'react-router-dom';

import Sidebar from '../containers/Sidebar';

function Mainlayout({
  children,
}) {

  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <div>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      <div className="relative bg-bgCardWhite dark:bg-bgCard text-slate-900 dark:text-textWhite flex flex-col flex-1 overflow-y-auto overflow-x-hidden pb-6">
        <main>
          <div className="px-4 sm:px-6 lg:px-8 w-full max-w-9xlXXX mx-auto">
            <div className="mx-auto px-0 sm:px-0 lg:px-0 mt-0 mb-2 lg:flex lg:items-center lg:justify-between">
              <div className="flex-1 min-w-0">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <p className="mt-1 text-sm text-gra-600 hidden">
                      This information will be displayed publicly so be careful
                      what you share.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden mt-5 lg:mt-0 lg:ml-4">
                <span className="text-sm text-gray-600">Volver</span>
              </div>
            </div>
            {children}
          </div>
        </main>
      </div>
      {/* <div className="fixed bottom-0 right-0 md:bottom-8 md:right-12 z-50">
        <span className="bg-red-600 py-2 px-3 rounded-lg text-white font-bold">
          Development mode
        </span>
      </div> */}
    </div>
  );
}

export default Mainlayout;
