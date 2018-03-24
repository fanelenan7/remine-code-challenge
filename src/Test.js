import React, { Component } from 'react';

import RemineTable from './components/Table/RemineTable/RemineTable';
import BuildingTypes from './components/BuildingTypes';
import BuildingRange from './components/BuildingRange';
import api from './API';

import './Test.css';

class Test extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      buildingTypes: [],
      typeFilter: [],
      bedsFilter: [0, 100],
      bathsFilter: [0, 100]
    }
  }

  componentDidMount() {
    this.getLocations();
    this.getBuildingTypes();
  }


  getLocations() {
    api.getLocations().then((response) => {
      this.setState({
        locations: response.data
      })
    })
  }

  getBuildingTypes() {
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

  updateBedsRange(value) {
    this.setState({
      bedsFilter: value
    });
  }

  updateBathsRange(value) {
    this.setState({
      bathsFilter: value
    })
  }

  renderTable() {
    if (this.state.locations.length) {
      let data = this.state.locations;
      // go through the filters
      data = data.filter(location => {
        if (this.state.typeFilter.length) {
          if (!this.state.typeFilter.includes(location.buildingType.name)) {
            return false;
          }
        }

        if (location.beds < this.state.bedsFilter[0]) {
          return false;
        }

        if (location.beds > this.state.bedsFilter[1]) {
          return false;
        }

        if (location.baths < this.state.bathsFilter[0]) {
          return false;
        }

        if (location.baths > this.state.bathsFilter[1]) {
          return false;
        }

        return true;
      })

      return (
        <div className="test__table">
          <RemineTable properties={data} />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="testContainer">
        <section className="filters">
          <h3>Select Building Type</h3>
          <BuildingTypes
            buildingTypes={this.state.buildingTypes}
            onTypeSelect={e => this.handleTypeSelect(e)}
          />
          <div className="filters__ranges">
            <h3>Select Number of Bedrooms</h3>
            <BuildingRange key="bed__range" updateValue={(value) => this.updateBedsRange(value)} />
            <span>{this.state.bedsFilter[0]} - {this.state.bedsFilter[1]}</span>
            <h3>Select Number of Bathrooms</h3>
            <BuildingRange key="bath__range" updateValue={(value) => this.updateBathsRange(value)} />
            <span>{this.state.bathsFilter[0]} - {this.state.bathsFilter[1]}</span>
          </div>
        </section>
        { this.renderTable() }
      </div>
    );
  }
}

export default Test;
