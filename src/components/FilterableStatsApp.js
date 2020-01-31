import React, { useState, useEffect } from 'react';
import Filters from './Filters';
import PlayerStatsTable from './PlayerStatsTable';

function FilterableStatsApp() {
  const [stats, setStats] = useState([]);
  const [numShow, setNumShow] = useState(100);
  const [headers, setHeaders] = useState({
    name: true,
    period: true,
    mins: true,
    fg_per: true,
    ft_per: true,
    rebs: true,
    asts: true,
    stls: true,
    blks: true,
    tos: true,
    pts: true,
    zscore: true
  });

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching data...');
      const fetchURL =
        'https://raw.githubusercontent.com/E-Feng/JSONStorage/master/all_stats.json';
      const res = await fetch(fetchURL);
      const data = await res.json();
      const stats = JSON.parse(data);
      stats.forEach(stat => (stat.visible = true));

      // Initial sort by zscore, descending
      stats.sort((a, b) => (a.zscore > b.zscore ? -1 : 1));

      setStats(stats);
    };

    fetchData();
  }, []);

  const filterName = filterText => {
    filterText = filterText.toLowerCase();

    setStats(
      stats.map(stat => {
        const full_name = `${stat.first_name} ${stat.last_name}`.toLowerCase();
        const containsText = full_name.search(filterText) !== -1;
        stat.visible = containsText ? true : false;

        return stat;
      })
    );
  };

  const filterPeriod = (filterVal, isChecked) => {
    setStats(
      stats.map(stat => {
        if (stat.period === filterVal) {
          stat.visible = isChecked ? true : false;
        }

        return stat;
      })
    );
  };

  const filterFA = (isChecked) => {
    setStats(
      stats.map(stat => {
        if (isChecked) {
          stat.visible = stat.team_id === null ? true : false;
        } else {
          stat.visible = true;
        }

        return stat;
      })
    )
  }

  return (
    <div style={bodyStyle}>
      <div style={appStyle}>
        <Filters
          filterName={filterName}
          filterPeriod={filterPeriod}
          filterFA={filterFA}
        />
        <PlayerStatsTable stats={stats} numShow={numShow} headers={headers} />
      </div>
    </div>
  );
}

const bodyStyle = {
  background: '#f4f4f4'
};

const appStyle = {
  width: '80%',
  margin: 'auto',
  padding: '10px 0'
};

export default FilterableStatsApp;
