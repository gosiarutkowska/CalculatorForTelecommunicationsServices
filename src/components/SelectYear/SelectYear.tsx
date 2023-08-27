import React from 'react';
import './SelectYear.css';
interface Props {
    selectedYear: string;
    handleYearChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    years: string[];
}

const SelectYear: React.FC<Props> = ({ selectedYear, handleYearChange, years }) => (
    <div className="select-year-wrapper">
        <label>
            Wybierz rok usług
            <select value={selectedYear} onChange={handleYearChange}>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </label>
    </div>
);

export default SelectYear;
