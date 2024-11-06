import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { links } from "@/utils/links";
import Link from "next/link";
import UserIcone from "@/components/navbar/UserIcone";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import SignOutLink from "./SignOutLink";
import {auth} from '@clerk/nextjs/server'
function LinkDropdown() {
  const {userId} = auth()
  const isAdmin = userId === process.env.ADMIN_USER_ID
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
          <UserIcone />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-40 mr-3 py-2"
        align="start"
        sideOffset={10}
      >
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button className="w-full text-left">Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="w-full text-left">Register</button>
            </SignUpButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </SignedOut>
        <SignedIn>
          {links.map((link) => {
            if (link.label==="dashboard"&& !isAdmin) {
              return null
            }
            return (
              <DropdownMenuItem
                key={link.href}
                className="hover:bg-slate-500 font-semibold hover:text-white"
              >
                <Link href={link.href} className="capitalize w-full">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinkDropdown;
