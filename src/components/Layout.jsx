import React from 'react';
import '../assets/styles/Layout.scss';

const Layout = (props) => (
    <div className="layout">
        {props.children}
    </div>
)


export default Layout