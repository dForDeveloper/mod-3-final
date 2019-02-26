import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setIsLoading, setHasErrored, setPresidents } from '../../actions';
import { PresidentsContainer } from '../../components/PresidentsContainer/PresidentsContainer';

export class App extends Component {
  componentDidMount() {
    this.fetchPresidents();
  }

  fetchPresidents = async () => {
    const { setIsLoading, setHasErrored, setPresidents } = this.props;
    setIsLoading(true);
    const url = 'http://localhost:3001/api/v1/presidents';
    const response = await fetch(url);
    if (!response.ok) {
      setHasErrored(response.statusText);
    } else {
      const presidents = await response.json();
      setPresidents(presidents);
    }
    setIsLoading(false);
  }

  render() {
    const { isLoading, hasErrored, presidents } = this.props;
    return (
      <div className="App">
        <h1>Presidents and Assholes</h1>
        {isLoading && <h2>Loading...</h2>}
        {hasErrored && <h2>{hasErrored}</h2>}
        <PresidentsContainer presidents={presidents} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  hasErrored: state.hasErrored,
  presidents: state.presidents
});

export const mapDispatchToProps = (dispatch) => ({
  setIsLoading: (bool) => dispatch(setIsLoading(bool)),
  setHasErrored: (message) => dispatch(setHasErrored(message)),
  setPresidents: (presidents) => dispatch(setPresidents(presidents))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
