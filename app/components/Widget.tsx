import Image from 'next/image';
import { IWidget } from '../types/interfaces';
import { SwitchComponent } from './Switch';

import LogoWhite from '../assets/logo-white.svg';
import LogoGreen from '../assets/logo-green.svg';
import { colorToTailwind } from '../helpers/colorToTailwind';
import { CustomCheckbox } from './CustomCheckbox';

export const Widget = ({ widget }: { widget: IWidget }) => {
  const bgColor = colorToTailwind(widget.selectedColor);

  return (
    <article className="widget | mb-9">
      <header className={`widget-header | ${bgColor}`}>
        <Image src={widget.selectedColor === 'beige' ? LogoGreen : LogoWhite} alt="Greenspark" />
        <h2 className="widget-title text-white">
          This product {widget.action}
          <span className="text-lg block">
            {widget.amount} {widget.type}
          </span>
        </h2>
      </header>

      <ul>
        <li className="flex justify-between pt-[0.84rem]">
          <CustomCheckbox />
        </li>
        <li>
          <form className="colour-selector">
            <fieldset>
              <legend className="text-greenspark_green text-[0.875rem]">Badge colour</legend>
              <div>
                <input className="appearance-none" type="radio" id="blue" name="colour" value="blue" defaultChecked />
                <label htmlFor="purple" className="sr-only">
                  Blue
                </label>
              </div>
              <div>
                <input type="radio" id="green" name="colour" value="green" />
                <label htmlFor="green" className="sr-only">
                  Green
                </label>
              </div>
              <div>
                <input type="radio" id="beige" name="colour" value="beige" />
                <label htmlFor="beige" className="sr-only">
                  Beige
                </label>
              </div>
              <div>
                <input type="radio" id="white" name="colour" value="white" />
                <label htmlFor="white" className="sr-only">
                  White
                </label>
              </div>
              <div>
                <input type="radio" id="black" name="colour" value="black" />
                <label htmlFor="black" className="sr-only">
                  Black
                </label>
              </div>
            </fieldset>
          </form>
        </li>
        <li>
          <SwitchComponent />
        </li>
      </ul>
    </article>
  );
};
