import React from 'react'
// import { Link } from 'react-router-dom'
// import { AppRoute } from '../../../../constants';
import {
    Page,
    Text,
    Document,
    View,
    StyleSheet,
} from '@react-pdf/renderer';



const BusinessCardTemplate = ({ card }) => {

    const styles = StyleSheet.create({
        body: {
            padding: '50px',
        },
        card: {
            height: '100px',
            width: '250px',
            display: 'flex',
            flexDirection: "column",
            border: '1px solid blue',
            justifyContent: 'center',
            alignItems: 'center',
        },

        intro__image: {
            width: '100px',
            height: '100px',
            marginRight: '40px',
            objectFit: 'cover',
        }
    })



    return (
        // <Link
        //     to={AppRoute.BUSINESS_CARD_CREATOR_PAGE}
        // >

        <Document>
            <Page wrap size='A5' style={styles.body} >
                <View style={styles.card}>
                    <Text style={styles.name}>{card.name}</Text>
                    <Text style={styles.profession}>{card.profession}</Text>
                    <Text style={styles.phone}>{card.phone}</Text>
                    <Text style={styles.email}>{card.email}</Text>
                    <Text style={styles.extra}>{card.extra}</Text>
                </View>
            </Page>
        </Document>
        // </Link>
    )
}

export default BusinessCardTemplate;
