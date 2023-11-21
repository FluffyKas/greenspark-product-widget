'use client';

import Link from 'next/link';
import './CustomCheckbox.css';
import IconTooltip from '../../assets/icon-tooltip.svg';
import Image from 'next/image';
import { useState } from 'react';
import { Tooltip } from '../Tooltip/Tooltip';

export const CustomCheckbox = ({ active }: { active: boolean }) => {
  const [usePublicProfile, setUsePublicProfile] = useState<boolean>(active);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const toggleTooltip = (e: React.MouseEvent, isVisible: boolean) => {
    e.preventDefault();
    setIsTooltipVisible(isVisible);
  };

  return (
    <div>
      <form className="checkbox-form">
        <label className="checkbox-form-label">
          <Link href="#" className="checkbox-form-link">
            Link to Public Profile
          </Link>
          <button
            className="tooltip-toggle"
            aria-label="Click or hover over to display tooltip."
            aria-describedby="tooltip"
            onClick={(e) => toggleTooltip(e, !isTooltipVisible)}
            onMouseEnter={(e) => toggleTooltip(e, true)}
            onMouseLeave={(e) => toggleTooltip(e, false)}
          >
            <Image src={IconTooltip} alt="" />
          </button>
          {<Tooltip isTooltipVisible={isTooltipVisible} toggleTooltip={toggleTooltip} />}
        </label>
        <input
          type="checkbox"
          name="public-profile-checkbox"
          id="public-profile-checkbox"
          className="public-profile-checkbox"
          checked={usePublicProfile}
          onChange={() => setUsePublicProfile(!usePublicProfile)}
        />
      </form>
    </div>
  );
};
