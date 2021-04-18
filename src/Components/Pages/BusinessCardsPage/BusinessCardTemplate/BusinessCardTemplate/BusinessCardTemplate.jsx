import React from 'react'
import {
  Font,
  Page,
  Text,
  Document,
  View,
  StyleSheet,
  Image
} from '@react-pdf/renderer';

import satisfyRegular from '../../../../../assets/fonts/Satisfy-Regular.ttf';
import cardBg from '../../../../../assets/card-bg.jpg';

Font.register({
  family: 'Satisfy-Regular',
  src: satisfyRegular,
});

const BusinessCardTemplate = ({ card }) => {

  const styles = StyleSheet.create({
    body: {
      height: '100%',
      boxSizing: 'border-box',
      fontFamily: "Satisfy-Regular",
      zIndex: '1'
      // opacity: '0.5'
    },

    content: {
      height: '100%',
      // paddingTop: '5px',
      position: 'relative',
    },

    card: {
      display: 'flex',
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '7px',
    },

    card__item: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      color: '#CD853F',
    },

    card__item__title: {
      color: '#fff',
      fontSize: '7px'
    },

    extra: {
      color: '#CD853F',
      textAlign: 'center'
    },

    first__block: {
      width: '100%',
      padding: '0 5px',
      // borderBottomColor: '#CD853F',
      // borderBottomWidth: '1px',
      // borderBottomStyle: 'solid'
    },

    second__block: {
      width: '100%',
      padding: '0 5px',
    },

    image__block: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
    },

    image: {
      position: 'absolute',
      width: '100%',
      height: '100%'
    }
  })

  return (
    <Document>
      <Page wrap size='A10' orientation='landscape' style={styles.body} >
        <View style={styles.content}>
          <View style={styles.image__block}>
            <Image style={styles.image} src={cardBg} />
          </View>
          <View style={styles.card}>
            <View style={styles.first__block}>
              <View style={styles.card__item}>
                <Text style={styles.card__item__title}>Name</Text>
                <Text style={styles.name}>{card.name}</Text>
              </View>
              <View style={styles.card__item}>
                <Text style={styles.card__item__title}>Profession</Text>
                <Text style={styles.profession}>{card.profession}</Text>
              </View>
            </View>
            <View style={styles.second__block}>
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
