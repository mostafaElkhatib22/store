import { Button } from "@/components/ui/button";
import React from "react";
import { faker } from "@faker-js/faker";
import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { createProductAction } from "@/utils/actions";
import PriceInput from "@/components/form/PriceInput";
import ImageInput from "@/components/form/ImageInput";
import TextAreaInput from "@/components/form/textAreaInput";
import Checkboxinput from "@/components/form/Checkboxinput";
import SubmitButton from "@/components/form/Buttons";
const CreateProductAction = async (formData: FormData) => {
  "use server";
  const name = formData.get("name") as string;
};
function CreateProductPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Product</h1>
      <div className="border p-8 rounded-md">
      <FormContainer action={createProductAction}>
        <div className="grid gap-4 md:grid-cols-2 my-4">
          <FormInput
            type="text"
            name="name"
            label="product name"
            defaultValue={name}
          />
          <FormInput
            type="text"
            name="company"
            label="company"
            defaultValue={company}
          />
          <PriceInput />
          <ImageInput />
        </div>
        <TextAreaInput
          name="description"
          labelText="product description"
          defaultValue={description}
        />
        <div className="mt-6">
          <Checkboxinput name="featured" label="featured" />
        </div>
        <SubmitButton text="Create product"/>
      </FormContainer>
      </div>
    </section>
  );
}
export default CreateProductPage;
