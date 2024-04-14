// @ts-nocheck
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiClick } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";


function controlProcess() {
  const navigate = useNavigate();
  return [
    {
      label: 'Proceso',
      accesor: 'process',
      aligned: 'center',
      width: 8,
      colorLabel: '#202224',
      render: (data) => (
        <p className="text-sm">
          {data.process || ''}
        </p>
      ),
    },
    {
      label: 'Estado',
      accesor: 'status',
      aligned: 'center',
      width: 8,
      colorLabel: '#202224',
      render: (data) => (
        data.status && (
            <p style={{backgroundColor: data.statusColor}} className="text-sm">
            {data.status || ''}
          </p>
        )
      ),
    },
    {
      label: 'total ingresos',
      accesor: 'totalIncome',
      width: 8,
      aligned: 'center',
      colorLabel: '#202224',
      render: (data) => (
        <p className="text-sm">
          {data.totalIncome || ''}
        </p>
      ),
    },
    {
      label: 'Total egresos',
      accesor: 'totalExpenses',
      aligned: 'center',
      width: 8,
      colorLabel: '#202224',
      render: (data) => (
        <p className="text-sm">
          {data.totalExpenses || ''}
        </p>
      ),
    },
    {
      label: 'Saldo promedio',
      accesor: 'averageBalance',
      aligned: 'center',
      width: 8,
      colorLabel: '#202224',
      render: (data) => (
        <p style={{backgroundColor: data.coloraverageBalance}} className="text-sm">
          {data.averageBalance || ''}
        </p>
      ),
    },
    {
      label: 'Spread',
      accesor: 'spread',
      aligned: 'center',
      width: 8,
      colorLabel: '#202224',
      render: (data) => (
        <p className="text-sm">
          {data.spread || ''}
        </p>
      ),
    },
    {
        label: 'Desvio Rango Normal',
        accesor: 'normalRangeDeviation',
        aligned: 'center',
        width: 8,
        colorLabel: '#202224',
        render: (data) => (
          <p style={{backgroundColor: data.colorNormalRangeDesviation}} className="text-sm">
            {data.normalRangeDeviation || ''}
          </p>
        ),
      },
    {
      label: 'ver formula de calculo',
      accesor: 'calculations',
      aligned: 'center',
      width: 8,
      colorLabel: '#202224',
      render: (data) => (
        <button>
        <GiClick size={20} />
    </button>      ),
    },
    {
      label: 'ver ajustes',
      accesor: 'settings',
      aligned: 'center',
      width: 8,
      colorLabel: '#202224',
      render: (data) => (
        <button>
        <GiClick size={20}  />
    </button>      ),
    },
    {
        label: 'Ver parametros',
        accesor: 'parameters',
        aligned: 'center',
        width: 8,
        colorLabel: '#202224',
        render: (data) => (
            <Link to={'/parameters'}>
                <GiClick size={20} />
            </Link>
        ),
      },
    {
        label: 'Correr ingresos',
        accesor: 'runIncome',
        aligned: 'center',
        width: 8,
        colorLabel: '#202224',
        render: (data) => (
            <button>
                <FaPlay size={20} />
            </button>        ),
      },
      {
        label: 'Correr agresos',
        accesor: 'runExpenses',
        aligned: 'center',
        width: 8,
        colorLabel: '#202224',
        render: (data) => (
            <button>
                <FaPlay size={20} />
            </button>
        ),
      },
      {
        label: 'Fecha ultimo proceso',
        accesor: 'lastDate',
        aligned: 'center',
        width: 8,
        colorLabel: '#202224',
        render: (data) => (
          <p className="text-sm">
            {data.lastDate || ''}
          </p>
        ),
      },
  ];
}
export default controlProcess;
