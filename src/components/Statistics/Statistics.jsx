import React from 'react';
import './Statistics.css';
import PropTypes from 'prop-types';

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export const Statistics = props => {
  return (
    <section className="statistics">
      <h2 className="title">{props.title ? props.title : 'Statistics'}</h2>
      <ul className="stat-list">
        {props.stats.map(statsItem => (
          <li
            className="stat-item"
            key={statsItem.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className="label">{statsItem.label}</span>
            <span className="percentage">{statsItem.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
