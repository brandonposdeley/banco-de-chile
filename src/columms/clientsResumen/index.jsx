// @ts-nocheck
import React from 'react';
import { useNavigate } from 'react-router-dom';


function clientsResumen() {
  const navigate = useNavigate();
  return [
    {
      label: 'Fuente de datos',
      accesor: 'dataSources',
      aligned: 'center',
      width: 8,
      colorLabel: '#202224',
      render: (data) => (
        <p className="text-sm">
          {data.dataSources || ''}
        </p>
      ),
    },
    {
      label: 'Estatus',
      accesor: 'status',
      aligned: 'center',
      width: 8,
      colorLabel: '#202224',
      render: (data) => (
        data.status && (
          <button type="button" className="text-sm" onClick={() => navigate('/clients/details', { state: data.status })}>
            {data.status || ''}
          </button>
        )
      ),
    },
    {
      label: '# Registros',
      accesor: 'records',
      width: 8,
      aligned: 'center',
      colorLabel: '#202224',
      render: (data) => (
        <p className="text-sm">
          {data.records || ''}
        </p>
      ),
    },
    {
      label: 'Volumenes',
      accesor: 'volume',
      aligned: 'center',
      width: 8,
      colorLabel: '#202224',
      render: (data) => (
        <p className="text-sm">
          {data.volume || ''}
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
      label: '% De Fallas',
      accesor: 'failures',
      aligned: 'center',
      width: 8,
      colorLabel: '#202224',
      render: (data) => (
        <p style={{backgroundColor: data.colorFailures}} className="text-sm">
          {data.failures || ''}
        </p>
      ),
    },
    {
      label: 'Ultima fecha de procesamiento',
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
    {
      label: 'Ultimo periodo procesado',
      accesor: 'lastPeriod',
      aligned: 'center',
      width: 8,
      colorLabel: '#202224',
      render: (data) => (
        <p className="text-sm">
          {data.lastPeriod || ''}
        </p>
      ),
    },
  ];
}

export default clientsResumen;
