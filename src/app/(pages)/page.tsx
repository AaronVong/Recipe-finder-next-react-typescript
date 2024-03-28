"use client";

import SearchForm from "@/components/searchForm";
import { nextPageFetch } from "@/services/fetchWebContent";
import { NextPageAction } from "@/store/actions/edamamActions";
import { MainContext } from "@/store/contexts";
import { EdamamHitInterfacae } from "@/types/EdamamTypes";
import { useContext } from "react";

export default function Home() {
  const { state, dispatch } = useContext(MainContext);
  return (
    <div className="">
      <SearchForm />
    </div>
  );
}
