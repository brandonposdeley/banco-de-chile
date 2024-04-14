import React, { useState } from "react";

import Card from '../../components/Card/index.jsx';

import mock from '../../mock.js';

function Home() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductSelect = (product) => {
      setSelectedProduct(product);
    };
  
    console.info('selectedProduct :', selectedProduct);

    return (
        <div>
<div className="container text-sm max-w-7xl mx-auto">
  <h2 className="text-2xl font-medium text-gray-600 mb-4">Calculo de rentabilidad</h2>

  <div className="hidden flex-1 bg-white p-4 mb-6 text-gray-600 rounded-lg border border-gray-300">
      <h2 className="text-base font-medium mb-2">Formula de ingresos</h2>
      <span className="inline-flex items-center rounded-lg bg-gray-50 px-2 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Saldo Promedio del  mes proceso</span> <span className="font-bold">*</span>
      <span className="inline-flex items-center rounded-lg bg-gray-50 px-2 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Tasa de Costo de Fondo</span> <span className="font-bold">*</span>
      <span className="inline-flex items-center rounded-lg bg-gray-50 px-2 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Número de días del mes</span>
      
      <h2 className="text-base font-medium mt-4 mb-2">Formula de egresos</h2>
      <span className="inline-flex items-center rounded-lg bg-gray-50 px-2 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Saldo Promedio del  mes proceso</span> <span className="font-bold">*</span>
      <span className="inline-flex items-center rounded-lg bg-gray-50 px-2 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Tasa de Costo de Fondo</span> <span className="font-bold">*</span>
      <span className="inline-flex items-center rounded-lg bg-gray-50 px-2 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Número de días del mes</span>
    </div>

<div className="hidden mb-8">
  <h2 className="text-lg font-bold text-gray-600 mb-2">Formula de ingresos</h2>
  <div className="w-full p-2 bg-white text-gray-600 rounded-lg border border-gray-300 mb-1">
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Saldo Promedio del  mes proceso</span>
  </div>
  
  <div className="flex items-center space-x-4 mb-4">
    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">+</button>
    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">-</button>
    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">*</button>
    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">/</button>
    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Limpiar</button>
  </div>
</div>

  <div className="flex gap-4">
    <Card title="Productos">
       <ul>
          {mock &&
                mock['Codigo de Producto'] &&
                mock['Codigo de Producto']?.map((item) => (
                  <li
                    key={item.label}
                    onClick={() => handleProductSelect(item)}
                    className={`flex items-center text-gray-600 cursor-pointer rounded p-2 ${
                      selectedProduct && selectedProduct.label === item.label ? 'bg-gray-300' : ''
                    }`}
                  >
                    <div>
                      <svg
                        className={`w-4 h-4 mr-2 text-black ${
                          selectedProduct && selectedProduct.label === item.label ? 'text-white' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <p style={{ textAlign: 'start' }}>{item.label}</p>
                  </li>
              ))}
      </ul>
    </Card>

<Card title="Ingresos">
        <ul>
            {mock && mock['Ingresos'] && mock['Ingresos']?.map((item) => (
                <li
                  key={item.label}
                  // onClick={() => }
                  className="flex items-center text-gray-600 cursor-pointer rounded p-2"
                >
                    <div>
                      <svg className="w-4 h-4 mr-2 text-black" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <p style={{ textAlign: 'start' }}>
                      {item.label}
                    </p>
                </li>
            ))}
        </ul>
    </Card>

    <Card title="Egresos">
        <ul>
            {mock && mock['Egresos'] && mock['Egresos']?.map((item) => (
                <li
                  key={item.label}
                  // onClick={() => }
                  className="flex items-center text-gray-600 cursor-pointer rounded p-2"
                >
                    <div>
                      <svg className="w-4 h-4 mr-2 text-black" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <p style={{ textAlign: 'start' }}>
                      {item.label}
                    </p>
                </li>
            ))}
        </ul>
    </Card>

    <Card title="Formulas predefinidas">
        <ul>
            {mock && mock['Formulas'] && mock['Formulas']?.map((item) => (
                <li
                  key={item.label}
                  // onClick={() => }
                  className="flex items-center text-gray-600 cursor-pointer rounded p-2"
                >
                    <div>
                      <svg className="w-4 h-4 mr-2 text-black" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <p style={{ textAlign: 'start' }}>
                      {item.label}
                    </p>
                </li>
            ))}
        </ul>
    </Card>
  </div>

  <div className="flex justify-between items-center mt-5">
      <h2 className="text-lg font-medium text-gray-600">Fórmulas</h2>
      <div className="flex items-center space-x-1.5 mb-4">
          <button className="bg-gray-800 text-gray-50 px-4 py-2 rounded-lg">C</button>
          <button className="bg-gray-800 text-gray-50 px-4 py-2 rounded-lg">+</button>
          <button className="bg-gray-800 text-gray-50 px-4 py-2 rounded-lg">-</button>
          <button className="bg-gray-800 text-gray-50 px-4 py-2 rounded-lg">*</button>
          <button className="bg-gray-800 text-gray-50 px-4 py-2 rounded-lg">/</button>
        </div>
  </div>

  <div className="hidden flex-1 bg-white p-4 mt-4 mb-6 text-gray-600 rounded-lg border border-gray-300">
      <h2 className="text-base font-medium mb-2">Fórmula de ingresos</h2>
      <span className="inline-flex items-center rounded-lg bg-gray-100 px-2 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Saldo Promedio del  mes proceso</span> <span className="font-bold">*</span>
      <span className="inline-flex items-center rounded-lg bg-gray-100 px-2 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Tasa de Costo de Fondo</span> <span className="font-bold">*</span>
      <span className="inline-flex items-center rounded-lg bg-gray-100 px-2 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Número de días del mes</span>
      
  </div>

<div className="p-4 relative h-auto overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75XXX lg:h-fullXXX">
      <h2 className="text-base font-medium mb-2 text-gray-600">Ingresos</h2>
      <span className="inline-flex items-center rounded-lg bg-gray-800 px-2 py-1 text-sm font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">Saldo Promedio del  mes proceso</span> <span className="font-bold">*</span>
      <span className="inline-flex items-center rounded-lg bg-gray-800 px-2 py-1 text-sm font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">Tasa de Costo de Fondo</span> <span className="font-bold">*</span>
      <span className="inline-flex items-center rounded-lg bg-gray-800 px-2 py-1 text-sm font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">Número de días del mes</span>
     
  </div>

  <div className="mt-4 p-4 relative h-auto overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75XXX lg:h-fullXXX">
      <h2 className="text-base font-medium mb-2 text-gray-600">Egresos</h2>
      <span className="inline-flex items-center rounded-lg bg-gray-800 px-2 py-1 text-sm font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">Saldo Promedio del  mes proceso</span> <span className="font-bold">*</span>
      <span className="inline-flex items-center rounded-lg bg-gray-800 px-2 py-1 text-sm font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">Tasa de Costo de Fondo</span> <span className="font-bold">*</span>
      <span className="inline-flex items-center rounded-lg bg-gray-800 px-2 py-1 text-sm font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">Número de días del mes</span>
     
  </div>


  <div className="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Validación</button>
      <button type="button" className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Maker</button>
    </div>

</div>
</div>
    )
}

export default Home;
