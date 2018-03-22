import React, { Component } from 'react';

export default class BuildingTypes extends Component {
  render() {
    const buildingTypes = this.props.buildingTypes.map((buildtype, key) => {
      return (
        <label>
          <input
            type="checkbox"
            className="buildtypes__button"
            onClick={e => this.props.onTypeSelect(e)}
            key={key}
            value={buildtype.name}
          />
          {buildtype.displayName}
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
