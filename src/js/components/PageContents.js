import React from 'react'
import Item from './Item'
import PropTypes from 'prop-types'

const PageContents = ({ items }) => {
    return (
        <div className="container">
            {
                items.map((item, i) => {
                    return (
                        <Item key={`id${i}`} item={item}/>
                    )
                })
            }
        </div>
    )
}

PageContents.propTypes = {
    items: PropTypes.array
};

export default PageContents