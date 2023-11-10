import React, { FC, MouseEvent, useState } from 'react';
import Link from 'next/link';
// context
import { DATA_ACTION_TYPES } from 'context/actionTypes';

import AppNearby from 'components/atoms/AppNearby';

// icons
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '@heroicons/react/outline';
// typings


import { getExploreNearby, getLiveAnywhere } from 'utils/data';

const AppSearchBarMobile = () => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };



  return (
    <>
      <section
       
        className={` bg-white rounded-t-3xl px-4  }`}
   
      >
        <form
          className="flex items-center h-12 mt-4"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
         <div className='flex-grow mr-4 btn'>
         
            <SearchIcon className="h-6" />
         
         </div>
          <input
            type="text"
            placeholder="Search something...?"
            value={inputValue}
            onChange={handleInputChange}
            className="flex-grow mr-4  placeholder-gray-300"
          />
          
        </form>
        <div className="mt-6">
          <h2 className="mb-4 text-xs font-bold">GO ANYWHERE, ANYTIME</h2>
          <button className="flex justify-between w-full px-6 py-4 border border-gray-200 rounded-full shadow-md text-primary">
            <span className="font-bold">I&apos;m flexible</span>{' '}
            <ChevronRightIcon className="h-6" />
          </button>
        </div>
        <div className="mt-6">
          <h2 className="mb-4 text-xs font-bold">GETAWAYS NEAR YOU</h2>
          {getExploreNearby()
            .slice(0, 3)
            .map((data, index) => (
              <AppNearby key={index} data={data} isSmall />
            ))}
        </div>
      </section>
    </>
  );
};

export default AppSearchBarMobile;
