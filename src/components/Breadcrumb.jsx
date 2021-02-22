import React from 'react';
import { connect } from 'react-redux';

import '../assets/styles/Breadcrumb.scss';

const Breadcrumb = (props) => {

    const { search, title } = props

    return (
        <div className="container breadcrumb__back">
            {title && 
                <p className="breadcrumb-text">{title}{' > '}{search}</p>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        search: state.search
    }
}
export default connect(mapStateToProps, null)(Breadcrumb)
