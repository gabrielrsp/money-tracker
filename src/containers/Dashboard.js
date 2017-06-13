import React from 'react'
import Header from '../components/Header/index'
import { Icon, Segment } from 'semantic-ui-react'

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Header label="Dashboard" />
        <Segment basic padded textAlign="center">
          <Icon name="hourglass half" size="massive"/>
          <h3>Work in progress</h3>
        </Segment>
      </div>
    )
  }
}

export default Dashboard