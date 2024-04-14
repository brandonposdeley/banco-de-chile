// @ts-nocheck
/* eslint-disable no-param-reassign */

import Flatpickr from 'react-flatpickr';
// import "flatpickr/dist/themes/material_blue.css";
import 'flatpickr/dist/flatpickr.min.css';


function Datepicker({
  setAppDate = () => {}
}) {
  const dateFormat = (date) => {
    const year = date[0].toLocaleString('default', { year: 'numeric' });
    const month = date[0].toLocaleString('default', { month: '2-digit' });
    const day = date[0].toLocaleString('default', { day: '2-digit' });

    const year2 = date[1].toLocaleString('default', { year: 'numeric' });
    const month2 = date[1].toLocaleString('default', { month: '2-digit' });
    const day2 = date[1].toLocaleString('default', { day: '2-digit' });

    const formattedDate = `${day}-${month}-${year}`;
    const formattedDate2 = `${day2}-${month2}-${year2}`;
    return [formattedDate, formattedDate2];
  };
  const options = {
    mode: 'range',
    static: true,
    monthSelectorType: 'static',
    dateFormat: 'M j, Y',
    defaultDate: [new Date().setDate(new Date().getDate() - 366), new Date()],
    prevArrow:
      '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
    nextArrow:
      '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    onReady: (selectedDates, dateStr, instance) => {
      instance.element.value = dateStr.replace('to', '-');
      setAppDate(dateFormat(selectedDates));
    },
    onChange: (selectedDates, dateStr, instance) => {
      instance.element.value = dateStr.replace('to', '-');
      if (selectedDates.length === 2) {
        setAppDate(dateFormat(selectedDates));
      }
    },
  };


  return (
    <div data-testid="rendering" className="relative">
      <Flatpickr
        className="form-input pl-9 border-slate-200 text-slate-500 dark:text-textWhite dark:bg-bgDark dark:border-slate-600 hover:text-slate-600 font-medium focus:border-slate-300 w-60 rounded-lg"
        options={options}
      />
      <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
        <svg className="w-4 h-4 fill-current ml-3" viewBox="0 0 16 16">
          <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
        </svg>
      </div>
    </div>
  );
}

export default Datepicker;
