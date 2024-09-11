/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import {useDebouncedCallback} from 'use-debounce'
function NavSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  );
  const handleSearch = useDebouncedCallback((value:string) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set('search',value)
    }
    else{
      params.delete('search')
    }
    replace(`/products?${params.toString()}`)
  }
  ,500)
  useEffect(()=>{
    if (!searchParams.get('search')) {
      setSearch('')
    }
  },[searchParams.get('search')])
  const searchSubmitHandler = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
    handleSearch(e.target.value)
  };
  return (
    <Input
      type="search"
      placeholder="Search product...."
      className="max-w-xs dark:bg-muted"
      onChange={searchSubmitHandler}
      value={search}
    />
  );
}

export default NavSearch;
