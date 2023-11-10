'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getCenter } from 'geolib';
import Image from 'next/image';
import Link from 'next/link';
// components
import AppFooter from 'components/atoms/AppFooter';
import AppHead from 'components/atoms/AppHead';
import AppHeader from 'components/organisms/AppHeader';
import AppPlaceCard from 'components/atoms/AppPlaceCard';

// utils
import { formatGuests, formatRangeDate } from 'utils';
// icons
import { MapIcon, ClipboardIcon } from '@heroicons/react/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const Search = ({ searchResults }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = {
    location: searchParams?.get('location'),
    checkIn: searchParams?.get('checkIn'),
    checkOut: searchParams?.get('checkOut'),
    guests: searchParams?.get('guests'),
  };
  const [visibleMapButton, setVisibleMapButton] = useState<boolean>(true);
  const [currentScroll, setCurrentScroll] = useState<number>(0);
  const [isFullMap, setIsFullMap] = useState<boolean>(false);
  const [map, setMap] = useState<boolean>(false);
  // data
  const [location, setLocation] = useState<string>('');
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState<Object>();

  useEffect(() => {
    if (query.checkIn) setCheckIn(new Date(query.checkIn?.toString()));
    if (query.checkOut) setCheckOut(new Date(query.checkOut?.toString()));
    if (query.guests) setGuests(JSON.parse(query.guests?.toString()));
  }, [query]);

  useEffect(() => {
    const handleOnScroll = () => {
      const position = window.scrollY;
      position > currentScroll ? setVisibleMapButton(false) : setVisibleMapButton(true);
      setCurrentScroll(position);
    };
    window.addEventListener('scroll', handleOnScroll);
    return () => window.removeEventListener('scroll', handleOnScroll);
  });

  const getGuests = (guests) => {
    const totalGuests = formatGuests(guests, { noInfants: true });
    if (totalGuests) return `• ${totalGuests}`;
  };

  const getDates = (startDate, endDate) => {
    const dates = formatRangeDate(startDate, endDate);
    if (dates) return `• ${dates}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AppHead />
      <AppHeader searchPage query={{ location, checkIn, checkOut, guests }} />
      <main
        className=''
      >
        {/* left - cards */}
        <div
          className={`${isFullMap && 'hidden'} px-4 my-9 py-20 duration-500 lg:py-20 lg:px-7`}
        >
          {/* search data */}
          <span className="inline-block mb-2 text-sm text-gray-400">
            217 Stays {checkIn && getDates(checkIn, checkOut)}{' '}
            {guests && getGuests(guests)}
          </span>
          {/* title */}
          <h1 className="mb-2 text-2xl font-semibold md:text-3xl lg:text-4xl lg:mb-7">
            Stays in {location}
          </h1>
          {/* filters */}
          <div className="mb-4 space-x-1 space-y-2 text-gray-400 md:space-x-2 lg:mb-8">
            <button className="px-2 py-1 text-xs duration-300 border border-gray-300 border-opacity-50 rounded-full cursor-pointer md:px-4 md:py-2 lg:text-sm active:scale-90 hover:border-gray-500">
              Cancellation flexibility
            </button>
            <button className="px-2 py-1 text-xs duration-300 border border-gray-300 border-opacity-50 rounded-full cursor-pointer md:px-4 md:py-2 lg:text-sm active:scale-90 hover:border-gray-500">
              Type of place
            </button>
            <button className="px-2 py-1 text-xs duration-300 border border-gray-300 border-opacity-50 rounded-full cursor-pointer md:px-4 md:py-2 lg:text-sm active:scale-90 hover:border-gray-500">
              Price
            </button>
            <button className="px-2 py-1 text-xs duration-300 border border-gray-300 border-opacity-50 rounded-full cursor-pointer md:px-4 md:py-2 lg:text-sm active:scale-90 hover:border-gray-500">
              Instant Book
            </button>
            <button className="px-2 py-1 text-xs duration-300 border border-gray-300 border-opacity-50 rounded-full cursor-pointer md:px-4 md:py-2 lg:text-sm active:scale-90 hover:border-gray-500">
              More filters
            </button>
          </div>
          {/* information */}
          <p className="mb-4 text-sm text-gray-400">
            Review COVID-19 travel restrictions before you book.{' '}
            <Link href="/" className="underline">
              Learn more
            </Link>
          </p>

          <section
            className={`${
              !isFullMap && ' xl:grid-cols-2'
            } flex-grow grid grid-cols-1 mt-[40px] duration-500`}
          >
            {searchResults.map((result) => (
              <div className="lg:w-11/12 sr-card">
                <AppPlaceCard key={result.long + result.lat} data={result} />
              </div>
              
            ))}
          </section>
        </div>

        {/* map toggler */}
        <button
          className={`${
            visibleMapButton
              ? 'translate-y-0 md:translate-y-[50px]'
              : 'translate-y-[80px] md:translate-y-[200px]'
          } lg:hidden duration-300 fixed flex items-center px-5 py-3 text-sm text-white translate-x-1/2 bg-gray-500 rounded-full right-1/2 bottom-20 shadow-lg active:scale-90`}
          onClick={() => {
            map ? setMap(false) : setMap(true);
          }}
        >
          {map ? (
            <>
              <span>List</span> <ClipboardIcon className="h-4 ml-2" />
            </>
          ) : (
            <>
              <span>Map</span> <MapIcon className="h-4 ml-2" />
            </>
          )}
        </button>
      </main>
      {/* footer */}
      {!isFullMap && <AppFooter />}
    </div>
  );
};

export default Search;
