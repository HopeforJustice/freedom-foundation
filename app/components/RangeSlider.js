export default function RangeSlider({ handleSliderChange, initialNotch }) {
	return (
		<>
			<div className="relative w-full">
				<div className="absolute top-0 left-0 w-full h-full flex justify-between">
					{[...Array(6)].map((_, index) => (
						<span
							key={index}
							className="block w-[3px] h-[30px] bg-gray-300"
						></span>
					))}
				</div>
				<input
					type="range"
					min="1"
					max="6"
					defaultValue={initialNotch}
					onChange={(e) => handleSliderChange(Number(e.target.value))}
					step="1"
					className="relative w-full appearance-none outline-none focus:outline-none
            [&::-webkit-slider-runnable-track]:w-full [&::-webkit-slider-runnable-track]:h-[3px] [&::-webkit-slider-runnable-track]:bg-gray-300 [&::-webkit-slider-runnable-track]:rounded-md
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[30px] [&::-webkit-slider-thumb]:h-[40px] [&::-webkit-slider-thumb]:bg-[#d21220] [&::-webkit-slider-thumb]:rounded-lg [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:ease-in-out [&::-webkit-slider-thumb]:mt-[-18px] [&::-webkit-slider-thumb]:scale-110 hover:[&::-webkit-slider-thumb]:scale-125
            [&::-moz-range-track]:w-full [&::-moz-range-track]:outline-none
            [&::-moz-range-thumb]:w-[30px] [&::-moz-range-thumb]:h-[40px] [&::-moz-range-thumb]:mt-[-18px] [&::-moz-range-thumb]:bg-[#d21220] [&::-moz-range-thumb]:rounded-lg [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:transition-transform [&::-moz-range-thumb]:duration-200 [&::-moz-range-thumb]:ease-in-out hover:[&::-moz-range-thumb]:scale-125"
				/>
			</div>
		</>
	);
}
