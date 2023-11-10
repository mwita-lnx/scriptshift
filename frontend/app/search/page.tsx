// pages/page.tsx
import React from 'react';
import Search from './search';
import { getSearch } from 'utils/data';
import 'styles/globals.css';
import 'styles/custom.css';


const Page = async () => {
    const searchResults = await getSearch();
  return (
      <Search searchResults={searchResults}/>

  );
};

export default Page;
