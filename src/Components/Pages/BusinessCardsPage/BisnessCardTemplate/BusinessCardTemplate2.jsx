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

import satisfyRegular from '../../../../assets/fonts/Roboto-Light.ttf';
import cardBg from '../../../../assets/card-bg2.jpg';

Font.register({
  family: 'Roboto-Light',
  src: satisfyRegular,
});

const BusinessCardTemplate2 = ({ businessCardData }) => {

  const styles = StyleSheet.create({
    body: {
      height: '100%',
      boxSizing: 'border-box',
      fontFamily: "Roboto-Light",
      zIndex: '1'
    },

    content: {
      height: '100%',
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
      color: 'black',
    },

    card__item__title: {
      color: '#fff',
    },
    name: {
      fontSize: '10',
      margin: '8px 0 5px'

    },

    extra: {
      color: 'black',
      // textAlign: 'center'
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
                {/* <Text style={styles.card__item__title}>Name</Text> */}
                <Text style={styles.name}>{businessCardData.name}</Text>
              </View>
              <View style={styles.card__item}>
                {/* <Text style={styles.card__item__title}>Profession</Text> */}
                <Text style={styles.profession}>{businessCardData.profession}</Text>
              </View>
            </View>
            <View style={styles.second__block}>
              <View style={styles.card__item}>
                {/* <Text style={styles.card__item__title}>Phone</Text> */}
                <Text style={styles.phone}>{businessCardData.phone}</Text>
              </View>
              <View style={styles.card__item}>
                {/* <Text style={styles.card__item__title}>Email</Text> */}
                <Text style={styles.email}>{businessCardData.email}</Text>
              </View>
              <View style={styles.card__item}>
                <Text style={styles.extra}>{businessCardData.extra}</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default BusinessCardTemplate2;
