import React from 'react'
import Search from './Search'

const NavBar = () => { 
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">The Art Bazaar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="form-inline my-2 my-lg-0 ml-auto">
                <Search/>
            </div>
        </div>
    </nav>
}
export default NavBar