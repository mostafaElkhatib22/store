import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
export default function LoadingTable({ rows = 8 }: { rows?: number }) {
  const tableRows = Array.from({ length: rows }, (_, index) => {
    return (
      <div className="mb-4" key={index}>
        <Skeleton className="w-full h-8 rounded" />
      </div>
    );
  });
  return <div>{tableRows}</div>;
}
