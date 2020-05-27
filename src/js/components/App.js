import React from 'react'
import NavBar from './NavBar'
import PageBody from './PageBody'

const App = () => {

  // Set state as the most top level component. This needs to be altered to be an API call
  // const [items, setItems] = React.useState([
  const items = React.useState([
    {
      name: "Item One",
      image: "https://news.artnet.com/app/news-upload/2019/12/5db820a075ba3.jpg"
    },
    {
      name: "Item Two",
      image: "https://news.artnet.com/app/news-upload/2019/12/5db820a075ba3.jpg"
    }
  ])[0];

  // Need to use axios and setItems to set the items in the array

  return (
    <div className="content">
      <NavBar />
      <PageBody items={items} />
    </div>
  )
}

export default App
