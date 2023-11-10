import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// components
import AppHead from 'components/atoms/AppHead';
import AppHeader from 'components/organisms/AppHeader';
import AppHero from 'components/atoms/AppHero';
import AppSection from 'components/atoms/AppSection';
import AppBanner from 'components/atoms/AppBanner';
import AppFooter from 'components/atoms/AppFooter';
import AppNearby from 'components/atoms/AppNearby';
import 'styles/globals.css';
// typings
import { IExploreNearby, ILiveAnywhere } from 'typings';
// utils

interface IHomeDataProps {
  exploreNearby: any[];
  liveAnywhere: ILiveAnywhere[];
}

const Home: FC<IHomeDataProps> = ({ exploreNearby, liveAnywhere }) => {
  return (
    <>
      <AppHead />
      <AppHeader exploreNearby={exploreNearby} />
      <main>
        {/* hero */}
        <AppHero />
        {/* explore nearby section */}
        <AppSection
          title="Explore Nearby"
          className="grid grid-cols-2 lg:gap-x-4 gap-x-1 gap-y-2 sm:grid-cols-3 lg:grid-cols-4"
        >
          {exploreNearby.map((data, index) => (
            <AppNearby key={index} data={data} />
          ))}
        </AppSection>
        {/* live anywhere section */}
        <AppSection
          title="Live Anywhere"
          className="grid grid-cols-2 lg:gap-x-4 gap-x-1 gap-y-2 lg:grid-cols-4"
        >
          {liveAnywhere.map((data, index) => (
            <Link key={index} href="#">
              <div className="relative p-2 duration-300 lg:p-3 gap-y-4 active:scale-105 active:bg-gray-200 active:bg-opacity-40 rounded-xl">
                <div className="relative w-full ">
                  <Image
                    src={data.img}
                    alt={data.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    placeholder="blur"
                    blurDataURL={data.img}
                    className="rounded-xl w-full h-auto"
                  />
                </div>
                <div>
                  <h3 className="font-medium leading-5 text-gray-500 text-md md:text-xl">
                    {data.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </AppSection>
        {/* bottom banner */}
        <AppBanner />
      </main>
      {/* footer */}
      <AppFooter />
    </>
  );
};

export default Home;
