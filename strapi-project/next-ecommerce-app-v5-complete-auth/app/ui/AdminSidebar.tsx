import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  TokensIcon,
  LayersIcon,
  GearIcon,
  PersonIcon,
  CodeSandboxLogoIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { userLogout } from "../lib/actions";

const AdminSidebar = ({ data }: { data: any }) => {
  
  return (
    <div className="flex">
      <Command className="border shadow-md rounded-none w-full">
        <CommandInput placeholder="Type a command or search..." />

        <CommandList className="pb-24">
          <CommandEmpty>No results found.</CommandEmpty>

          {/* LINKS  */}
          <CommandGroup heading="Links">

            <CommandItem className="flex justify-center sm:justify-start items-center p-0 sm:p-1 mb-1">
              <Link href="/admin/dashboard">
                <TokensIcon className="h-6 w-6 py-1 px-0" />
              </Link>
              <span className="truncate w-full">
                <Link href="/admin/dashboard" className="">Dashboard</Link>
              </span>
            </CommandItem>

            <CommandItem className="flex justify-center sm:justify-start items-center p-0 sm:p-1 mb-1">
              <Link href="/admin/productsx">
                <CodeSandboxLogoIcon className="h-6 w-6 py-1 px-0" />
              </Link>
              <span className="truncate w-full">
                <Link href="/admin/productsx" className="">Products</Link>
              </span>
            </CommandItem>

            <CommandItem className="flex justify-center sm:justify-start items-center p-0 sm:p-1 mb-1">
              <Link href="/admin/categories">
                <PersonIcon className="h-6 w-6 py-1 px-0" />
              </Link>
              <span className="truncate w-full">
                <Link href="/admin/users" className="">Users</Link>
              </span>
            </CommandItem>

            <CommandItem className="flex justify-center sm:justify-start items-center p-0 sm:p-1 mb-1">
              <Link href="/admin/categories">
                <LayersIcon className="h-6 w-6 py-1 px-0" />
              </Link>
              <span className="truncate w-full">
                <Link href="/admin/categories" className="">Categories</Link>
              </span>
            </CommandItem>

            <CommandItem className="flex justify-center sm:justify-start items-center p-0 sm:p-1 mb-1">
              <Link href="/admin/strapi-products">
                <RocketIcon className="h-6 w-6 py-1 px-0" />
              </Link>
              <span className="truncate w-full">
                <Link href="/admin/strapi-products" className="">Strapi Products</Link>
              </span>
            </CommandItem>

          </CommandGroup>

          <CommandSeparator />

          {/* MODULES  */}
          <CommandGroup heading="Modules">
            {
              data.data?.map((curElem: any, index: any) => {
                return (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild>

                      <CommandItem className="flex justify-center sm:justify-start items-center p-0 sm:p-1 mb-1">
                        <Link href="#">
                          <TokensIcon className="h-6 w-6 py-1 px-0" />
                        </Link>
                        <span className="truncate w-full">
                          <Link href="#">{curElem?.attributes?.title}</Link>
                        </span>
                      </CommandItem>

                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Submenu</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                    {
                      curElem?.attributes?.items?.data?.length > 0 ? curElem?.attributes?.items?.data?.map((curElemx: any, indexx: any) => {
                        return (
                          <>
                            <DropdownMenuItem key={indexx}><Link href={curElemx?.attributes?.url}>{curElemx?.attributes?.title}</Link></DropdownMenuItem>
                          </>
                        )
                      }) :      
                      <DropdownMenuItem className="text-wrap">No items added yet...</DropdownMenuItem>
                        
                    }
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              })
            }
            


          </CommandGroup>


          <CommandSeparator />

          {/* SETTINGS  */}
          <CommandGroup heading="Settings">

            <CommandItem className="flex justify-center sm:justify-start items-center p-0 sm:p-1 mb-1">
              <button onClick={() => {userLogout()}}>
                <GearIcon className="h-6 w-6 py-1 px-0" />
              </button>
              <span className="truncate w-full">
              <button onClick={() => {userLogout()}}>Logout</button>
              </span>
            </CommandItem>

















          </CommandGroup>
          
        </CommandList>
      </Command>
    </div>
  );
};

export default AdminSidebar;
