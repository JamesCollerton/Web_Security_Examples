import React from 'react'
import Item from './Item'

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

export default PageContents