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
    }, 1000)
  }

  render() {
    return <div id="call-window" allow="microphone" ref={this.callRef} />
  }
}

const mapState = null
const mapDispatch = dispatch => ({
  loadInitialData(element) {
    console.log('ele', element.current)
    dispatch(initCCP(element.current))
  },
})

export default connect(mapState, mapDispatch)(CallWindow)
