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
    const tableHeadingsArr = data?.data?.length > 0 ? Object.keys(data?.data[0]?.attributes) : [];
  return (
    <>
        <Table>
            <TableCaption>A list of your recent {params}.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead>Id</TableHead>
                {
                    tableHeadingsArr?.map((curElem, index) => {
                        if (curElem=="createdAt" || curElem=="updatedAt" || curElem=="publishedAt") return
                        return (
                            <TableHead key={index}>{curElem}</TableHead>
                        )
                    })
                }
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.data?.map((curElem: any, index: any) => {
                    console.log("kkkkkkkkkkk", curElem);
                    
                    return (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{index}</TableCell>

                            {
                                tableHeadingsArr?.map((curElemxx, indexxx) => {
                                    if (curElemxx=="createdAt" || curElemxx=="updatedAt" || curElemxx=="publishedAt") return
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
