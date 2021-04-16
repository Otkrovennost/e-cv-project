import React from 'react'
import { Link } from 'react-router-dom'
import './BusinessCard.scss'
import { AppRoute } from '../../../../constants'


const BusinessCard = ({ props }) => {
    return (
        <>
            {
                props.map((item) => (
                    <div className="BusinessCard">
                        <Link to={AppRoute.BUSINESS_CARD_BUILDER_PAGE}>
                            <form className={`BusinessCard--${item.cardStyle}`} >
                                <div className="section_name">
                                    <p className='first-name'>{item.firstName} </p>
                                    <p className='last-name'>{item.lastName}</p>
                                </div>
                                <p className='position'>{item.position}</p>
                                <p className='phone'>{item.phone}</p>
                                <p className='email'>{item.email}</p>
                            </form>
                        </Link>
                    </div>
                ))
            }
        </>
    )
}
export default BusinessCard;