import React from 'react'
import NavBar from './NavBar'
import PageBody from './PageBody'
import {getItems} from '../requests/ItemRequests'

const App = () => {

  // console.log("Hello")

  const requestItems = getItems()

  /*
    I think the way this works is that if I change the state of the program then this 
    will filter the whole way down via the props.
    
    Set state as the most top level component. This needs to be altered to be an API call
    const [items, setItems] = React.useState([
  */
  const items = React.useState(requestItems)[0];

  return (
    <div className="content">
      <p>API {process.env.GET_ITEMS_ENDPOINT}</p>
      <NavBar />
      <PageBody items={items} />
    </div>
  )
}

export default App
