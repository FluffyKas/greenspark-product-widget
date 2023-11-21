'use client';

import Image from 'next/image';
import { useState } from 'react';
import { IWidget } from '../../types/interfaces';
import { colorToTailwind } from '../../helpers/colourToTailwind';
import { SwitchComponent } from '../Switch/Switch';
import { CustomCheckbox } from '../CustomCheckbox/CustomCheckbox';
import { ColourPicker } from '../ColourPicker/ColourPicker';

import LogoWhite from '../../assets/logo-white.svg';
import LogoGreen from '../../assets/logo-green.svg';

import './Widget.css';

export const Widget = ({ widget }: { widget: IWidget }) => {
  const [selectedColor, setSelectedColor] = useState(widget.selectedColor);
  const bgColor = colorToTailwind(selectedColor);

  const handleColourChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <article className="widget">
      <header className={`widget-header | ${bgColor}`}>
        <Image src={selectedColor === 'beige' ? LogoGreen : selectedColor === 'white' ? LogoGreen : LogoWhite} alt="Greenspark" priority={true} className="widget-logo" />
        <h2 className={`widget-title ${selectedColor === 'beige' ? 'text-greenspark_green' : selectedColor === 'white' ? 'text-greenspark_green' : 'text-greenspark_white'}`}>
          This product {widget.action}
          <span>
            {widget.amount} {widget.type}
          </span>
        </h2>
      </header>

      <ul className="widget-settings">
        <li>
          <CustomCheckbox active={widget.active} />
        </li>
        <li>
          <ColourPicker selectedColor={selectedColor} onColourChange={handleColourChange} />
        </li>
        <li>
          <SwitchComponent checked={widget.active} widgetId={widget.id} />
        </li>
      </ul>
    </article>
  );
};
