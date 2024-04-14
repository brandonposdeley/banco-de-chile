import React, {
  useState,
  useEffect,
} from "react";

import Card from '../../components/Card';
import Toast from "../../components/Toast";

import mock from '../../mock.js';
import Mainlayout from "../../layout/Mainlayout.jsx";

function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [operatorsIngresos, setOperatorsIngresos] = useState([]);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  const handleProductSelect = (product) => {
      setSelectedProduct(product);
  };

  const handleCheckboxClick = (item) => {
    const isSelected = selectedItems.includes(item);
  
    if (isSelected) {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      if (selectedItems.length !== operatorsIngresos.length) {
        setError(true);
        return;
      }
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
    }
  
    setOperatorsIngresos((prevOperators) =>
      isSelected ? prevOperators.slice(0, -1) : prevOperators
    );
  };
  
  const handleOperator = (item) => {
      setOperatorsIngresos([...operatorsIngresos, item]);
  };

  const handleClean = () => {
    setSelectedProduct(null);
    setSelectedItems([]);
    setOperatorsIngresos([]);
    setError(false);
    setResult(null);
  };

  const handleValidate = () => {
    try {
      if (!selectedProduct) {
        setResult("Selecciona un producto");
        return;
      }
  
      const productValue = selectedProduct.value;
  
      const formula = selectedItems.map((item, index) => {
        const operator = operatorsIngresos[index] || "";
        return `${item.value}${operator}`;
      });
  
      const joinedFormula = `${productValue}${formula.join("")}`;
      let calculatedResult = eval(joinedFormula);
  
      // Redondear a dos decimales
      calculatedResult = parseFloat(calculatedResult.toFixed(2));
  
      // Formatear el número con comas y puntos
      const formattedResult = calculatedResult.toLocaleString();
  
      setResult(formattedResult);
    } catch (error) {
      console.error("Error evaluating formula:", error);
      setResult("Error");
    }
  };

  const formatFormula = () => {
    let formula = [];
  
    for (let i = 0; i < selectedItems.length; i++) {
      formula.push(
        <span
          key={`item-${i}`}
          className="item"
          style={{
            background: '#002464ff',
              color: 'white',
              padding: '4px 8px',
              borderRadius: 4,
          }}
        >
          {selectedItems[i].label}
        </span>
      );
  
      if (operatorsIngresos[i]) {
        formula.push(
          <span
            key={`operator-${i}`}
            style={{
              marginLeft: 10,
              marginRight: 10,
              background: '#002464ff',
              color: 'white',
              padding: '4px 8px',
              borderRadius: 4,
            }}
            className="operator">
              {operatorsIngresos[i]}
          </span>
        );
      }
    }
  
    return formula;
  };  

  useEffect(() => {
    if (error) {
      setTimeout(() => {
          setError(false);
      }, 1000 * 2);
    }
  }, [error])

    return (
        <Mainlayout>
          <div>
          {error ? (
            <Toast
              label="Es necesario agregar una operador!"
              style={{ right: 60, top: 20 }}
            />
          ) : null}
          <header className="bg-white">
             <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Banco de Chile</span>
              <img className="h-10 w-auto" src="https://companieslogo.com/img/orig/BCH-1e8f26ec.png?t=1654513008" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <div className="relative">
              <button type="button" className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false">
                Revenue Calculator
                <svg className="h-6 w-6 flex-none text-[#002464ff]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
      
            <a href="#" className="text-sm font-semibold leading-6 text-gray-600">Features</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-600">Marketplace</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-600">Company</a>
          </div>
        </nav>
      </header>

  <div className="container text-sm max-w-7xl mx-auto mt-4">

    <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-[#002464ff]">Revenue Calculator</h2>
        <div className="flex items-center space-x-1.5">
        <button
          onClick={() => handleOperator('+')}
          className="hover:bg-gray-900 text-gray-50 px-4 py-2 rounded-lg"
          disabled={selectedItems.length === 0}
          style={{
            backgroundColor: selectedItems.length === 0 ? 'gray' : '#002464ff'
          }}
        >
          +
        </button>
        <button
          onClick={() => handleOperator('-')}
          className="hover:bg-gray-900 text-gray-50 px-4 py-2 rounded-lg"
          disabled={selectedItems.length === 0}
          style={{
            backgroundColor: selectedItems.length === 0 ? 'gray' : '#002464ff'
          }}
        >
          -
        </button>
        <button
          onClick={() => handleOperator('*')}
          className="hover:bg-gray-900 text-gray-50 px-4 py-2 rounded-lg"
          disabled={selectedItems.length === 0}
          style={{
            backgroundColor: selectedItems.length === 0 ? 'gray' : '#002464ff'
          }}
        >
          *
        </button>
        <button
          onClick={() => handleOperator('/')}
          className="hover:bg-gray-900 text-gray-50 px-4 py-2 rounded-lg"
          disabled={selectedItems.length === 0}
          style={{
            backgroundColor: selectedItems.length === 0 ? 'gray' : '#002464ff'
          }}
        >
          /
        </button>
      </div>
    </div>

    <div className="flex-1 bg-white p-4 mt-4 mb-4 text-gray-600 rounded-lg border border-gray-300">
        <h2 className="hidden text-base font-medium mb-2">Nombre de la fórmula</h2>
        <input
           placeholder="Nombre de formula"
           className="text-base font-medium mb-2 mx-2"
           style={{ width: '16%' }}
        />
        {formatFormula()}
    </div>
  
      <div className="my-4 flex items-center justify-end" role="group">
        <button
          type="button"
          style={{ marginRight: 10 }}
          onClick={() => handleValidate()}
          className="border border-gray-300 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-[#002464ff] hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
          </svg>
          
          Validate
        </button>
        <button
            type="button"
            style={{ marginRight: 10 }}
            onClick={() => handleClean()}
            className="border border-gray-300 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-[#002464ff] hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
          </svg>
          Clean
        </button>
        <button type="button" className="border border-gray-300 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-[#002464ff] hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z" clipRule="evenodd" />
          </svg>
          
          Maker
        </button>
      </div>

      {result !== null && (
        <div
          style={{
              display: 'flex',
              alignItems: 'center',
              margin: '20px 0px',
              width: 'fit-content',
              border: '1px solid gray',
              padding: 16,
              borderRadius: 6,
          }}
        >
          <strong
              style={{ fontSize: 30, fontWeight: '400' }}
          >
            Resultado de Ingresos:
          </strong>
          <p
            style={{
              fontSize: 30,
              marginLeft: 6,
          }}
          >
            {result}
          </p>
        </div>
      )}

    <div className="flex gap-4 flex-wrap">
      <Card title="Productos">
       <ul>
          {mock && mock['Codigo de Producto'] && mock['Codigo de Producto']?.map((item) => (
                  <li
                    key={item.label}
                    onClick={() => handleProductSelect(item)}
                    className={`flex items-center text-gray-600 cursor-pointer rounded p-2 ${
                      selectedProduct && selectedProduct.label === item.label ? 'bg-blue-200' : ''
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
            className={`flex items-center text-gray-600 cursor-pointer rounded p-2 ${
              selectedItems.includes(item) ? 'bg-blue-200' : ''
            }`}
            onClick={() => !error ? handleCheckboxClick(item) : console.info('Disabled...')}
          >
            <div>
                <svg
                  className="w-4 h-4 mr-2 text-black"
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

    <Card title="Egresos">
        <ul>
            {mock && mock['Egresos'] && mock['Egresos']?.map((item) => (
                <li
                  key={item.label}
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

    <div className="flex-1 rounded-lg space-y-4">    
    <Card title="Formulas predefinidas">
        <ul>
            {mock && mock['Formulas'] && mock['Formulas']?.map((item) => (
                <li
                  key={item.label}
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
          <div className="flex-1 bg-white p-4 text-gray-600 rounded-lg border border-gray-300">
            <h2 className="text-base font-medium mb-2"> Código de División </h2>
            <label className="relative inline-flex items-center cursor-pointer mr-10">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#002464ff]"></div>
                <span className="ms-3 text-sm font-medium text-gray-600">111111</span>
              </label>
              <label className="relative inline-flex items-center cursor-pointer mr-10">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#002464ff]"></div>
                <span className="ms-3 text-sm font-medium text-gray-600">222222</span>
              </label>
              <label className="relative inline-flex items-center cursor-pointer mr-10">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#002464ff]"></div>
                <span className="ms-3 text-sm font-medium text-gray-600">333333</span>
              </label>
            </div>
          </div>
        </div>
        </div>
      </div>
        </Mainlayout>
    )
}

export default Home;
