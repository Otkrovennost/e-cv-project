import React, { useEffect } from 'react';
import { Page, Text, Document, View, Image } from '@react-pdf/renderer';
import userImage from '../../../assets/user-image.png';
const CvTemplate = ({ cvData, chosenTemplate }) => {
  const { styles, cvTitle, subject } = chosenTemplate;
  console.log(cvData);
  console.log(chosenTemplate);
  return (
    <Document title={cvTitle} subject={subject}>
      <Page wrap size='A4' style={styles.body}>
        <View style={styles.intro}>
          <Image
            style={styles.intro__image}
            src={cvData.avatar === '' ? userImage : cvData.avatar[0]}
          />
          {/* Intro Section  */}
          <View>
            <View style={styles.intro__name_job}>
              <Text style={styles.intro__name}>
                {cvData.name} {cvData.surname}
              </Text>
              <Text style={styles.intro__job}>{cvData.title}</Text>
            </View>
            <View style={styles.intro__info}>
              {/* <Text style={styles.intro__info_item}>
                Maksima Bogdanovicha 136/141
              </Text> */}
              <Text style={styles.intro__info_item}>{cvData.phone}</Text>
              <Text style={styles.intro__info_item}>{cvData.email}</Text>
            </View>
          </View>
        </View>
        {/* Intro Section End  */}
        {/* Info Sections Start  */}
        {/* About Section Start  */}
        <View style={styles.about}>
          <Text style={styles.about__title}>About</Text>
          <Text style={styles.about__description}>{cvData.summary}</Text>
        </View>
        {/* About Section End  */}
        {/* Education Section Start  */}
        <View style={styles.edu}>
          <Text style={styles.edu__title}>Experience</Text>
          <View style={styles.edu__items}>
            {cvData.employmentHistory.map((elem) => (
              <View style={styles.edu__item}>
                <Text style={styles.edu__item_date}>
                  {elem.dateStart} - {elem.dateEnd}
                </Text>
                <View style={styles.edu__item_info}>
                  <Text>{elem.company}</Text>
                  <Text>{elem.title}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        {/* Education Section End  */}
        {/* Exp Section Start  */}
        <View style={styles.exp}>
          <Text style={styles.exp__title}>Education</Text>
          {/* Experience Items  */}
          <View style={styles.exp__items}>
            {cvData.educationHistory.map((elem) => (
              <View style={styles.edu__item}>
                <Text style={styles.edu__item_date}>
                  {elem.dateStart} - {elem.dateEnd}
                </Text>
                <View style={styles.edu__item_info}>
                  <Text>{elem.place}</Text>
                  <Text>{elem.degree}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        {/* Exp Section End  */}

        {/* Skills Section Start  */}
        <View style={styles.skills}>
          <Text style={styles.skills__title}>Skills</Text>
          <View style={styles.skills__list}>
            {cvData.skills.map((elem) => (
              <Text style={styles.skills__title}>{elem}</Text>
            ))}
          </View>
        </View>
        {/* Skills Section End  */}
        {/* Info Sections End  */}
      </Page>
    </Document>
  );
};

export default CvTemplate;
