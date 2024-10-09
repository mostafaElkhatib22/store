import React from "react";
import {
  fetchAdminProductDetails,
  updatedProductAction,
  updatedProductImageAction,
} from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/textAreaInput";
import SubmitButton from "@/components/form/Buttons";
import Checkboxinput from "@/components/form/Checkboxinput";
import { Input } from "@/components/ui/input";
import FormInput from "@/components/form/FormInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";
async function EditeProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await fetchAdminProductDetails(id);
  const { name, company, description, featured, price } = product;
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Update Product</h1>
      <div className="border p-8 rounded">
        <ImageInputContainer
          action={updatedProductImageAction}
          name={name}
          image={product.image}
          text="update image"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={product.image} />
        </ImageInputContainer>
        <FormContainer action={updatedProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <Input type="hidden" name="id" value={id} />
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
            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description"
            defaultValue={description}
          />
          <div className="mt-6">
            <Checkboxinput
              name="featured"
              defaultChecked={featured}
              label="featured product"
            />
          </div>
          <SubmitButton text="update product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}

export default EditeProductPage;
