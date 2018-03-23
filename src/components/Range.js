import React, { Component } from 'react';
import Slider from 'react-rangeslider';

import 'react-rangeslider/lib/index.css';
import './Range.css';

class Range extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 3
    }
  }

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };

  render () {
    const { value } = this.state
    return (
      <div className='slider'>
        <Slider
          min={0}
          max={100}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className='value'>{value}</div>
      </div>
    )
  }
}

export default Range;
