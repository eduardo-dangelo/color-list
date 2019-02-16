import React from 'react'
import { bindActionCreators } from 'redux'
import { actions } from '../redux/ColorReducer'
import { connect } from 'react-redux'

class AddColorForm extends React.Component {
  state = {
    color: ''
  }

  handleChange(event) {
    this.setState({ color: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { actions } = this.props

    actions.addColor(this.state.color)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          value={this.state.color}
          onChange={this.handleChange.bind(this)}
        />
        <button>Add</button>
      </form>
    )
  }
}

export default connect(
  null,
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(AddColorForm)