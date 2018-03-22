import React, { Component } from 'react';
import RemineTable from './components/Table/RemineTable/RemineTable';
import Filters from './Filters';
import api from './API';

class Test extends Component {
  constructor() {
    super();
    this.state = {
      locations: []
    }
  }

  componentWillMount() {
    api.getLocations().then((response) => {
      this.setState({
        locations: response.data
      })
    })
  }

  render() {
    return (
      <div className="testContainer">
        <div className="filterContainer">
          <Filters />
        </div>
        <RemineTable properties={this.state.locations} />
      </div>
    );
  }
}

export default Test;
