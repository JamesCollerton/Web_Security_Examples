import React from 'react'
import PageHeader from './PageHeader'
import PageContents from './PageContents'

const PageBody = ({items}) => {
    return (
        <React.Fragment>
            <PageHeader />
            <PageContents items={items}/>
        </React.Fragment>
    )
}

export default PageBody