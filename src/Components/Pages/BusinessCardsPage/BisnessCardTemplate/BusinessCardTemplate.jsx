import React from 'react'
import {
  Font,
  Page,
  Text,
  Document,
  View,
  StyleSheet,
} from '@react-pdf/renderer';

import satisfyRegular from '../../../../assets/fonts/Satisfy-Regular.ttf';
import cardBg from '../../../../assets/card-bg.png';

Font.register({
  family: 'Satisfy-Regular',
  src: satisfyRegular,
});

const BusinessCardTemplate = ({ card }) => {

    const styles = StyleSheet.create({
        body: {
          height: '100%',
          padding: '5px 0',
          fontFamily: "Satisfy-Regular",
          // backgroundColor: '#6495ED',
          // opacity: '0.5'
        },
        card: {
            // height: '100px',
            // width: '250px',
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '7px',
            // backgroundColor: '#E6E6FA'

        },

        card__item: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          color: '#CD853F'
        },

        card__item__title: {
          color: '#C0C0C0',
          fontSize: '7px'
        },

        extra: {
          color: '#CD853F',
          textAlign: 'center'
        }, 

        bg__block: {
          width: '100%',
          padding: '0 5px 5px 5px',
          borderBottomColor: '#C0C0C0',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid'
        }, 

        text__block: {
          width: '100%',
          padding: '5px 5px 0 5px',
        }
    })

    return (
      <Document>
          <Page wrap size='A10' orientation='landscape' style={styles.body} >
            <View style={styles.card}>
              <View style={styles.bg__block}>
                <View style={styles.card__item}>
                  <Text style={styles.card__item__title}>Name</Text>
                  <Text style={styles.name}>{card.name}</Text>
                </View>
                <View style={styles.card__item}>
                  <Text style={styles.card__item__title}>Profession</Text>
                  <Text style={styles.profession}>{card.profession}</Text>
                </View>
              </View>
              <View style={styles.text__block}>
                <View style={styles.card__item}>
                  <Text style={styles.card__item__title}>Phone</Text>
                  <Text style={styles.phone}>{card.phone}</Text>
                </View>
                <View style={styles.card__item}>
                  <Text style={styles.card__item__title}>Email</Text>
                  <Text style={styles.email}>{card.email}</Text>
                </View>
                <View style={styles.card__item}>
                  <Text style={styles.extra}>{card.extra}</Text>
                </View>  
              </View>
            </View>
          </Page>
      </Document>
      // <div>
      //   <title>{card.name}</title>
      //   <p>{card.profession}</p>
      //   <p>{card.phone}</p>
      //   <p>{card.email}</p>
      //   <p>{card.phone}</p>
      // </div>
    )
}

export default BusinessCardTemplate;
