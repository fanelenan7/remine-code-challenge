import React, { Component } from 'react';

import RemineTable from './components/Table/RemineTable/RemineTable';
import api from './API';
import BuildingTypes from './components/BuildingTypes';
import BuildingRange from './components/BuildingRange';

import './Test.css';

class Test extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      buildingTypes: [],
      typeFilter: [],
      bedsFilter: [0, 100],
      bathsFilter: [0, 100],
      filteredData: []
    }
  }

  componentWillMount() {
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
      }, () => this.updateLocation())
    } else {
      const newFilter = this.state.typeFilter.filter((type) => {
        return type !== e.target.value
      })
      this.setState({
        typeFilter: newFilter,
      }, () => this.updateLocation())
    }
  }

  // on any change to filters, check what changed and rerender with new parameters
  // save in it's own variable to protect the original data from mutating in case
  // we need to deselect.
  updateLocation() {
    const newLocations = this.state.locations.filter(location => {
      return this.state.typeFilter.includes(location.buildingType.name)
    })
    this.setState({
      filteredData: newLocations
    })
  }

  updateBedsRange(value) {
    this.setState({
      bedsFilter: value
    }, () => this.updateListBeds());
  }

  updateListBeds() {
    if (this.state.filteredData.length > 0) {
      let newRange = this.state.filteredData.filter(location => {
        return (location.beds >= this.state.bedsFilter[0] && location.beds <= this.state.bedsFilter[1]) ;
      })
      this.setState({
        filteredData: newRange
      })
    } else {
      let newRange = this.state.locations.filter(location => {
        return (location.beds >= this.state.bedsFilter[0] && location.beds <= this.state.bedsFilter[1]) ;
      })
      this.setState({
        filteredData: newRange
      })
    }
  }

  updateBathsRange(value) {
    this.setState({
      bathsFilter: value
    })
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
        { this.state.filteredData.length > 0 ?
          (<RemineTable properties={this.state.filteredData} />) :
          (<RemineTable properties={this.state.locations} />)
        }

      </div>
    );
  }
}

export default Test;
