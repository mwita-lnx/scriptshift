'use client';
import React, { FC, useEffect, useState, FocusEvent } from 'react';

import Link from 'next/link';
// components
import AppLogo, { EAppLogo } from 'components/atoms/AppLogo';
import AppSearchBar from 'components/molecules/AppSearchBar';
import AppHeaderOption from 'components/atoms/AppHeaderOption';
import AppSearchBarMobile from 'components/molecules/AppSearchBarMobile';
import IconDrop from '../atoms/IconDropDown';
import AppSearchOptionWrapper from '../atoms/AppSearchOptionWrapper';
import AppSearchdrop from '../atoms/AppSearchdrop';
// icons
import { GlobeAltIcon, MenuIcon, SearchIcon } from '@heroicons/react/outline';
import { UserCircleIcon } from '@heroicons/react/solid';
// typings
enum EHeaderOpions {
  HOME = 'home',
  BLOG = 'blog',
  SEARCH = 'search',
}

import { IExploreNearby } from 'typings';

// context

interface AppHeaderProps {
  exploreNearby?: IExploreNearby[];
  searchPage?: boolean;
  query?: any;
}

const AppHeader: FC<AppHeaderProps> = ({ exploreNearby, searchPage, query }) => {
  // handler
  const handleOnBlur = (event?: FocusEvent<HTMLElement>) => {
    const { relatedTarget } = event || {};
    if (!relatedTarget) {
      setActiveMenu(null);
      return;
    }
    const relatedTargetClassList = Array.from((relatedTarget as Element)?.classList);
    const result = relatedTargetClassList.some((className) => {
      const prefix = ['close', 'btn'];
      if (prefix.includes(className.slice(0, 5))) return true;
    });
    if (result) setActiveMenu(null);
  };

  const [isSnapTop, setIsSnapTop] = useState<boolean>(searchPage ? false : true);
  const [isActiveSearch, setIsActiveSearch] = useState<boolean>(
    searchPage ? false : true
  );
  const [activeMenu, setActiveMenu] = useState<EHeaderOpions | null>(EHeaderOpions.HOME);

  const handleOnScroll = () => {
    const position = window.scrollY;
    if (position >= 50) {
      setIsSnapTop(false);
      setIsActiveSearch(false);
    } else {
      setIsSnapTop(true);
      setIsActiveSearch(true);
    }
  };

  const headerBehavior = () => {
    let style: any[] = [];
    if (!isSnapTop) style.push('bg-white shadow-lg');
    if (!isActiveSearch) style.push('h-[86px] pb-5');
    if (isActiveSearch) style.push('pb-8');
    return style.join(' ');
  };

  useEffect(() => {
    // listen to scroll
    if (!searchPage) {
      window.addEventListener('scroll', handleOnScroll);
    }
    return () => window.removeEventListener('scroll', handleOnScroll);
  }, [searchPage]);

  return (
    <>
      <header
        className={`${headerBehavior()} z-50 fixed top-0 w-full pt-5 duration-300 md:transition-none`}
      >
        {/* header top */}
        <div
          className={`${
            searchPage ? 'px-7' : 'container'
          } hidden md:grid md:grid-cols-[auto,1fr,auto] xl:grid-cols-[1.5fr,3fr,1.5fr] 2xl:grid-cols-[1fr,3fr,1fr] items-start`}
        >
          {/* left side - logo */}
          <div className="flex items-center h-12">
            <Link href="/">
              <AppLogo
                className={`${isSnapTop ? 'text-white' : 'text-primary'} hidden xl:block`}
                type={EAppLogo.TEXT}
              />
              <AppLogo
                className={`${isSnapTop ? 'text-white' : 'text-primary'} block xl:hidden`}
                type={EAppLogo.LOGO}
              />
            </Link>
          </div>
          {/* small search bar */}
          <button
            className={`${
              isActiveSearch && 'scale-[1.33] translate-y-[75px] opacity-0 z-[-50]'
            } ${
              searchPage ? 'pl-3' : 'pl-6'
            } relative flex items-center h-12 pr-2 mx-auto text-left transform bg-white border border-gray-200 rounded-full shadow-md cursor-pointer min-w-[320px] hover:shadow-lg md:absolute left-24 lg:left-auto lg:right-1/2 lg:translate-x-1/2 duration-200`}
            onClick={() => setIsActiveSearch(true)}
          >
            {searchPage ? (
              <span className="flex-grow text-sm font-medium tracking-wide text-gray-500"></span>
            ) : (
              <span className="flex-grow text-sm font-medium tracking-wide text-gray-500">
                Menu
              </span>
            )}
            <MenuIcon className="h-8 p-2 ml-3 text-white rounded-full bg-primary" />
          </button>
          {/* middle side navigation */}
          <div className="relative flex flex-col items-center justify-center order-last col-span-2 xl:order-none xl:col-span-1">
            <div className="text-white">
              <AppHeaderOption
                isSnap={isSnapTop}
                isActiveHeader={isActiveSearch}
                active={activeMenu === EHeaderOpions.HOME}
                onClick={() => setActiveMenu(EHeaderOpions.HOME)}
              >
                <Link href="/">Home</Link>
              </AppHeaderOption>
              <AppHeaderOption
                isSnap={isSnapTop}
                isActiveHeader={isActiveSearch}
                active={activeMenu === EHeaderOpions.BLOG}
                onClick={() => setActiveMenu(EHeaderOpions.BLOG)}
              >
                Blog
              </AppHeaderOption>
              <AppHeaderOption isSnap={isSnapTop} isActiveHeader={isActiveSearch}>
                <Link href="/">Online Experiences</Link>
              </AppHeaderOption>
            </div>
          </div>
          {/* right side */}
          <div className="flex items-center justify-end">
            <IconDrop
              relative
              withSearch
              type="inputText"
              title="start.."
              placeholder="Where are you going?"
              active={activeMenu === EHeaderOpions.SEARCH}
              onFocus={() => setActiveMenu(EHeaderOpions.SEARCH)}
              onBlur={handleOnBlur}
              isSearch={true}
              onSearch={() => setActiveMenu(EHeaderOpions.HOME)}
            >
              <AppSearchOptionWrapper className="right-0 w-96">
                <AppSearchdrop />
              </AppSearchOptionWrapper>
            </IconDrop>
            <Link
              href="/"
              className={`${
                isSnapTop
                  ? 'text-white hover:bg-white hover:bg-opacity-10'
                  : 'text-gray-500 hover:bg-gray-100 '
              } flex items-center h-10 px-3 mr-1 rounded-full `}
            >
              <GlobeAltIcon className="h-5" />
            </Link>
            <button className="flex items-center pl-3 pr-1 bg-white border border-gray-200 rounded-full h-11 hover:shadow-md">
              <MenuIcon className="h-5 mr-2 text-gray-300" />
              <UserCircleIcon className="h-10 text-gray-300" />
            </button>
          </div>
        </div>

        {/* mobile search bar */}
        <AppSearchBarMobile exploreNearby={exploreNearby || []} searchPage={searchPage} />
      </header>
      {/* background layer */}
      {isActiveSearch && !isSnapTop && (
        <div
          className="fixed inset-0 z-40 bg-transparent-black"
          onClick={() => setIsActiveSearch(false)}
        />
      )}
    </>
  );
};

export default AppHeader;
