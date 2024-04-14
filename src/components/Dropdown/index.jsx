/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from 'react';

function DropDown({
  ElementId,
  isError,
  title,
  data,
  value = 'default',
  selected,
  onChange = () => {},
  ...style
}) {
  if (isError) {
    return (
      <div
        data-testid="error"
        aria-label="mt"
        className="flex flex-col col-span-full sm:col-span-6 xl:col-span-3 bg-whiterounded-lg border-slate-200"
      >
        <div className="px-5 py- text-center">
          <div className="flex items-center justify-center text-slate-300">
            <svg
              className="my-20 h-20 w-20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z" />
              <path d="M0 24V0" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <select
      data-testid="rendering"
      name={ElementId}
      id={ElementId}
      onChange={onChange}
      defaultValue="default"
      className="border rounded-lg text-slate-400 font-medium text-xs fill text-center mt-1  border-slate-200 overflow-hidden  bg-bgWhite dark:bg-bgDark"
      {...style}
    >
      {title && (<option value={value} disabled>{ title }</option>)}
      {data && data.map((item, index) => (
        <option
          key={index}
          value={item.title}
          onClick={() => selected(item)}
        >
          {item}
        </option>
      ))}
    </select>
  );
}
export default DropDown;
