import Image from 'next/image';
import { IWidget } from '../types/interfaces';
import { SwitchComponent } from './Switch';

import LogoWhite from '../assets/logo-white.svg';
import LogoGreen from '../assets/logo-green.svg';
import { colorToTailwind } from '../helpers/colourToTailwind';
import { CustomCheckbox } from './CustomCheckbox';
import { ColourPicker } from './ColourPicker/ColourPicker';

export const Widget = ({ widget }: { widget: IWidget }) => {
  const bgColor = colorToTailwind(widget.selectedColor);

  return (
    <article className="widget | mb-9">
      <header className={`widget-header | ${bgColor}`}>
        <Image src={widget.selectedColor === 'beige' ? LogoGreen : LogoWhite} alt="Greenspark" className="w-[2.48119rem]" priority={true} />
        <h2 className="widget-title text-white">
          This product {widget.action}
          <span>
            {widget.amount} {widget.type}
          </span>
        </h2>
      </header>

      <ul>
        <li className="flex justify-between pt-[0.84rem]">
          <CustomCheckbox />
        </li>
        <li>
          <ColourPicker />
        </li>
        <li>
          <SwitchComponent />
        </li>
      </ul>
    </article>
  );
};
