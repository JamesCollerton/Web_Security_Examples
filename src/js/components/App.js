import React, { Component } from 'react'
import NavBar from './NavBar'
import PageBody from './PageBody'
import { getItems } from '../requests/ItemRequests'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  getItemsFunction(appObject) {
    getItems()
      .then(function (response) {
        // handle success
        appObject.setState({
          items: response.data.items,
          isLoaded: true
        })
      })
      // .catch(function (error) {
      //   // handle error
      // })
      // .then(function () {
      //   // always executed
      // });
  }

  componentDidMount() {
    this.getItemsFunction(this)
  }

  /*
    I think the way this works is that if I change the state of the program then this 
    will filter the whole way down via the props.
    
    Set state as the most top level component. This needs to be altered to be an API call
    const [items, setItems] = React.useState([
  */
  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="content">
          <NavBar />
          <PageBody items={this.state.items} />
        </div>
      )
    }
  }
}

export default App
