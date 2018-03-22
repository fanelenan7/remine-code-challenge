import React, { Component } from 'react';

import api from './API';
import BuildingTypes from './components/BuildingTypes';

class Filters extends Component {
  constructor() {
    super();
    this.state = {
      buildingTypes: [],
      typeFilter: [],
      MinBedsFilter: 0,
      MaxBedsFilter: 10,
      MinBathsFilter: 0,
      MaxBathsFilter: 10,
    };
  }

  componentWillMount() {
    api.getBuildingTypes().then((response) => {
      response.data.map((type) => {
        type.displayName = type.name.charAt(0).toUpperCase() + type.name.slice(1);
        type.displayName = type.displayName.replace(/([A-Z])/g, ' $1').trim();
      })
      this.setState({
        buildingTypes: response.data
      })
    })
  }

  handleTypeSelect(e) {
    if (!this.state.typeFilter.includes(e.target.value)) {
      this.setState({
        typeFilter: [...this.state.typeFilter, e.target.value]
      })
    } else {
      const newFilter = this.state.typeFilter.filter((type) => {
        return type !== e.target.value
      })
      this.setState({
        typeFilter: newFilter,
      })
    }
  }

  render() {

    return (
      <div className="filters">
        <div className="filters__type">
          <h3>Select Building Type</h3>
          <BuildingTypes
            buildingTypes={this.state.buildingTypes}
            onTypeSelect={e => this.handleTypeSelect(e)}
          />
        </div>
      </div>
    );
  }
}

export default Filters;
