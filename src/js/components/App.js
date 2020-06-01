import React from 'react'
import NavBar from './NavBar'
import PageBody from './PageBody'
import {getItems} from '../requests/ItemRequests'

const App = () => {

  const requestItems = getItems()

  // Set state as the most top level component. This needs to be altered to be an API call
  // const [items, setItems] = React.useState([
  const items = React.useState(requestItems)[0];

  return (
    <div className="content">
      <NavBar />
      <PageBody items={items} />
    </div>
  )
}

export default App
