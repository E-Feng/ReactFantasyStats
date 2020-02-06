import React, { useState, useEffect } from 'react';
import Filters from './Filters';
import PlayerStatsTable from './PlayerStatsTable';

import styled from 'styled-components';

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
      stats.forEach(stat => {
        stat.visible = true; 
        stat.periodVis = true;
      });

      // Initial sort by zscore, descending
      stats.sort((a, b) => (a.zscore > b.zscore ? -1 : 1));

      setStats(stats);
    };

    fetchData();
  }, []);

  return (
    <div style={bodyStyle}>
      <AppStyle>
        <Filters stats={stats} setStats={setStats} />
        <PlayerStatsTable stats={stats} numShow={numShow} headers={headers} />
      </AppStyle>
    </div>
  );
}

const bodyStyle = {
  background: '#f4f4f4'
};

const AppStyle = styled.div`
  width: 80%;
  margin: auto;
  padding: 10px 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default FilterableStatsApp;
