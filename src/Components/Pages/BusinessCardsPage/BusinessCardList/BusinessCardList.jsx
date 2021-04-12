import React from 'react'
import './BusinessCardList.scss'

import BusinessCard from '../BusinessCardTemplate/BusinessCard';


const BusinessCardList = () => {

    return (
        <div className="BusinessCardList">
            <BusinessCard props={[
                {
                    firstName: 'michael',
                    lastName: 'Jackson',
                    position: 'developer',
                    phone: '+98 23 231313',
                    email: 'jackson@mail.com',
                    cardStyle: 'green',
                },
                {
                    firstName: 'nikolaj',
                    lastName: 'Smith',
                    position: 'manager',
                    phone: '+98 23 231313',
                    email: 'nikolai@mail.com',
                    cardStyle: 'yellow',
                }
            ]
            } />

        </div>
    )
}
export default BusinessCardList;