import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { fillSearch, getItems, unmountSearch, unmountItems } from '../actions';
import logo from '../assets/static/logoML.png';
import lens from '../assets/static/search.png';

import '../assets/styles/Search.scss';

const Search = (props) => {

    const { search } = props;

    const handleChange = (e) => {
        props.fillSearch(e.target.value)
    }

    const handleClick = (e) => {
        props.getItems(search);
    }

    const handleUnmount = (e) => {
        props.unmountSearch('')
        props.unmountItems([])
    }

    const history = useHistory();

    const handlePressEnter = (e) => {
        if(e.which === 13) {
            props.getItems(search);
            history.push('/items')
        }
    }

    return (
        <div className="container-fluid search__back">
            <div className="container">
                <div className="row">
                    <div className="col-2 col-lg-1">
                        <Link to="/" onClick={handleUnmount}>
                            <img className="search__logo" src={logo} alt="Logo Mercado Libre" />
                        </Link>
                    </div>
                    <div className="col-10 col-lg-11">
                        <input 
                            type="text"
                            className="search__input"
                            placeholder="Nunca dejes de buscar"  
                            spellCheck="false" 
                            value={search}      
                            onChange={handleChange}  
                            onKeyPress={handlePressEnter}
                        >                            
                        </input>
                        <Link to="/items" onClick={handleClick}>
                            <img className="search__lens" src={lens} alt="Logo Mercado Libre" />
                        </Link>
                    </div>
                </div>
            </div>            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        search: state.search
    }
}

const mapToDispatchToProps = {
    getItems,
    fillSearch,
    unmountSearch,
    unmountItems
}

export default connect(mapStateToProps, mapToDispatchToProps)(Search);
