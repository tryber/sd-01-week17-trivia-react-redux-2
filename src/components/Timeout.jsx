import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 30,
      getCurrentTime: 0,
      isPaused: true,
    };
    this.timer = this.timer.bind(this);
    this.getTimeOut = this.getTimeOut.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getTimeOut() {
    this.setState({
      isPaused: false,
      getCurrentTime: this.state.currentCount,
    });
  }

  timer() {
    if (this.state.isPaused) {
      this.setState({
        currentCount: this.state.currentCount - 1,
      });
    }
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.currentCount}</p>
        <button button="button" onClick={() => this.getTimeOut()}>Get Time</button>
      </div>
    );
  }
}

export default Clock;
