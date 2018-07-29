import React from 'react';
import ReactDOM from 'react-dom';
import TimePicker from 'react-times';
import axios from 'axios';
import './index.css';
import 'react-times/css/material/default.css'

// This is a ReactJS form to collect time information

class TimePickerWrapper extends React.Component {
  constructor(props) {
    super(props);
    const {meridiem, focused, showTimezone, timezone } = props;
    let hour = '';
    let minute = '';

    this.state = {
      hour,
      minute,
      meridiem,
      focused,
      timezone,
      showTimezone,
    };

    this.onFocusChange = this.onFocusChange.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
    //this.handleFocusedChange = this.handleFocusedChange.bind(this);
  }

  onTimeChange(options) {
    const {
      hour,
      minute,
      meridiem
    } = options;

    this.setState({ hour, minute, meridiem });
  }

  onFocusChange(focused) {
    console.log(`onFocusChange: ${focused}`);
    this.setState({ focused });
    if (!focused) {
    	axios.get('https://api.github.com/users/ongzexuan')
    		.then(response => console.log(response))
    }
  }

  render() {
    const {
      hour,
      minute,
      meridiem,
      timezone,
      showTimezone,
    } = this.state;

    return (
      <div className="time_picker_wrapper">
        <TimePicker
          //trigger={this.trigger}
          {...this.props}
          focused
          meridiem={meridiem}
          timezone={timezone}
          onFocusChange={this.onFocusChange}
          onTimeChange={this.onTimeChange}
          showTimezone={showTimezone}
          time={hour && minute ? `${hour}:${minute}` : null}
        />
      </div>
    );
  }
}

TimePickerWrapper.defaultProps = {
  customTriggerId: null,
  focused: false,
  meridiem: null,
  showTimezone: false
};

// ========================================

ReactDOM.render(
  <TimePickerWrapper />,
  document.getElementById('root')
);
