import React from 'react';

import styled from 'styled-components';

function FilterCheckbox(props) {
  return (
    <React.Fragment>
      <label>{props.label}</label>
      <PeriodInput
        type='checkbox'
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        defaultChecked={props.checked}
      />
    </React.Fragment>
  );
}

const PeriodInput = styled.input`
  margin: 0 15px 0 4px;
`;

export default FilterCheckbox;
