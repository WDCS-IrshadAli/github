import React from 'react'
import CategoriesDropdown from '@/app/ui/CategoriesDropdown'
import DynamicForm from '@/app/ui/DynamicForm'
import { getDynamicForm } from '@/app/lib/strapi'

const AddDynamicForm = async ({ params }: { params: any }) => {
  let moduleNameForUri: any = params?.modules.slice(0,-1);
  let uid: any = `api::${moduleNameForUri}.${moduleNameForUri}`
  const data: any = await getDynamicForm(uid);
  
  return (
    <>
      <DynamicForm data={data} /> 
    </>
  )
}

export default AddDynamicForm