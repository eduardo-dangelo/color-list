import React, { Component } from 'react'
import styled from 'styled-components'
import AddColorForm from './components/AddColorForm'
import ColorList from './components/ColorList'

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #f9fafb;
  //font-family: 'Open Sans Condensed', sans-serif;
  font-family: 'Roboto', sans-serif;
`;

const Box = styled.div`
  border: 1px solid lightgray;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0,0,0,0.1);
  overflow: hidden;
`;

const BoxHeader = styled.div`
  padding: 15px;
  border-bottom: 1px solid lightgray;
  background: #fcfcfc;
  display: flex;
  align-items: stretch;
`;

const BoxBody = styled.div`
  //padding: 15px;
`;

class App extends Component {
  render() {
    return (
      <PageWrapper>
        <Box>
          <BoxHeader>
            <AddColorForm/>
          </BoxHeader>
          <BoxBody>
            <ColorList/>
          </BoxBody>
        </Box>
      </PageWrapper>
    )
  }
}

export default App
