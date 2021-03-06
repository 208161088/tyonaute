import React from 'react'
import PropTypes from 'prop-types'

class Toggleable extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        visible: false
      }
    }
  
    toggleVisibility = () => {
      this.setState({visible: !this.state.visible})
      if (this.props.changeAppState) {
        this.props.changeAppState('address', this.props.user.address)
      }
    }
    
    render() {
      const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
      const showWhenVisible = { display: this.state.visible ? '' : 'none' }
  
      return (
        <div>
          <div style={hideWhenVisible}>
            <button onClick={this.toggleVisibility}>{this.props.buttonLabel}</button>
          </div>
          <div className='toggleable' style={showWhenVisible}>
            {this.props.children}
            <button onClick={this.toggleVisibility}>peruuta</button>
          </div>
        </div>
      )
    }
  }
  
Toggleable.propTypes = {
    buttonLabel: PropTypes.string.isRequired
}

export default Toggleable