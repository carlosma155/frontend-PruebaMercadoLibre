import React from 'react';
import { Link } from 'react-router-dom';
import shipping from '../assets/static/shipping.png';

import '../assets/styles/Item.scss';

const Item = (props) => {

    const item = props.items[0];

    const itemPrice = item.price.amount.toLocaleString();
    const itemCondition = item.condition === "new" ? "Nuevo" : "Usado" || " ";

    return (        
            <div className="container item__back">
                <div className="row">
                    <div className="col-3 col-xl-2">
                        <Link to={`/items/${item.id}`} className="item__button">
                            <img className="item__image" src={item.picture} alt="Item"/>
                        </Link>
                    </div>
                    <div className="offset-2 offset-lg-0 col-7 col-xl-8 item__description">
                        <div className="item__description-container">
                            <p className="item__container-price">$ {itemPrice}</p>
                            {item.free_shipping &&
                                <img className="shipping__image" src={shipping} alt="Shipping"/>
                            }
                        </div>
                        <Link to={`/items/${item.id}`} className="item__button">
                            <p className="item__container-title">{item.title}</p>
                        </Link>
                        <p>{itemCondition}</p>
                    </div>
                    <div className="d-none d-lg-block col-lg-2">
                        <p className="item__address">{item.address}</p>       
                    </div>
                </div>            
            </div>        
    )
}

export default Item;
