import React from 'react'
import PageHeader from './PageHeader'
import PageContents from './PageContents'
import PropTypes from 'prop-types'

/*
    Quick note on how this works.

    When we pass things in to the top level as <PageBody items={items}/> this is then
    fed into this function as an object called props. By doing the curly brackets we 
    dereference the object into its constituent parts, therefore creating items again.
*/
const PageBody = ({items}) => {
    return (
        <React.Fragment>
            <PageHeader />
            <PageContents items={items}/>
        </React.Fragment>
    )
}

PageBody.propTypes = {
    items: PropTypes.object
};

export default PageBody