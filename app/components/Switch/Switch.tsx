import React, { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { useWidgets } from '@/app/context/WidgetContext';

export const SwitchComponent = ({ checked, widgetId }: { checked: boolean; widgetId: number }) => {
  const { activeWidget, setActiveWidget } = useWidgets();
  const [checkedState, setCheckedState] = useState(checked);
  const handleChange = () => {
    setCheckedState((prevState) => !prevState);
    setActiveWidget(widgetId);
  };

  return (
    <form>
      <div className="flex items-center justify-between">
        <label className="text-greenspark_green text-[0.875rem] leading-none pr-[15px]" htmlFor="activate-badge">
          Activate badge
        </label>
        <Switch.Root
          className="w-[42px] h-[21px] bg-blackA6 rounded-full relative border border-greenspark_green_hover focus:shadow-[0_0_0_2px] focus:shadow-greenspark_green data-[state=checked]:bg-greenspark_green outline-none cursor-default"
          checked={widgetId === activeWidget ? true : false}
          onCheckedChange={handleChange}
          id="activate-badge"
        >
          <Switch.Thumb className="block w-[1.45rem] h-[1.45rem] bg-white rounded-full border-2 border-greenspark_beige transition-transform duration-100 -translate-x-[1px] -translate-y-[2px] will-change-transform data-[state=checked]:translate-x-[21px]" />
        </Switch.Root>
      </div>
    </form>
  );
};
