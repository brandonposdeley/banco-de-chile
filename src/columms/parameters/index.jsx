// @ts-nocheck
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GiClick } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";


function controlProcess() {
  const navigate = useNavigate();
  return [
    {
      label: 'Base',
      accesor: 'base',
      aligned: 'center',
      width: 8,
      colorLabel: '#202224',
      render: (data) => (
        <p className="text-sm">
          {data.base || ''}
        </p>
      ),
    },
    {
      label: 'Ene',
      accesor: 'january',
      aligned: 'center',
      width: 8,
      colorLabel: '#202224',
      render: (data) => (
        data.january && (
            <p style={{backgroundColor: data.statusColor}} className="text-sm">
            {data.january || ''}
          </p>
        )
      ),
    },
    {
      label: 'Feb',
      accesor: 'february',
      width: 8,
      aligned: 'center',
      colorLabel: '#202224',
      render: (data) => (
        <p className="text-sm">
          {data.february || ''}
        </p>
      ),
    },
    {
      label: 'Mar',
      accesor: 'march',
      aligned: 'center',
      width: 8,
      colorLabel: '#202224',
      render: (data) => (
        <p className="text-sm">
          {data.march || ''}
        </p>
      ),
    },
    {
      label: 'Abr',
      accesor: 'april',
      aligned: 'center',
      width: 8,
      colorLabel: '#202224',
      render: (data) => (
        <p style={{backgroundColor: data.coloraverageBalance}} className="text-sm">
          {data.april || ''}
        </p>
      ),
    },
    {
      label: 'May',
      accesor: 'may',
      aligned: 'center',
      width: 8,
      colorLabel: '#202224',
      render: (data) => (
        <p className="text-sm">
          {data.may || ''}
        </p>
      ),
    },
    {
        label: 'Jun',
        accesor: 'june',
        aligned: 'center',
        width: 8,
        colorLabel: '#202224',
        render: (data) => (
          <p style={{backgroundColor: data.colorNormalRangeDesviation}} className="text-sm">
            {data.june || ''}
          </p>
        ),
      },
    {
      label: 'Jul',
      accesor: 'july',
      aligned: 'center',
      width: 8,
      colorLabel: '#202224',
      render: (data) => (
        <p style={{backgroundColor: data.colorNormalRangeDesviation}} className="text-sm">
        {data.july || ''}
      </p>  
     ),
    },
    {
      label: 'Ago',
      accesor: 'august',
      aligned: 'center',
      width: 8,
      colorLabel: '#202224',
      render: (data) => (
        <p style={{backgroundColor: data.colorNormalRangeDesviation}} className="text-sm">
        {data.august || ''}
      </p>    
    ),
    },
    {
        label: 'Sep',
        accesor: 'september',
        aligned: 'center',
        width: 8,
        colorLabel: '#202224',
        render: (data) => (
            <p style={{backgroundColor: data.colorNormalRangeDesviation}} className="text-sm">
            {data.september || ''}
          </p>  
        ),
      },
    {
        label: 'Oct',
        accesor: 'october',
        aligned: 'center',
        width: 8,
        colorLabel: '#202224',
        render: (data) => (
            <p style={{backgroundColor: data.colorNormalRangeDesviation}} className="text-sm">
            {data.october || ''}
          </p>        ),
      },
      {
        label: 'Nov',
        accesor: 'november',
        aligned: 'center',
        width: 8,
        colorLabel: '#202224',
        render: (data) => (
            <p style={{backgroundColor: data.colorNormalRangeDesviation}} className="text-sm">
            {data.november || ''}
          </p>  
        ),
      },
      {
        label: 'Dic',
        accesor: 'december',
        aligned: 'center',
        width: 8,
        colorLabel: '#202224',
        render: (data) => (
          <p className="text-sm">
            {data.december || ''}
          </p>
        ),
      },
  ];
}
export default controlProcess;
