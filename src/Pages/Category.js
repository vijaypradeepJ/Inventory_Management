import React ,{useState} from 'react'
import DataTable from '../Components/Table/DataTable'
import ItemModal from '../Components/ItemModal/ItemModal';
function Category() {
  const[categoryData,setCategoryData]=useState([]);
  const[isModalOpen,setIsModalOpen]=useState(false);
  return (
    <div>
      <DataTable categoryData={categoryData} setCategoryData={setCategoryData} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
      {
          isModalOpen &&
          <ItemModal setIsModalOpen={setIsModalOpen} categoryData={categoryData} setCategoryData={setCategoryData} />
      }  
    </div>
  )
}

export default Category