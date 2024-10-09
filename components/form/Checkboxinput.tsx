"use client";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
type CheckboxInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};
function Checkboxinput({ name, label, defaultChecked }: CheckboxInputProps) {
  return (
    <div className="flex items-center space-x-2">
      <Label
        htmlFor={name}
        className="text-sm leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </Label>
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
    </div>
  );
}

export default Checkboxinput;
