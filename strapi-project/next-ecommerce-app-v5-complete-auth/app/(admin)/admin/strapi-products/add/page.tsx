import React from 'react'
import CategoriesDropdown from '@/app/ui/CategoriesDropdown'
import DynamicForm from '@/app/ui/DynamicForm'
import { getDynamicForm } from '@/app/lib/strapi'
// import ProductForm from '@/app/ui/ProductForm'

const AddProducts = async () => {
  const data: any = await getDynamicForm();
  console.log("ccccccccc",data);
  
  return (
    <>
      <DynamicForm data={data} /> 
      
      {/* <CategoriesDropdown data={null} /> */}
      {/* </DynamicForm> */}
    </>
  )
}

export default AddProducts