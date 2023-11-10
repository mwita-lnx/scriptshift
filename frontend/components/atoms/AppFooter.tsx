import Link from 'next/link';
import Image from 'next/image';
// icons
import { GlobeAltIcon } from '@heroicons/react/outline';

const SITE_MAP = [
  {
    title: 'ABOUT',
    sitemap: [
      'How Airbnb works',
      'Newsroom',
      'Airbnb 2021',
      'Investors',
      'Airbnb Plus',
      'Airbnb Luxe',
      'HotelTonight',
      'Airbnb for Work',
      'Made possible by Hosts',
      'Careers',
      "Founders' Letter",
    ],
  },
  {
    title: 'COMMUNITY',
    sitemap: [
      'Diversity & Belonging',
      'Against Discrimination',
      'Accessibility',
      'Airbnb Associates',
      'Frontline Stays',
      'Guest Referrals',
      'Gift cards',
      'Airbnb.org',
    ],
  }
];

const AppFooter = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {SITE_MAP.map(({ title, sitemap }, index) => (
            <div
              key={title}
              className={`${
                index !== 0 && 'border-t border-gray-200 lg:border-none'
              } py-6 md:py-8`}
            >
              <span className="inline-block mb-4 text-sm font-medium">{title}</span>
              <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-y-3 xl:gap-y-4">
                {sitemap.map((data) => (
                  <li
                    key={data}
                    className="text-sm text-gray-500 hover:text-gray-400 hover:underline"
                  >
                    <Link href="/">
                     {data}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between py-5 text-sm text-gray-400 border-t border-gray-200 lg:py-6 lg:flex-row">
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
