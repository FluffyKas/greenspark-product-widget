import React from 'react';
import * as Switch from '@radix-ui/react-switch';

export const SwitchComponent = () => (
  <form>
    <div className="flex items-center">
      <label className="text-greenspark_green text-[0.875rem] leading-none pr-[15px]" htmlFor="active-badge">
        Active badge
      </label>
      <Switch.Root
        className="w-[42px] h-[25px] bg-blackA6 rounded-full relative border border-greenspark_green_hover focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-greenspark_green outline-none cursor-default"
        id="active-badge"
      >
        <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full border-2 border-greenspark_beige transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
    </div>
  </form>
);
