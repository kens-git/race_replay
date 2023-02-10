import { useRef } from 'react';

const Slider = (props) => {
  const sliderRef = useRef<HTMLInputElement>(null);

  const onStartButtonClick = () => {
    sliderRef.current!.value = '0';
  };

  const onEndButtonClick = () => {
    sliderRef.current!.value = sliderRef.current!.max;
  };

  return (
    <div className="h-[10px] flex">
      <span className="pr-[8px] pl-[20px] text-[8px] text-teal-700 dark:text-txt-teal">
        00:00:00
      </span>
      <button
        className="range bg-accent w-[3px] h-[10px]"
        onClick={onStartButtonClick}
      />
      <input
        className="accent-h-[2px] cursor-pointer accent-accent flex-grow"
        type="range"
        ref={sliderRef}
        min="0"
        max="100"
        step="any"
      />
      <button
        className="bg-accent w-[3px] h-[10px]"
        onClick={onEndButtonClick}
      ></button>
      <span className="pl-[8px] pr-[20px] text-[8px] text-teal-700 dark:text-txt-teal">
        12:34:56
      </span>
    </div>
  );
};

export default Slider;
