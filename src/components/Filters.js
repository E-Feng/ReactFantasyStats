import React from 'react';
import FilterCheckbox from './layout/FilterCheckbox';

import styled from 'styled-components';

function Filters(props) {
  const handleInputChange = e => {
    switch (e.target.name) {
      case 'nameFilter':
        props.filterName(e.target.value);
        break;
      case 'periodFilter':
        props.filterPeriod(e.target.value, e.target.checked);
        break;
      case 'faFilter':
        props.filterFA(e.target.checked);
        break;
      default:
        break;
    }
  };

  return (
    <div style={filterStyle}>
      <h2>Filters</h2>
      <FilterForm>
        <input
          type='text'
          placeholder='Player Name'
          name='nameFilter'
          onChange={handleInputChange}
        />
        <br></br>
        <FilterCheckbox
          label={'Season'}
          name={'periodFilter'}
          value={'002020'}
          checked={true}
          onChange={handleInputChange}
        />
        <FilterCheckbox
          label={'Last 7'}
          name={'periodFilter'}
          value={'012020'}
          checked={true}
          onChange={handleInputChange}
        />
        <FilterCheckbox
          label={'Last 15'}
          name={'periodFilter'}
          value={'022020'}
          checked={true}
          onChange={handleInputChange}
        />
        <FilterCheckbox
          label={'Last 30'}
          name={'periodFilter'}
          value={'032020'}
          checked={true}
          onChange={handleInputChange}
        />
        <br></br>
        <FilterCheckbox
          label={'Free Agents Only'}
          name={'faFilter'}
          value={'fa'}
          checked={false}
          onChange={handleInputChange}
        />
      </FilterForm>
    </div>
  );
}

const filterStyle = {
  marginBottom: '20px'
};

const FilterForm = styled.form`
  PeriodCheckbox {
    border: 1px black solid;
  }
`;

export default Filters;
