import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getItem, unmountItemDetails } from '../actions';
import Search from '../components/Search';
import Breadcrumb from '../components/Breadcrumb';

import '../assets/styles/ItemDetails.scss';

const ItemDetails = (props) => {

    const { id } = props.match.params;

    useEffect(() => {
        props.getItem(id)
        return () => {
            props.unmountItemDetails({})
        }
    }, [])

    const { itemDetail } = props;
    const { item } = itemDetail || {};
    const itemPrice = item?.price.amount.toLocaleString();
    const itemDecimal = item?.price.decimals.toFixed(2).slice(2);   
    const itemCondition = item?.condition === "new" ? "Nuevo" : "Usado" || " "; 

    return (
        <>
            <Search />
            <Breadcrumb title={item?.category} />
            {item && <div className="container itemDetails">
                <div className="row">
                    <div className="col-12 col-lg-9 col-xl-8">
                        <img className="itemDetails__image" src={item?.picture}/>
                    </div>
                    <div className="col-6 col-lg-3 col-xl-4">
                        <div className="itemDetails_text">
                            <p className="itemDetails__condition">{itemCondition}{' - '}{item?.sold_quantity}{' '}vendidos</p>
                            <p className="itemDetails__title">{item?.title}</p>
                            <div className="itemDetails_amount">
                                <p className="itemDetails__price">$ {itemPrice}</p>
                                <p className="itemDetails__decimals">{itemDecimal}</p>
                            </div>
                            <Button variant="primary" size="lg" block>Comprar</Button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <div className="itemDetails__description">
                            <p className="itemDetails__description-title">Descripcion del producto</p>
                            <p className="itemDetails__description-text">{item?.description}</p>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        itemDetail: state.itemDetail
    }
}

const mapToDispatchToProps = {
    getItem,
    unmountItemDetails
}

export default connect(mapStateToProps, mapToDispatchToProps)(ItemDetails)
