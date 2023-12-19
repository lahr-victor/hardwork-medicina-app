'use client';

import { useState } from 'react';

export default function Slider({ title, min, max }) {
  const [value, setValue] = useState(min);

  return (
    <section className="flex flex-col w-full gap-4 p-4 text-black rounded-md shadow-md shadow-neutral-500 bg-neutral-300">
      <h3 className="text-2xl font-extrabold">{title}</h3>
      <div className="flex flex-row items-center justify-center gap-4">
        <input
          id="range"
          type="range"
          min={min}
          max={max}
          step="10"
          value={value}
          onChange={(event) => { setValue(event.target.value); }}
          className="
            w-full 
            h-3 
            border-2 
            border-solid 
            rounded-md 
            appearance-none 
            cursor-pointer 
            focus:outline-none
            border-neutral-600 
            bg-neutral-400 
            
            [&::-webkit-slider-thumb]:w-[3rem] 
            [&::-webkit-slider-thumb]:h-[2rem] 
            [&::-webkit-slider-thumb]:border-2 
            [&::-webkit-slider-thumb]:border-solid
            [&::-webkit-slider-thumb]:rounded-full 
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:border-black
            [&::-webkit-slider-thumb]:bg-neutral-100
            
            [&::-moz-range-thumb]:w-[3rem] 
            [&::-moz-range-thumb]:h-[2rem] 
            [&::-moz-range-thumb]:border-2 
            [&::-moz-range-thumb]:border-solid
            [&::-moz-range-thumb]:rounded-full 
            [&::-moz-range-thumb]:appearance-none 
            [&::-moz-range-thumb]:border-black
            [&::-moz-range-thumb]:bg-neutral-100
          "
        />
        <div className="flex justify-center w-20 py-1 text-xl font-extrabold text-white border-2 border-black border-solid rounded-md bg-gradient-to-b from-green-600 to-green-400">
          {value}
        </div>
      </div>
    </section>
  );
}
