import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Input } from '@material-ui/core';

const returnDatesAboveRange = (date, monthsAgo) => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  // creating date at the month level to keep comparison accurate (excluding day, time, etc.)
  const monthThreshold = new Date(currentYear, currentMonth);
  monthThreshold.setMonth(currentMonth - monthsAgo);
  const dateToCompare = new Date(date);
  return monthThreshold <= dateToCompare;
};

const DateRangeParams = ({ setFilterParamValue }) => {
  const [monthsAgo, setMonthsAgo] = useState('');

  useEffect(() => {
    if (monthsAgo !== '') {
      setFilterParamValue({
        key: 'date',
        testCondition: (date) => returnDatesAboveRange(date, monthsAgo)
      });
    } else {
      setFilterParamValue('');
    }
  }, [monthsAgo]);

  return (
    <React.Fragment>
      <FormControl>
        <InputLabel>From how many months back?</InputLabel>
        <Input
          type="number"
          value={monthsAgo}
          onChange={(e) => setMonthsAgo(e.target.value)}
        />
      </FormControl>
    </React.Fragment>
  );
};

export default DateRangeParams;
