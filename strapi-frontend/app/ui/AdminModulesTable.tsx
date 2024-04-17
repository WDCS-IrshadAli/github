"use client"

import React from "react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export default function AdminModulesTable({ data, params }: { data: any, params: any }) {    
    const tableHeadingsArr = data?.length > 0 ? Object.keys(data[0]?.attributes) : [];
    
    // if no records
    if (tableHeadingsArr.length <= 0) {
        return (
            <Table>
                <TableCaption>No records found in {params} module.</TableCaption>
            </Table>
        )
    } 
                
  return (
    <>
        <Table>
            <TableCaption>A list of your recent {params}.</TableCaption>

            <TableHeader>
                <TableRow>
                <TableHead>Id</TableHead>
                {
                    tableHeadingsArr?.map((curElem, index) => {
                        return (
                            <TableHead key={index}>{curElem}</TableHead>
                        )
                    })
                }
                </TableRow>
            </TableHeader>

            <TableBody>
                {data?.map((curElem: any, index: any) => {                    
                    return (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{index+=1}</TableCell>
                            {
                                tableHeadingsArr?.map((curElemxx, indexxx) => {
                                    return (
                                        <TableCell key={indexxx}>{`${curElem?.attributes[`${curElemxx}`]}`}</TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    )
                })}
            </TableBody>

            {/* <TableFooter>
                <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter> */}
        </Table>
    </>
  )
}
