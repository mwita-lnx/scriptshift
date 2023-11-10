import React, { ChangeEvent, FC, FocusEvent, PropsWithChildren } from 'react';
// components
import AppClearButtonProps from 'components/atoms/AppClearButton';
// icons
import { SearchIcon } from '@heroicons/react/outline';

interface IAppSearchOptionButtonProps extends PropsWithChildren<any> {
  relative?: boolean;
  withSearch?: boolean;
  separator?: boolean;
  isSearch?: boolean;
  type?: string;
  title: string;
  placeholder: string;
  active: boolean;

  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: (event: FocusEvent<HTMLElement>) => void;
  onClear: () => void;
}

const AppSearchOptionButton: FC<IAppSearchOptionButtonProps> = ({
  relative,
  children,
  separator,
  withSearch,
  isSearch,
  title,
  active,
 
  onChange,
  onFocus,
  onBlur,
  onClear,
}) => {
  return (
    <span
      role="button"
      tabIndex={0}
      className={`${
        active ? 'shadow-arround hover:bg-white' : 'hover:bg-gray-200 hover:bg-opacity-40'
      } ${relative && 'relative'} flex items-center rounded-full`}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <div
        className={`${
          withSearch && 'min-w-[120px]'
        } flex flex-col flex-grow pl-7 pr-3 text-left`}
      >
 {withSearch && (
        <button
          type="button"
          className={`${
            isSearch ? 'w-48 saturate-200' : 'w-12'
          } flex items-center justify-center m-2 ml-0 px-3 h-12  rounded-full bg-primary  hover:saturate-200`}
        >
          <SearchIcon className="h-5 text-white" />
          <span
            className={`${
              isSearch ? 'inline-block' : 'hidden'
            } ml-2 font-medium text-white`}
          >
            Search
          </span>
        </button>
      )}
       
      </div>

      {/* clear icon */}
      <AppClearButtonProps
        onClick={onClear}
        active={true}
        isFocus={active}
        separator={separator}
      />

     
      <div className={`${active ? 'block' : 'hidden'} mt-16`}>{children}</div>
    </span>
  );
};

export default AppSearchOptionButton;
 