import React, { Component } from 'react';
import './PresidentsContainer.css';
import { PresidentCard } from '../PresidentCard/PresidentCard';

export class PresidentsContainer extends Component {
  constructor() {
    super();
    this.state = { 
      partyFilter: 'All'
    }
  }

  handleChange = (event) => {
    this.setState({ partyFilter: event.target.value });
  }

  getPresidentsToDisplay = () => {
    const { presidents } = this.props;
    const { partyFilter } = this.state;
    if (partyFilter === 'All') {
      return presidents.map(president => {
        return <PresidentCard key={president.number} {...president} />
      });
    }
    return presidents.filter(president => president.party === partyFilter)
      .map(president => {
        return <PresidentCard key={president.number} {...president} />
      });
  }

  render() {
    const { partyFilter } = this.state;
    return(
      <section>
        <select onChange={this.handleChange} value={partyFilter}>
          <option value="All">All</option>
          <option value="No Party">No Party</option>
          <option value="Federalist">Federalist</option>
          <option value="Democratic-Republican">Democratic-Republican</option>
          <option value="Whig">Whig</option>
          <option value="Democratic">Democratic</option>
          <option value="Republican">Republican</option>
        </select>
        {this.getPresidentsToDisplay()}
      </section>
    );
  }
}