/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
function Sidebar() {
  const pathname = usePathname();
  return (
    <aside>
      {adminLinks.map((link) => {
        const isActivePage = pathname === link.href;
        const variant = isActivePage ? "destructive" : "ghost";
        return (
          <Button
            asChild
            className="w-full mb-2 capitalize font-normal justify-start"
            variant={variant}
          >
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          </Button>
        );
      })}
    </aside>
  );
}

export default Sidebar;
