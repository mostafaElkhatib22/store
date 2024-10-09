import React from "react";
import { Button } from "@/components/ui/button";
import { FaHeart } from "react-icons/fa";
import { auth } from "@clerk/nextjs/server";

function FavoriteToggleButton({ productId }: { productId: string }) {
  const {userId} = auth()
  console.log(userId)
  return (
    <Button size={"icon"} variant={"outline"} className="p-2 cursor-pointer">
      <FaHeart/>
    </Button>
  );
}

export default FavoriteToggleButton;
