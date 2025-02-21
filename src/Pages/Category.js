import React ,{useState} from 'react'
import ItemAction from '../Components/ItemActions/ItemAction'
import DataTable from '../Components/Table/DataTable'
import ItemModal from '../Components/ItemModal/ItemModal';
function Category() {
  const[categoryData,setCategoryData]=useState([]);
  const[isModalOpen,setIsModalOpen]=useState(false);
  return (
    <div>
      <ItemAction isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <DataTable categoryData={categoryData} setCategoryData={setCategoryData}/>
      {
          isModalOpen &&
          <ItemModal setIsModalOpen={setIsModalOpen} categoryData={categoryData} setCategoryData={setCategoryData} />
      }  
    </div>
  )
}

export default Category