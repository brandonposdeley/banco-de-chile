import parametersColumn from '../../columms/parameters';
import DropDown from '../../components/Dropdown';

import Table from '../../components/Table'
import Mainlayout from '../../layout/Mainlayout';
import mockData from '../../mock/mockDataParameters';

const Parameters = () => {
const itemsIFRS = [{ title: '1270206' }, { title: '1302242' }]
const itemsDivision = [{ title: '111' }, { title: '222' }, { title: '333' }]
const itemsSistem = [{ title: 'CBS' }, { title: 'FAC' }, { title: 'LSA' },{ title: 'ODS' }]
const itemsMoney = [{ title: '$' }, { title: 'USD' }, { title: 'UF' }]


  return (
   <Mainlayout>
     <div className='p-20'>
        <div className='flex justify-between mb-8'>
            <h1 className='bg-gray-300 px-5 py-1 rounded'>Parametros</h1>
        </div>
        <div className='flex justify-between mb-8'>
        <DropDown title="Código IFRS"  data={itemsIFRS.map((item) => item.title)} />
        <DropDown title="Código de División" data={itemsDivision.map((item) => item.title)} />
        <DropDown title="Código de Sistema" data={itemsSistem.map((item) => item.title)} />
        <DropDown title="Moneda" data={itemsMoney.map((item) => item.title)} />
        </div>
        <Table
            columns={parametersColumn()}
            data={mockData}
        />
    </div>
   </Mainlayout>
  )
}

export default Parameters