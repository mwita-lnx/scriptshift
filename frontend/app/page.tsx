// pages/page.tsx
import React from 'react';
import Home from 'app';


import { getExploreNearby, getLiveAnywhere } from 'utils/data';


const Page = async () => {
  return (
      
    <Home exploreNearby={getExploreNearby()} liveAnywhere={getLiveAnywhere()}/>
  );
};

export default Page;
