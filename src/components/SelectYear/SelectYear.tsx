import React from 'react';

interface Props {
    selectedYear: string;
    handleYearChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    years: string[];
}

const SelectYear: React.FC<Props> = ({ selectedYear, handleYearChange, years }) => (
    <label>
        Select Year:
        <select value={selectedYear} onChange={handleYearChange}>
            {years.map((year) => (
                <option key={year} value={year}>
                    {year}
                </option>
            ))}
        </select>
    </label>
);

export default SelectYear;
