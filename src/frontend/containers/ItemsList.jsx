import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Item from '../components/Item';
import Breadcrumb from '../components/Breadcrumb';

import '../assets/styles/ItemsList.scss';

const ItemsList = (props) => {

    const { items } = props;
    const breadcrumbTitle = items[0]?.categories[0];

    return (
        <>            
            <Search />
            <Breadcrumb title={breadcrumbTitle} />            
            <div className="container items__list">
                {items?.map(item => ( 
                    <li className="col-12" key={item.items.map(x => x.id).toString()}>
                        <Item {...item} />
                    </li>
                ))} 
            </div>             
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        search: state.search
    }
}

export default connect(mapStateToProps, null)(ItemsList);
