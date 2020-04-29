import React from 'react'
import getItems from '../requests/ItemRequests'

const ItemContainer = () => { 

    // Make call to the server item endpoint
    console.log(getItems())

    // Populate panels from the call
}

export default ItemContainer