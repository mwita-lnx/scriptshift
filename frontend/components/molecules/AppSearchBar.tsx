import React, { FC, FocusEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
// components
import AppSearchOptionButton from '@/components/atoms/AppSearchOptionButton';
import AppCounter from '@/components/atoms/AppCounter';
import AppSearchOptionWrapper from '@/components/atoms/AppSearchOptionWrapper';
import AppSearchdrop from '../atoms/AppSearchdrop'
import { DATA_ACTION_TYPES } from 'context/actionTypes';
// styles
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
// icons
import { ChevronRightIcon } from '@heroicons/react/outline';
// typings
import { EHeaderOpions } from 'typings';
// utils
import { formatCheckDate, formatRangeDate, formatGuests } from 'utils';

enum ESearchMenu {
  LOCATION = 'location',
  CHECK_IN = 'checkIn',
  CHECK_OUT = 'checkOut',
  GUESTS = 'guests',
}

interface IAppSearchBarProps {
  menu: EHeaderOpions | null;
  isActiveHeader: boolean;
  searchPage?: boolean;
  closeSearch?: () => void;
}

const AppSearchBar: FC<IAppSearchBarProps> = ({
  menu,
  isActiveHeader,
  closeSearch,
  searchPage,
}) => {
  const router = useRouter();
  const [searchMenu, setSearchMenu] = useState<ESearchMenu | null>(null);
  // data
  const [{ location, checkIn, checkOut, guests }] = [{ location: 'Nairobi', checkIn: '2023-11-05', checkOut: '2023-11-10', guests: { adults: 2, children: 1, infants: 0 } }];
  // handler
  const handleOnBlur = (event?: FocusEvent<HTMLElement>) => {
    const { relatedTarget } = event || {};
    if (!relatedTarget) {
      setSearchMenu(null);
      return;
    }
    const relatedTargetClassList = Array.from((relatedTarget as Element)?.classList);
    const result = relatedTargetClassList.some((className) => {
      const prefix = ['close', 'btn'];
      if (prefix.includes(className.slice(0, 5))) return true;
    });
    if (result) setSearchMenu(null);
  };



  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!location) {
      setSearchMenu(ESearchMenu.LOCATION);
      return;
    }
    if (searchPage) closeSearch();
    setSearchMenu(null);

    router.push("/search")
  };

  const dateRangeStyle =
    'left-4 right-4 searchbar:left-auto searchbar:right-1/2 searchbar:translate-x-1/2 searchbar:w-[850px]';

  return (
    <>
      <div className={`${isActiveHeader ? 'visible' : 'invisible'} px-4`}>
        <div
          className={`${
            !isActiveHeader && 'translate-y-[-75px] transform scale-50 opacity-0 z-[100]'
          } max-w-[250px] mx-auto mt-2 rounded-full bg-white border border-gray-200 duration-300 hidden md:flex`}
        >
          <form
            action="/search"
            className={`grid-cols-2 grid flex-grow`}
            onSubmit={handleOnSubmit}
          >

                <AppSearchOptionButton
                  relative
                  withSearch
                  type="inputText"
                  title="start.."
                  placeholder="Where are you going?"
                  active={searchMenu === ESearchMenu.GUESTS}
                  onFocus={() => setSearchMenu(ESearchMenu.GUESTS)}
                  onBlur={handleOnBlur}
                  onClear={() => {
                    ({ type: DATA_ACTION_TYPES.RESET_GUESTS });
                    handleOnBlur();
                  }}
                  isSearch={true}
                  onSearch={() => setSearchMenu(ESearchMenu.LOCATION)}
                  
                >
                  <AppSearchOptionWrapper className="right-0 w-96">
                  <AppSearchdrop/>
                  </AppSearchOptionWrapper>
                </AppSearchOptionButton>
             
          
          </form>
        </div>
      </div>
    </>
  );
};

export default AppSearchBar;