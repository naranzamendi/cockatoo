import ReactDOM from 'react-dom'
import React from 'react'
import styled from 'styled-components'
import Header from 'header/Header.jsx'
import ProfilesView from 'profiles/ProfilesView.jsx'
import 'css/reset.css'

const App = () =>
  <MainCol>
    <Header/>
    <ProfilesView />
  </MainCol>

const MainCol = styled.div`
  display: flex;
  flex-direction: column;
`

class AppContainer extends React.Component {
  constructor(){
    super();
  }

  render() {
    return <App />
  }
}

ReactDOM.render(<AppContainer />,document.getElementById('root'));
