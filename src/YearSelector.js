import React from 'react';

const YearSelector = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 1800;
    const years = [];

    for (let year = startYear; year <= currentYear; year++) {
        years.push(year);
    }

    return (
        <form>
            <label htmlFor="year">Select Year:</label>
            <select id="year" name="year">
                {years.map(year => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </form>
    );
};

export default YearSelector;
