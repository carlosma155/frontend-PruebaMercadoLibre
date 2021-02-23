import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../assets/static/notFound.png';
import '../assets/styles/NotFound.scss';

function NotFound() {
    return (
        <div className="container-fluid" id="NotFound">
            <div className="row">
                <div className="col-12">
                    <div className="col-12">
                        <Link to="/" >
                            <img className="NotFound__logo" src={notFound} alt="Not Found" />
                        </Link>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default NotFound;