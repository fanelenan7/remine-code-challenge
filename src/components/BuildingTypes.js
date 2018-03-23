import React, { Component } from 'react';

import './BuildingTypes.css';

export default class BuildingTypes extends Component {
  render() {
    const buildingTypes = this.props.buildingTypes.map((buildtype, key) => {
      return (
        <label
          htmlFor={`building-type-${buildtype.name}`}
          className="buildtypes__label"
          key={`building-type-${key}`}
        >
          <input
            type="checkbox"
            className="buildtypes__checkbox"
            onClick={e => this.props.onTypeSelect(e)}
            value={buildtype.name}
            id={`building-type-${buildtype.name}`}
          />
          <span className="buldtypes__customcheckbox"></span>
          <span>{buildtype.displayName}</span>
        </label>
      )
    })
    return (
      <section className="buildtypes">
        {buildingTypes}
      </section>
    );
  }
}
