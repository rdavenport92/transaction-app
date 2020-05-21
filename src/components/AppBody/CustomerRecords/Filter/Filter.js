import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles
} from '@material-ui/core';

import DateRangeParams from './DateRangeParams/DateRangeParams';

const useStyles = makeStyles(() => ({
  filterWrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '15px',
    justifyContent: 'space-between'
  }
}));

const filterByOptions = [
  { label: 'Date Range' },
  { label: 'Cost Threshold' },
  { label: 'Points Threshold' }
];

const renderFilterParams = (
  filterByValue,
  filterByOptions,
  setFilterParamValue
) => {
  switch (filterByOptions[filterByValue].label) {
    case 'Date Range':
      return <DateRangeParams setFilterParamValue={setFilterParamValue} />;
    default:
      break;
  }
};

const Filter = ({ setFilterParamValue }) => {
  const classes = useStyles();

  const [filterByValue, setFilterByValue] = useState(0);

  return (
    <div className={classes.filterWrapper}>
      <FormControl>
        <InputLabel>Filter By</InputLabel>
        <Select
          value={filterByValue}
          onChange={(e) => setFilterByValue(e.target.value)}
        >
          {filterByOptions.map((option, index) => (
            <MenuItem value={index} key={`option-${index + 1}`}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {renderFilterParams(filterByValue, filterByOptions, setFilterParamValue)}
    </div>
  );
};

export default Filter;
