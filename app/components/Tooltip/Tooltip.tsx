import Link from 'next/link';

interface TooltipProps {
  isTooltipVisible: boolean;
  toggleTooltip: (e: React.MouseEvent, isVisible: boolean) => void;
}

export const Tooltip = ({ isTooltipVisible, toggleTooltip }: TooltipProps) => (
  <div
    className={`tooltip | ${
      isTooltipVisible ? 'opacity-100' : 'opacity-0'
    } | absolute bottom-6 left-32 w-[15.5rem] z-10 rounded-sm bg-white px-4 py-6 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] text-[0.875rem] leading-normal text-center transition-opacity duration-500`}
    id="tooltip"
    onMouseEnter={(e) => toggleTooltip(e, true)}
    onMouseLeave={(e) => toggleTooltip(e, false)}
  >
    <p className="mb-3">
      This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.
    </p>
    <Link href="#" className="text-greenspark_green hover:text-greenspark_green_hover duration-200 ease-in">
      View Public Profile
    </Link>
  </div>
);
