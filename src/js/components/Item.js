import React from 'react'

const Item = ({ item }) => {
    return (
        <h1 className="display-4">{item.name}</h1>
    )
}

export default Item