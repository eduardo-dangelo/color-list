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
`;

const Box = styled.div`
  border: 1px solid;
  border-radius: 4px;
  background: white;
  box-shadow: 0 2px 2px rgba(0,0,0,0.1);
`;

const BoxHeader = styled.div`
  padding: 15px;
  border-bottom: 1px solid;
`;

const BoxBody = styled.div`
  padding: 15px;
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
