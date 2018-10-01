import React, { Component } from 'react'

class Alert extends Component {
  render() {
    return (
      <div className='alert'>
        {this.props.message}
      </div>
    )
  }
}

Alert.defaultProps = {
  message: 'Not found. Let\'s try someone else? :)'
}

export default Alert
