import React from 'react'
import { bindActionCreators } from 'redux'
import { actions } from '../redux/ColorReducer'
import { connect } from 'react-redux'
import MaskedInput from 'react-text-mask'
import styled from 'styled-components'

const Input = styled(MaskedInput)`
  border-radius: 4px 0 0 4px;
  border: 1px solid #868686;
  border-right: none;
  padding: 5px;
  box-shadow: inset 0 0 3px rgba(0,0,0,0.2);
  background: #f8f9fa;
  height: 40px;
  box-sizing: border-box;
`;


const Button = styled.button`
  padding: 5px 15px;
  height: 40px;
  border: 1px solid #868686;
  cursor: pointer;
  background: #2dc86e;
  color: white;
  font-weight: bold;
  border-radius: 0 4px 4px 0;
  transition: .1s ease;
  
  &:hover {
    box-shadow: inset 0 1px 6px rgba(0,0,0,0.2);
  }
`;

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
    this.setState({ color: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <Input
          type="text"
          value={this.state.color}
          guide={false}
          mask={['#', /[0-9A-Fa-f]/, /[0-9A-Fa-f]/, /[0-9A-Fa-f]/, /[0-9A-Fa-f]/, /[0-9A-Fa-f]/, /[0-9A-Fa-f]/]}
          onChange={this.handleChange.bind(this)}
        />
        <Button>Add</Button>
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