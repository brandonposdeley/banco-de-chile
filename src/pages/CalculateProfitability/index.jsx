import controlProcessColumn from '../../columms/controlProcess';
import Datepicker from '../../components/DatePicker';

import Table from '../../components/Table'
import Mainlayout from '../../layout/Mainlayout';
import mockData from '../../mock/mockDataControlProcess';

const CalculateProfitability = () => {


  return (
   <Mainlayout>
     <div className='p-20'>
        <div className='flex justify-between mb-8'>
            <h1 className='bg-gray-300 px-5 py-1 rounded'>Control de calculos</h1>
            <Datepicker />
        </div>
        <Table
            columns={controlProcessColumn()}
            data={mockData}
        />
    </div>
   </Mainlayout>
  )
}

export default CalculateProfitability