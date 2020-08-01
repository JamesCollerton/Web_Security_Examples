import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ item }) => {
    return (
        // <h1 className="display-4">{item.name}</h1>
        <div className="card">
            {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <img className="card-art-image" src={item.image} alt="Art image"/>
                <br/><br/>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string
    })
};

export default Item