import React from 'react'
import { connect } from 'react-redux'

class ColorList extends React.Component {
  render() {
    const { store } = this.props
    const colors = store.colors

    return (
      <div>
        {colors.map((color, key) => {
          return (
            <div key={key}>
              {color}
            </div>
          )
        })}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    store: state.store
  })
)(ColorList)
