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

/*
    This is an example of propTypes, where we check the type of an object coming 
    in. They only work in developer mode but you can use something similar like sinon
    to get things working in production.
*/
PageContents.propTypes = {
    items: PropTypes.array
};

export default PageContents