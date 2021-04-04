import React from 'react';
import { Page, Text, Document, StyleSheet, View, Image } from '@react-pdf/renderer';
import { waitForElementToBeRemoved } from '@testing-library/dom';

const CvTemplate = ({cvData}) => {
  return (
    <Document title="Nazar" subject="CV" style={styles.document}>
      <Page wrap size="A4" style={styles.body}>
        <View style={styles.intro}>
          <Image
            style={styles.intro__image}
            src={cvData.avatar[0]}
          />
          {/* Intro Section  */}
          <View>
            <View style={styles.intro__name_job}>
              <Text style={styles.intro__name}>
                {cvData.name} {cvData.surname}
              </Text>
              <Text style={styles.intro__job}>
                {cvData.title}
              </Text>
            </View>


            <View style={styles.intro__info}>
              {/* <Text style={styles.intro__info_item}>
                Maksima Bogdanovicha 136/141
              </Text> */}
              <Text style={styles.intro__info_item}>
                {cvData.phone}
              </Text>
              <Text style={styles.intro__info_item}>
                {cvData.email}
              </Text>
            </View>
          </View>
        </View>
        {/* Intro Section End  */}
        {/* Info Sections Start  */}
        {/* About Section Start  */}
        <View style={styles.about}>
          <Text style={styles.about__title}>
            About
          </Text>
          <Text style={styles.about__description}>
            {cvData.summary}
          </Text>
        </View>
        {/* About Section End  */}
        {/* Education Section Start  */}
        <View style={styles.edu}>
          <Text style={styles.edu__title}>
            Experience
          </Text>
          <View style={styles.edu__items}>
            {cvData.employmentHistory.map(elem =>  (
              <View style={styles.edu__item}>
                <Text style={styles.edu__item_date} >
                  {elem.dateStart} - {elem.dateEnd}
                </Text>
                <View style={styles.edu__item_info}>
                  <Text>
                    {elem.company}
                  </Text>
                  <Text>
                    {elem.title}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        {/* Education Section End  */}
        {/* Exp Section Start  */}
        <View style={styles.exp}>
          <Text style={styles.exp__title}>
            Education
          </Text>
          {/* Experience Items  */}
          <View style={styles.exp__items}>
            {cvData.educationHistory.map(elem =>  (
              <View style={styles.edu__item}>
                <Text style={styles.edu__item_date} >
                  {elem.dateStart} - {elem.dateEnd}
                </Text>
                <View style={styles.edu__item_info}>
                  <Text>
                    {elem.place}
                  </Text>
                  <Text>
                    {elem.degree}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        {/* Exp Section End  */}

        {/* Skills Section Start  */}
        <View style={styles.skills}>
          <Text style={styles.skills__title}>
            Skills
          </Text>
          <View style={styles.skills__list} >
            {cvData.skills.map(elem =>  (
              <Text style={styles.skills__title}>
                {elem}
              </Text>
            ))}
          </View>

        </View>
        {/* Skills Section End  */}
        {/* Info Sections End  */}
      </Page>
    </Document>
  )
}

const styles = StyleSheet.create({
  body: {
    padding: "50px",
  },
  intro: {
    flexDirection: "row"
  },

  intro__image: {
    width: "100px",
    height: "100px",
    marginRight: "40px",
    objectFit: "cover"
  },

  intro__job: {
    color: "#5E5E5E",
    fontSize: "14pt"
  },

  intro__info: {
    marginTop: "10px",
    fontSize: "12pt",
  },

  intro__info_item: {
    marginBottom: "3px"
  },

  about: {
    marginTop: "40px",
    flexDirection: "row",
    marginBottom: "40px"
  },

  about__title: {
    width: "100px"
  },

  about__description: {
    fontSize: "13pt",
    lineHeight: "1.4",
    maxWidth: "380px"
  },

  edu__item: {
    flexDirection: "row",
    display: "flex",
    fontSize: "12pt",
    marginBottom: "15px"
  },

  edu: {
    flexDirection: "row",
    marginBottom: "40px"
  },

  edu__title: {
    marginBottom: "10px",
    width: "100px"
  },

  edu__item_date: {
    width: "100px",
    marginRight: "60px",
  },

  exp: {
    marginBottom: "40px",
    flexDirection: "row",
  },

  exp__title: {
    marginBottom: "10px",
    width: "100px"
  },

  skills: {
    marginBottom: "40px",
    flexDirection: "row",
  },

  skills__title: {
    marginBottom: "10px",
    width: "100px"
  },

  skills__list: {
    flexDirection: "row",
    maxWidth: "400px",
    flexWrap: "wrap"
  },

  skills__item: {
    backgroundColor: "black",
    color: "white",
    padding: "8px",
    fontSize: "12pt",
    borderRadius: "5pt",
    margin: "5px",
  }

});

export default CvTemplate;