import { forwardRef } from "react";
import PropTypes from "prop-types";
import data from "./CardData";

// Use forwardRef to forward the ref to the div element inside Card
const Card = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="overflow-x-hidden">
      <div className="max-w-full w-[12.60431rem] h-[17.33094rem] bg-[#1a3f60] rounded-[0.75388rem] overflow-hidden mx-auto">
        <div className="w-[10.83656rem] h-[10.93075rem] text-white absolute left-[2.6875rem] top-[2.26156rem] font-pSans text-[0.81669rem] font-light leading-[1.03719rem] tracking-[0.00819rem]">
          {props.content}
        </div>
        <div className="w-[10.83656rem] h-[2.54425rem] absolute left-[2.6875rem] bottom-[1.19363rem]">
            <div className="text-white font-pSans text-[0.75388rem] font-semibold leading-[0.95738rem] tracking-[0.00756rem]">{props.name}</div>
            <div className="text-white font-pSans text-[0.691rem] font-light tracking-[0.00694rem] leading-[0.95738rem]">{props.title}</div>
        </div>
      </div>
    </div>
  );
});

// Set the display name explicitly for better debugging
Card.displayName = "Card";

// Define propTypes for the Card component to ensure proper validation
Card.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;