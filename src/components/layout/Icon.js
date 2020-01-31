import React from 'react';

function Icon(props) {
  return (
    <li style={socialStyle}>
      <a href={props.url}>
        <i style={iconStyle} className={props.type}></i>
      </a>
    </li>
  );
}

const socialStyle = {
  display: 'inline',
  padding: '0 10px',
  fontSize: '30px',
  marginTop: '30px'
};

const iconStyle = {
  color: '#ffffff'
};

export default Icon;