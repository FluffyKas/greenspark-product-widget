import { colorToTailwind } from '@/app/helpers/colourToTailwind';
import './ColourPicker.css';

export const ColourPicker = ({ selectedColor, onColourChange }: { selectedColor: string; onColourChange: (color: string) => void }) => {
  const coloursArray = ['blue', 'green', 'beige', 'white', 'black'];

  return (
    <form className="colour-picker">
      <fieldset>
        <h2 className="legend">Badge colour</h2>
        <div className="colours-container">
          {coloursArray.map((colour) => (
            <div key={colour} className="">
              <input type="radio" name="colour" id={colour} value={colour} className="colour-input" checked={selectedColor === colour} onChange={() => onColourChange(colour)} />
              <label htmlFor={colour} className="colour-label">
                <span className={`colour-input-display ${colorToTailwind(colour)}`}></span>
                <span className="sr-only">{colour}</span>
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </form>
  );
};
