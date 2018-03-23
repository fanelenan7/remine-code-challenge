import React, { Component } from 'react';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './BuildingRange.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

class BuildingRange extends Component {
  onChangeComplete(e) {
    this.props.updateValue(e);
  }

  render() {
    return (
      <Range
        className="buildingrange"
        min={0}
        max={100}
        defaultValue={[0, 100]}
        tipFormatter={value => `${value}`}
        onAfterChange={e => this.onChangeComplete(e)}
      />
    )
  }
}

export default BuildingRange;
