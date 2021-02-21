import React from 'react';
import logo from '../assets/static/logoML.png';
import lens from '../assets/static/search.png';

import '../assets/styles/Search.scss';

const Search = () => {
    return (
        <div className="container-fluid back">
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <img className="search__logo" src={logo} alt="Logo Mercado Libre" />
                    </div>
                    <div className="col-11">
                        <input 
                            className="search__input"
                            placeholder="Nunca dejes de buscar"                            
                        ></input>
                        <img className="search__lens" src={lens} alt="Logo Mercado Libre" />
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Search
