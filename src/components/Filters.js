import React, { useReducer } from 'react';
import FilterCheckbox from './layout/FilterCheckbox';

import styled from 'styled-components';

const Filters = props => {
  const [filterInput, setFilterInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {},
    init
  );

  React.useEffect(() => {
    const filterStats = stats => {
      console.log('Filtering...');
      const newStats = stats.map(stat => {
        const { name, period, freeAgent } = filterInput;
        const full_name = `${stat.first_name} ${stat.last_name}`.toLowerCase();

        // Name Filter
        const cond1 = full_name.search(name[1]) !== -1;

        // Period Filter
        let cond2 = true;
        if (period[1] === stat.period) {
          cond2 = period[0];
          stat.periodVis = period[0];
        }

        // Free Agent Filter
        let cond3 = false;
        if (stat.periodVis) {
          if (freeAgent[0]) {
            cond3 = !stat.team_id;
          } else {
            cond3 = stat.periodVis;
          }
        } 
        stat.visible = cond1 && cond2 && cond3;

        return stat;
      });
      props.setStats(newStats);
    };

    const { stats } = props;
    filterStats(stats);
  }, [filterInput]);

  function init() {
    return {
      name: [false, ''],
      period: [false, ''],
      freeAgent: [false, '']
    };
  }

  const handleInputChange = e => {
    const { name, value, checked } = e.target;
    setFilterInput({ [name]: [checked, value] });
  };

  return (
    <FilterStyle>
      <h2>Filters</h2>
      <FilterForm>
        <input
          type='text'
          placeholder='Player Name'
          name='name'
          onChange={handleInputChange}
        />
        <br></br>
        <FilterCheckbox
          label={'Season'}
          name={'period'}
          value={'002020'}
          checked={true}
          onChange={handleInputChange}
        />
        <FilterCheckbox
          label={'Last 7'}
          name={'period'}
          value={'012020'}
          checked={true}
          onChange={handleInputChange}
        />
        <FilterCheckbox
          label={'Last 15'}
          name={'period'}
          value={'022020'}
          checked={true}
          onChange={handleInputChange}
        />
        <FilterCheckbox
          label={'Last 30'}
          name={'period'}
          value={'032020'}
          checked={true}
          onChange={handleInputChange}
        />
        <br></br>
        <FilterCheckbox
          label={'Free Agents Only'}
          name={'freeAgent'}
          value={'fa'}
          checked={false}
          onChange={handleInputChange}
        />
      </FilterForm>
    </FilterStyle>
  );
};

const FilterStyle = styled.div`
  margin: 0 10px 20px 10px;
`;

const FilterForm = styled.form`
  PeriodCheckbox {
    border: 1px black solid;
  }
`;

export default Filters;
