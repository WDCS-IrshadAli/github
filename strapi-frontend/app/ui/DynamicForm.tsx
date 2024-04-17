"use client"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const DynamicForm = ({ data, moduleName }: { data: any, moduleName: any }) => {
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Handle input change
      };
    
      const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Handle checkbox change
      };
    
      const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Handle file input change
      };
    
      const formElements = Object.keys(data?.data.schema.attributes).map(
        (fieldName, index) => {
            
          const fieldData = data.data.schema.attributes[fieldName];
          let inputElement = null;
    
          switch (fieldData.type) {
            case "string":
            case "email":
            case "password":
              inputElement = (
                <Input
                  className="placeholder:font-normal font-normal"
                  type={
                    fieldData.type === "password"
                      ? "password"
                      : fieldData.type === "email"
                      ? "email"
                      : "text"
                  }
                  name={fieldName}
                  placeholder={fieldName.charAt(0).toUpperCase()+fieldName.slice(1) || ""}
                  required={fieldData.required}
                  minLength={fieldData.minLength}
                  maxLength={fieldData.maxLength}
                  defaultValue={fieldData.default || ""}
                  id={fieldName}
                  // onChange={handleChange}
                />
              );
              break;

            case "enumeration":
              inputElement = (
<>

                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={`Select ${fieldName}`} />
                    </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                    <SelectLabel>No values </SelectLabel>
                    {fieldData.enum.map((option: any, index: any) => (
                      <SelectItem key={index} value={option}>{option}</SelectItem>
                    ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <select
                  className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-status"
                  name={fieldName}
                >
                  {fieldData.enum.map((option: any, index: any) => (
                    <option key={index}>{option}</option>
                  ))}
                </select>
</>
              );
              break;

            case "boolean":
              inputElement = (
                  <Switch
                      name={fieldName}
                      checked={fieldData.default || false}
                      id={fieldName}
                      // onChange={handleChecked}
                    />
              );
              break;

            case "decimal":
            case "integer":
            case "big integer":
            case "float":
              inputElement = (
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                  type="number"
                  placeholder={fieldName}
                  name={fieldName}
                  required={fieldData.required}
                  defaultValue={fieldData.default || ""}
                  id={fieldName}
                //   onChange={handleChange}
                />
              );
              break;

            case "date":
              inputElement = (
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                  type="date"
                  name={fieldName}
                  required={fieldData.required}
                  defaultValue={fieldData.default || ""}
                  id={fieldName}
                //   onChange={handleChange}
                />
              );
              break;

            case "text":
              inputElement = (
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder={fieldName}
                  required={fieldData.required}
                  name={fieldName}
                  minLength={fieldData.minLength}
                  maxLength={fieldData.maxLength}
                  defaultValue={fieldData.default || ""}
                  id={fieldName}
                  //  onChange={handleChange}
                ></textarea>
              );
              break;

            case "media":
              inputElement = (
                <div className="relative">
                  <input
                    className="hidden"
                    type="file"
                    id={fieldName}
                    accept={fieldData.allowedTypes.join(",")}
                    multiple={fieldData.multiple}
                    name={fieldName}
                    required={fieldData.required}
                    // onChange={handleFileChange}
                  />
                  <label htmlFor={fieldName} className="w-full px-3 py-2 border border-gray-300 rounded-md cursor-pointer bg-white text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500">
                    Upload File
                  </label>
                </div>
              );
              break;

            default:
              inputElement = null;
          }
    
          return (
            fieldData.type !== "relation" && (fieldData.type == "boolean" || fieldData.type == "enumeration" || fieldData.type == "media" 
            ? (
              <>
                <Label htmlFor={fieldName} className="text-xs text-gray-600">{fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}</Label>
                {inputElement}
              </>
            ) : (
              <>
                <Label htmlFor={fieldName} className="text-xs text-gray-600">{fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}</Label>
                {inputElement}
              </>
            ))
          );
        }
      );
    
      return (
        <>
          <div className="py-3 sm:py-6">
              <h1 className="text-2xl px-3 sm:px-6 mb-4">Add {moduleName.charAt(0).toUpperCase() + moduleName.slice(1)}</h1>
              
              <div className="overflow-x-auto overflow-y-auto w-full h-[75vh] px-3 sm:px-6">

                <form action="{dispatch}" className="flex flex-col gap-3">
                  {formElements.map((curElem, index) => (

                    <div key={index} className="grid w-full max-w-sm items-center gap-2">
                      {curElem}
                    </div>
                  ))}

                  <Button type="submit">Submit</Button>        
                </form>

              </div>
          </div>
        </>
      );
}

// const DynamicForm = ({ data }: { data: any }) => {
//     // console.log("aaaaaaaaaaaa", data);
    
//   return (
//     <>
//         <div className="py-3 sm:py-6">
//             <h1 className="text-2xl px-3 sm:px-6 mb-4">Add {data?.apiID}</h1>

//             <div className="overflow-x-auto overflow-y-auto w-full h-[75vh] px-3 sm:px-6">

//                 <form action="{dispatch}" className="flex flex-col gap-3">

//                     {
//                         data?.formFields?.map((curElem: any, index: any) => {
//                             return (
//                                 <div key={index} className="grid w-full max-w-sm items-center gap-2">
//                                     <Label htmlFor={curElem?.name} className="text-xs">{curElem?.label}</Label>
//                                     {
//                                         curElem.type=="string" ?
//                                         <Input 
//                                             name={curElem?.name}
//                                             type="string"
//                                             minLength={curElem?.minLength ? curElem?.minLength : ""} //string
//                                             maxLength={curElem?.maxLength ? curElem?.maxLength : ""}
//                                             required={curElem?.required ? curElem?.required : false}
//                                             id={curElem?.name} 
//                                             placeholder={curElem?.placeholder} 
//                                             className="font-normal" 
//                                             // defaultValue={data===null ? "" : data?.title} 
//                                         />
//                                         :
//                                         curElem.type=="integer" ?
//                                         <Input 
//                                             name={curElem?.name}
//                                             type="number"
//                                             min={curElem?.minLength ? curElem?.minLength : ""} //string
//                                             max={curElem?.maxLength ? curElem?.maxLength : ""}
//                                             required={curElem?.required ? curElem?.required : false}
//                                             id={curElem?.name} 
//                                             placeholder={curElem?.placeholder} 
//                                             className="font-normal" 
//                                             // defaultValue={data===null ? "" : data?.title} 
//                                         />
//                                         :
//                                         ""
//                                     }
//                                     <span className="text-xs font-normal text-gray-300">{curElem?.description}</span>
//                                 </div>
//                             )
//                         })
//                     }
                    


//                     <div className="grid w-full max-w-sm items-center gap-2">
//                         <Button type="submit">Submit</Button>
//                     </div>



//                 </form>

//             </div>
//         </div>
//     </>
//   )
// }

export default DynamicForm