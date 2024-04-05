import { getAllModulesData } from '@/app/lib/strapi';
import AdminModulesTable from '@/app/ui/AdminModulesTable';
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const DynamicPages = async ({ params }: {params: any}) => {
    const data: any = await getAllModulesData(params?.modules);
    
  return (
    <>
      <div className="py-3 sm:py-6">
          <div className="flex flex-row justify-between mb-4 px-3 sm:px-6">
            <h1 className="text-2xl">{params?.modules}</h1>
            <Button>
              <Link href={`/admin/${params?.modules}/add`}>Add {params?.modules}</Link>
            </Button>
          </div>

          <div className="overflow-x-auto overflow-y-auto w-full h-[75vh] px-3 sm:px-6">
                <AdminModulesTable data={data} params={params?.modules} />          
          </div>
      </div>
    </>
  )
}

export default DynamicPages