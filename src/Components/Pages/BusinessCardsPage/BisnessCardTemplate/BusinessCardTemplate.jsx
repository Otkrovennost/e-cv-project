import React from 'react'
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../constants';

const BusinessCardTemplate = ({ card }) => {
    return (
        <Link
            to={AppRoute.BUSINESS_CARD_CREATOR_PAGE}>
            <div>
                <p>{card.name}</p>
                <p>{card.profession}</p>
                <p>{card.phone}</p>
                <p>{card.email}</p>
                <p>{card.extra}</p>
            </div>
        </Link>
    )
}

export default BusinessCardTemplate;
