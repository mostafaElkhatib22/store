"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { LuShare2 } from "react-icons/lu";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";
import React from "react";

function ShareButtons({
  productId,
  name,
}: {
  productId: string;
  name: string;
}) {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const sharelink = `${url}/products/${productId}`;

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant={"outline"} size={"icon"} className="p-2">
          <LuShare2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        sideOffset={10}
        className="flex items-center gap-x-2 justify-center w-full "
      >
        <FacebookShareButton url={sharelink} title={name}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <LinkedinShareButton url={sharelink} title={name}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={sharelink} title={name}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <EmailShareButton url={sharelink} title={name}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </PopoverContent>
    </Popover>
  );
}

export default ShareButtons;
