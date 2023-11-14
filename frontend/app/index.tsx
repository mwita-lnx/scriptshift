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
import TagCloud from '@/components/molecules/TagCloud';
import 'styles/globals.css';
// typings
import { ICategory, IExploreNearby, ITag,} from 'typings';
// utils

interface IHomeDataProps {
  exploreNearby: any[];
  categories: ICategory[];
  tags: ITag[];
}

const Home: FC<IHomeDataProps> = ({ exploreNearby, categories,tags }) => {
  return (
    <>
      <AppHead />
      <AppHeader exploreNearby={exploreNearby} />
      <main>
        {/* hero */}
        <AppHero />

        <AppSection
          title="Live Anywhere"
          className="grid grid-cols-2 lg:gap-x-4 gap-x-1 gap-y-2 lg:grid-cols-4"
        >
          {categories.map((data, index) => (
            <Link key={index} href="#">
              <div className="relative p-2 duration-300 lg:p-3 gap-y-4 active:scale-105 active:bg-gray-200 active:bg-opacity-40 rounded-xl">
                <div className="relative w-full image-card ">
                  {data.image &&  <Image
                    src={data.image}
                    alt={data.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    placeholder="blur"
                    blurDataURL={data.image}
                    className="rounded-xl w-full "
                  /> }
                 
                </div>
                <div>
                  <h3 className="font-medium leading-5 text-gray-500 text-md md:text-xl">
                    {data.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </AppSection>
        <AppSection
         title="Popular tags"
          className=""
        >
           <TagCloud tags={tags} />
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
