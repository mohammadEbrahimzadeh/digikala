import React from "react";
import ContextProductSearch from "./Contexts/ContextProductSearch";
import SearchProductPage from "./components/SearchProductPage/SearchProductPage";
export default function SearchPage() {
  return (
    <ContextProductSearch>
      <SearchProductPage />
    </ContextProductSearch>
  );
}
