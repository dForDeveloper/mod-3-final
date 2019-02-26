import React from 'react';
import './PresidentCard.css';

export const PresidentCard = (props) => {
  const { birth_year, death_year, left_office, number, party, president, took_office } = props;
  return(
    <article className="PresidentCard">
      <h3>#{number}: {president}</h3>
      <ul className="card-ul">
        <li>Party: {party}</li>
        <li>Born: {birth_year}</li>
        <li>Died: {death_year}</li>
        <li>Took Office: {took_office}</li>
        <li>Left Office: {left_office}</li>
      </ul>
    </article>
  )
}