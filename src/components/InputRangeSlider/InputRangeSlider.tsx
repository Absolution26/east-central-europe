import React from "react";

interface Props {
  year: string;
  changeYear: (str: string) => void;
}

export const InputRangeSlider: React.FC<Props> = ({ year, changeYear }) => {
  return (
    <div className="range">
      <p className="range__value">{year || "Оберіть рік"}</p>

      <input
        list="range__input__id"
        type="range"
        className="range__slider"
        step="1"
        min="1750"
        max="1800"
        onChange={event => changeYear(event.target.value)}
      />
    </div>
  )
}
