import clientsResumenColumn from '../../columms/clientsResumen';
import Datepicker from '../../components/DatePicker';

import Table from '../../components/Table'
import Mainlayout from '../../layout/Mainlayout';
import mockData from '../../mock/mockDataIntake';

const Intake = () => {


  return (
    <Mainlayout>
      <div className='p-20'>
        <div className='flex justify-between mb-8'>
            <h1 className='bg-gray-300 px-5 py-1 rounded'>Ingesta</h1>
            <Datepicker />
        </div>
        <Table
            columns={clientsResumenColumn()}
            data={mockData}
        />
    </div>
    </Mainlayout>
  )
}

export default Intake