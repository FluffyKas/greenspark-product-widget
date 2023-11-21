import Image from 'next/image';
import { IWidget } from '../../types/interfaces';
import { colorToTailwind } from '../../helpers/colourToTailwind';
import { SwitchComponent } from '../Switch/Switch';
import { CustomCheckbox } from '../CustomCheckbox/CustomCheckbox';
import { ColourPicker } from '../ColourPicker/ColourPicker';

import LogoWhite from '../../assets/logo-white.svg';
import LogoGreen from '../../assets/logo-green.svg';

import './Widget.css';

export const Widget = ({ widget }: { widget: IWidget }) => {
  const bgColor = colorToTailwind(widget.selectedColor);

  return (
    <article className="widget">
      <header className={`widget-header | ${bgColor}`}>
        <Image src={widget.selectedColor === 'beige' ? LogoGreen : LogoWhite} alt="Greenspark" priority={true} className="widget-logo" />
        <h2 className={`widget-title ${bgColor === 'beige' ? 'text-greenspark_green' : bgColor === 'white' ? 'text-greenspark_green' : 'text-greenspark_white'}`}>
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
          <ColourPicker />
        </li>
        <li>
          <SwitchComponent checked={widget.active} />
        </li>
      </ul>
    </article>
  );
};
