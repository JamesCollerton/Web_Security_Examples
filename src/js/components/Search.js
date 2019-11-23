import React from 'react'

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if(this.state.value == "alert('XSS attack!')"){
            alert(this.state.value); // eslint-disable-line no-undef
            event.preventDefault();
        }
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" 
                        value={this.state.value} onChange={this.handleChange}/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
    }
}
export default Search