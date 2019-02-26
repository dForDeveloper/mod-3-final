import React, { Component } from 'react';
import './PresidentsContainer.css';
import { PresidentCard } from '../PresidentCard/PresidentCard';

export class PresidentsContainer extends Component {
  render() {
    const { presidents } = this.props;
    return(
      <section>
        {
          presidents.map(president => {
            return <PresidentCard key={president.number} {...president} />
          })
        }
      </section>
    );
  }
}