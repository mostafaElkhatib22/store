/* eslint-disable react/jsx-key */
import EmptyList from "@/components/global/EmptyList";
import { deletProductActions, fetchAdminProducts } from "@/utils/actions";
import Link from "next/link";
import { foramtCurrency } from "@/utils/format";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { IconButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
async function AdminProductsPage() {
  const items = await fetchAdminProducts();
  if (items.length === 0) {
    return <EmptyList />;
  }
  return (
    <div>
      <Table>
        <TableCaption className="capitalize">
          Total Producuts : {items.length}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Products Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => {
            const { id: productId, name, company, price } = item;
            return (
              <TableRow>
                <TableCell>
                  <Link
                    href={`/products/${productId}`}
                    className="underline text-muted-foreground tracking-wide capitalize"
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>{company}</TableCell>
                <TableCell>{foramtCurrency(price)}</TableCell>
                <TableCell className="flex tems-center gap-x-2">
                  <Link href={`/admin/products/${productId}/edit`}>
                    <IconButton actionType="edit" />
                  </Link>
                  <DeleteProduct productId={productId} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
function DeleteProduct({ productId }: { productId: string }) {
  const deleteProduct = deletProductActions.bind(null, { productId });
  return (
    <FormContainer action={deleteProduct}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}

export default AdminProductsPage;
