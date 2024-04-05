import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { Button } from '@/components/ui/button'

const DynamicForm = ({ data }: { data: any }) => {
    // console.log("aaaaaaaaaaaa", data);
    
  return (
    <>
        <div className="py-3 sm:py-6">
            <h1 className="text-2xl px-3 sm:px-6 mb-4">Add {data?.apiID}</h1>

            <div className="overflow-x-auto overflow-y-auto w-full h-[75vh] px-3 sm:px-6">

                <form action="{dispatch}" className="flex flex-col gap-3">

                    {
                        data?.formFields?.map((curElem: any, index: any) => {
                            return (
                                <div key={index} className="grid w-full max-w-sm items-center gap-2">
                                    <Label htmlFor={curElem?.name} className="text-xs">{curElem?.label}</Label>
                                    {
                                        curElem.type=="string" ?
                                        <Input 
                                            name={curElem?.name}
                                            type="string"
                                            minLength={curElem?.minLength ? curElem?.minLength : ""} //string
                                            maxLength={curElem?.maxLength ? curElem?.maxLength : ""}
                                            required={curElem?.required ? curElem?.required : false}
                                            id={curElem?.name} 
                                            placeholder={curElem?.placeholder} 
                                            className="font-normal" 
                                            // defaultValue={data===null ? "" : data?.title} 
                                        />
                                        :
                                        curElem.type=="integer" ?
                                        <Input 
                                            name={curElem?.name}
                                            type="number"
                                            min={curElem?.minLength ? curElem?.minLength : ""} //string
                                            max={curElem?.maxLength ? curElem?.maxLength : ""}
                                            required={curElem?.required ? curElem?.required : false}
                                            id={curElem?.name} 
                                            placeholder={curElem?.placeholder} 
                                            className="font-normal" 
                                            // defaultValue={data===null ? "" : data?.title} 
                                        />
                                        :
                                        ""
                                    }
                                    <span className="text-xs font-normal text-gray-300">{curElem?.description}</span>
                                </div>
                            )
                        })
                    }
                    


                    <div className="grid w-full max-w-sm items-center gap-2">
                        <Button type="submit">Submit</Button>
                    </div>



                </form>

            </div>
        </div>
    </>
  )
}

export default DynamicForm