"use client";
import React from "react";
import { useState } from "react";
import {SubmitButton} from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { Card } from "@/components/ui/card";
import Ratinginput from "@/components/reviews/Ratinginput";
import TextAreaInput from "@/components/form/textAreaInput";
import { Button } from "@/components/ui/button";
import { createReviewAction } from "@/utils/actions";
import { useUser } from "@clerk/nextjs";
function SubmitReviews({ productId }: { productId: string }) {
  const [isReviewFormVisable, setIsReviewFormVisable] = useState(false);
  const { user } = useUser();
  return (
    <div>
        <div className="mb-5 mt-2">
        <h1 className="font-bold text-xl text-red-500"> Let us know what  your openion about this product ❤️🫰</h1>
        </div>
      <Button
        size={"lg"}
        className="capitalize"
        onClick={() => setIsReviewFormVisable((prev) => !prev)}
      >
        Leave review
      </Button>
      {isReviewFormVisable && (
        <Card className="p-8 mt-8">
          <FormContainer action={createReviewAction}>
            <input type="hidden" name="productId" value={productId} />
            <input
              type="hidden"
              name="authorName"
              value={user?.firstName || "user"}
            />
            <input type="hidden" name="authorImageUrl" value={user?.imageUrl} />
            <Ratinginput name="rating" labelText="" />
            <TextAreaInput
              name="comment"
              labelText="feedback"
              defaultValue="Outstanding product!!"
            />
            <SubmitButton className="mt-4" />
          </FormContainer>
        </Card>
      )}
    </div>
  );
}

export default SubmitReviews;
