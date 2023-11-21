'use client';

import Link from 'next/link';
import './CustomCheckbox.css';
import IconTooltip from '../../assets/icon-tooltip.svg';
import Image from 'next/image';
import { useState } from 'react';
import { useWidgets } from '@/app/context/WidgetContext';

export const CustomCheckbox = ({ active }: { active: boolean }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [usePublicProfile, setUsePublicProfile] = useState<boolean>(active);

  return (
    <form className="checkbox-form">
      <label className="checkbox-form-label">
        <Link href="#" className="checkbox-form-link">
          Link to Public Profile
        </Link>
        <button className="tooltip-toggle" aria-label="Click or hover over to display tooltip." onClick={() => setIsChecked(!isChecked)}>
          <Image src={IconTooltip} alt="" />
        </button>
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
  );
};
