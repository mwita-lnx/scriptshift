// pages/page.tsx
import React from 'react';
import Home from 'app';


import { getExploreNearby, categoriesData, tags } from 'utils/data';


const Page = async () => {
    const categories:[] = await categoriesData()
    const exploreNearby = await getExploreNearby()
    const tagsData:[] = await tags()
    return (
      <Home exploreNearby={exploreNearby} categories={categories} tags={tagsData}/>
    );
  
};  

    

export default Page;
