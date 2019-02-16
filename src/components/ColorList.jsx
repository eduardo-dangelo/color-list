import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
  justify-content: flex-start;
`;

const ColorRow = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.2rem;
  padding: 15px;
  border-bottom: 1px solid lightgray;
  color: #696969;
  
  &:hover {
    background: #f9f9f9;
  }
`;

const DisplayColor = styled.div`
  width: 20px;
  height: 20px;
  box-shadow: inset 0 1px 4px rgba(0,0,0,0.2);
  border: 1px solid #868686;
  border-radius: 4px;
  margin-right: 15px;
  background: ${({ color }) => color ? color : 'transparent'};
`;

class ColorList extends React.PureComponent {
  render() {
    const { store } = this.props
    const colors = store.colors

    return (
      <ListContainer>
        {colors.map((color, key) => {
          if (key < colors.length - 5) {
            return null
          }

          return (
            <ColorRow key={key}>
              <DisplayColor color={color}/>
              {color}
            </ColorRow>
          )
        })}
      </ListContainer>
    )
  }
}

export default connect(
  (state) => ({
    store: state.store
  })
)(ColorList)
