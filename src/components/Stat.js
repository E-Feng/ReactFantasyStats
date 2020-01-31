import React from 'react';
import * as Constants from '../constants/constants';

function Stat(props) {
  const createRow = () => {
    const { stat } = props;
    let row = [];

    stat.name = `${stat.first_name} ${stat.last_name}`;

    for (let [header, value] of Object.entries(props.headers)) {
      if (value) {
        let val = stat[header];

        // Formatting table
        if (header.includes('_per')) {
          val = stat[header].toFixed(3);
        } else if (header === 'period') {
          val = Constants.PER_KEY[val];
        } else if (typeof(stat[header]) === 'number') {
          val = stat[header].toFixed(1);
        }
        row.push(<td key={header}>{val}</td>);
      }
    }

    return row;
  };

    if (props.stat.visible) {
      return <tr>{createRow()}</tr>;
    } else {
      return (null);
    }
}

export default Stat;
