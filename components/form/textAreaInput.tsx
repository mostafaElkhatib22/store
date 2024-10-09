import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
type textAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};
function TextAreaInput({ name, defaultValue, labelText }: textAreaInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {labelText || name}
      </Label>
      <Textarea
        name={name}
        id={name}
        defaultValue={defaultValue}
        rows={5}
        required
        className="leading-loose"
      />
    </div>
  );
}

export default TextAreaInput;
