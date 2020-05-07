import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ item }) => {
    return (
        <h1 className="display-4">{item.name}</h1>
    )
}

Item.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string
    })
};

export default Item