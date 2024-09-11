import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { VscCode } from "react-icons/vsc";

function Logo() {
  return (
    <Button size={"icon"} variant={"destructive"} asChild>
      <Link href={"/"} >
      <VscCode/>
      </Link>
    </Button>
  )
}

export default Logo