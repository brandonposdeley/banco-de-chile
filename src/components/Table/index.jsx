/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
// @ts-nocheck
import React, { useState } from 'react';

function Table({
  columns = [],
  data = [],
  isError,
  isLoading,
}) {
    
  if (isError) {
    return (
      <div
        data-testid="error"
        className="flex justify-center items-center py-20 text-slate-300"
      >
        <svg
          className="h-20 w-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z" />
          <path d="M0 24V0" fill="none" />
        </svg>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div
        data-testid="loading"
        className="overflow-x-auto relative shadow-md sm:rounded-lg"
      >
        <div className="w-full text-sm text-left text-gray-500">
          <div
            role="status"
            className="p-4 space-y-4  divide-y divide-gray-200"
          >
            <div className="flex justify-between items-center">
              <div className="h-3 bg-gray-200 rounded w-full mb-1.5" />
            </div>
            <div className="flex justify-between items-center pt-4">
              <div className="h-3 bg-gray-200 rounded w-full mb-1.5" />
            </div>
            <div className="flex justify-between items-center pt-4">
              <div className="h-3 bg-gray-200 rounded w-full mb-1.5" />
            </div>
            <div className="flex justify-between items-center pt-4">
              <div className="h-3 bg-gray-200 rounded w-full mb-1.5" />
            </div>
            <div className="flex justify-between items-center pt-4">
              <div className="h-3 bg-gray-200 rounded w-full mb-1.5" />
            </div>
            <div className="flex justify-between items-center pt-4">
              <div className="h-3 bg-gray-200 rounded w-full mb-1.5" />
            </div>
            <div className="flex justify-between items-center pt-4">
              <div className="h-3 bg-gray-200 rounded w-full mb-1.5" />
            </div>
            <div className="flex justify-between items-center pt-4">
              <div className="h-3 bg-gray-200 rounded w-full mb-1.5" />
            </div>
            <div className="flex justify-between items-center pt-4">
              <div className="h-3 bg-gray-200 rounded w-full mb-1.5" />
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }


  return (
    <section data-testid="rendering" style={{ position: 'relative' }}>
      <div className="overflow-x-auto relative shadow-black/5 shadow-lg sm:rounded-lg bg-bgWhite dark:bg-bgDark">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-500 uppercase dark:bg-bgDark">
            <tr>
              {columns.map((header, index) => (
                <th
                  key={[index]}
                  scope="col"
                  className="py-2 px-6"
                >
                  <span className="flex items-center justify-center">
                    <span className='text-center'>{header.label}</span>
                    {/* {showFilter
                      && (activeIcon ? (
                        <img
                          src={IconRowTop}
                          alt="icon row top"
                          style={{ width: 10, marginLeft: 4 }}
                        />
                      ) : (
                        <img
                          src={IconRowBottom}
                          alt="icon row bottom"
                          style={{ width: 10, marginLeft: 4 }}
                        />
                      ))} */}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data
              && data?.map((row, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  {columns?.map((column, index) => (
                    <td
                      align={column.aligned}
                      key={index}
                      className={`py-3 px-6 ${column.width} dark:bg-bgDark`}
                    >
                      {column?.render
                        ? column.render(row)
                        : String(row[column.accesor.name])}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>

        {data?.length === 0 && (
          <div className="flex items-center justify-center mt-10">
            <div className="text-center text-2xl">
              {' '}
              No se encontro la busqueda
              {' '}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
export default Table;
