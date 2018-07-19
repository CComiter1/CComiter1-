import React from 'react'
import { connect } from 'react-redux'

import { initCCP } from '../../store'

class CallWindow extends React.Component {
  constructor() {
    super()
    this.callRef = React.createRef()
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.loadInitialData(this.callRef)
    }, 0)
  }

  render() {
    return (
      <div
        id="call-window"
        allow="microphone"
        ref={this.callRef}
        style={{ 
          backgroundColor: '#0099cc',
          height: '465px',
          width: '320px',
          minWidth: '320px',
          margin: '0 5px',
        }}
      />
    )
  }
}

const mapState = null
const mapDispatch = dispatch => ({
  loadInitialData(element) {
    dispatch(initCCP(element.current))
  },
})

export default connect(mapState, mapDispatch)(CallWindow)
