import React from 'react';
import Stat from './Stat';
import * as Constants from '../constants/constants';

import styled from 'styled-components';

function PlayerStatsTable(props) {
  const createHeaders = () => {
    const tableHead = [];

    for (let [header, value] of Object.entries(props.headers)) {
      if (value) {
        tableHead.push(<th key={header}>{Constants.HEADERS[header]}</th>);
      }
    }

    return tableHead;
  };

  const createTable = () => {
    const { headers, numShow, stats } = props;
    let table = [];

    const vis_stats = stats.filter(stat => stat.visible);

    vis_stats.slice(0, numShow).forEach(stat => {
      table.push(<Stat key={stat.id} stat={stat} headers={headers} />);
    });

    return table;
  };

  return (
    <Table>
      <thead>
        <tr>{createHeaders()}</tr>
      </thead>
      <tbody>{createTable()}</tbody>
    </Table>
  );
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    border-bottom: black 2px solid;
    background: #fdb927;
  }

  tr {
    border: black 1px solid;
    :nth-child(even) {
      background: #e0dfdf;
    }
    :hover {
      background: #aaa;
    }
  }

  td,
  th {
    text-align: right;
    padding: 2px 4px;
    :first-child {
      text-align: left;
    }
  }
`;

export default PlayerStatsTable;
