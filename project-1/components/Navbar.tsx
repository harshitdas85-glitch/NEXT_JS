'use client';
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { Romanesco } from "next/font/google";
import { Noto_Serif_JP } from "next/font/google";
const poppins = ({
  subsets: ['latin-ext'],
  weight: '400', // You can add multiple weights here
  variable: '--font-poppins',    // Rename this to match the font
});
const japan = Noto_Serif_JP({
  subsets: ['latin-ext'],
  weight: '400', // You can add multiple weights here
  variable: '--font-jp',    // Rename this to match the font
});

import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";
import { cn } from "../utils/cn";
 
function Navbar ({ className }: { className?: string }){
     const [active, setActive] = useState<string | null>(null);
    return ( 
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 --font-poppins")}>
            <Menu setActive={setActive}>
            <Link className={``} href={"/"}>
            <MenuItem setActive={setActive}  active={active} item="Home"
            ></MenuItem>
            </Link>
             <MenuItem setActive={setActive} active={active} item="Our Courses "
            >
                <div className={`flex flex-col space-y-4 text-sm `} >
                <HoveredLink href="/courses">All Courses</HoveredLink>
                <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                <HoveredLink href="/courses">Song Writing</HoveredLink>
                <HoveredLink href="/courses">Music Production</HoveredLink>

                </div>
                </MenuItem>
                <Link href={"/contact"}>
                  <MenuItem setActive={setActive} active={active} item="Contact Us"
            ></MenuItem>
                </Link>
            </Menu>
             </div>
    )
}
export default Navbar