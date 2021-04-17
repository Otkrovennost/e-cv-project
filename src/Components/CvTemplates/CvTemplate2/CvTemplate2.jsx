import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

import userImage from "../../../assets/user-image.jpeg";

import robotoLightFont from "../../../assets/fonts/Roboto-Light.ttf";

Font.register({
  family: "Roboto",
  src: robotoLightFont,
});

const CvTemplate2 = ({ cvData }) => {
  return (
    <Document>
      <Page wrap size="A4" style={styles.body}>
        <View
          style={{
            backgroundColor: cvData.colorHash
              ? `${cvData.colorHash}`
              : "#4C2C69",
            flexDirection: "row",
            padding: "20px",
            color: "white",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.intro__image}
            src={cvData.avatar === "" ? userImage : cvData.avatar[0]}
          />
          {/* Intro Section  */}
          <View style={styles.intro__row}>
            <View style={styles.intro__name_job}>
              <Text style={styles.intro__name}>
                {cvData.name ? cvData.name : "Nazar"}{" "}
                {cvData.surname ? cvData.surname : "Archakov"}
              </Text>
              <Text style={styles.intro__job}>
                {cvData.title ? cvData.title : "Frontend Developer"}
              </Text>
            </View>
            <View style={styles.intro__info}>
              <Text style={styles.intro__info_item}>
                Maksima Bogdanovicha 136/141
              </Text>
              <Text style={styles.intro__info_item}>
                {cvData.phone ? cvData.phone : "+375 29 533 63 19"}
              </Text>
              <Text style={styles.intro__info_item}>
                {cvData.email ? cvData.email : "nazar.archakov@gmail.com"}
              </Text>
            </View>
          </View>
        </View>
        {/* Intro Section End  */}
        {/* Info Sections Start  */}
        {/* About Section Start  */}
        <View style={styles.about}>
          <Text style={styles.about__title}>About Me</Text>
          <Text style={styles.about__description}>
            {cvData.summary
              ? cvData.summary
              : "An “about me” section is a brief segment in your resume that highlights who you are as a professional, describes your greatest strengths and showcases your greatest professional accomplishments. The “about me” section in a resume should briefly provide the reader with an answer to the question, “Why should we hire you?"}
          </Text>
        </View>
        {/* About Section End  */}
        {/* Experince Section Start  */}
        <View style={styles.exp}>
          <Text style={styles.exp__title}>Experience</Text>
          <View style={styles.exp__items}>
            {!cvData.employmentHistory.length === 0 ? (
              cvData.employmentHistory.map((elem) => (
                <View style={styles.exp__item}>
                  <Text style={styles.exp__item_date}>
                    {elem.dateStart} - {elem.dateEnd}
                  </Text>
                  <View style={styles.exp__item_info}>
                    <Text>{elem.company}</Text>
                    <Text>{elem.title}</Text>
                  </View>
                </View>
              ))
            ) : (
              <>
                <View style={styles.exp__item}>
                  <Text style={styles.exp__item_date}>
                    september 2020 - january 2021
                  </Text>
                  <View style={styles.exp__item_info}>
                    <Text>Google</Text>
                    <Text>
                      Working as a Frontend developer at one of the main offices
                    </Text>
                  </View>
                </View>
                <View style={styles.exp__item}>
                  <Text style={styles.exp__item_date}>
                    september 2020 - january 2021
                  </Text>
                  <View style={styles.exp__item_info}>
                    <Text>Google</Text>
                    <Text>
                      Working as a Frontend developer at one of the main offices
                    </Text>
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
        {/* Education Section End  */}
        {/* Exp Section Start  */}
        <View style={styles.exp}>
          <Text style={styles.exp__title}>Education</Text>
          {/* Experience Items  */}
          <View style={styles.exp__items}>
            {!cvData.educationHistory.length === 0 ? (
              cvData.educationHistory.map((elem) => (
                <View style={styles.edu__item}>
                  <Text style={styles.edu__item_date}>
                    {elem.dateStart} - {elem.dateEnd}
                  </Text>
                  <View style={styles.edu__item_info}>
                    <Text>{elem.place}</Text>
                    <Text>{elem.degree}</Text>
                  </View>
                </View>
              ))
            ) : (
              <>
                <View style={styles.edu__item}>
                  <Text style={styles.edu__item_date}>
                    september 2020 - january 2021
                  </Text>
                  <View style={styles.edu__item_info}>
                    <Text>Wild Code School</Text>
                    <Text>Frontend Developer Remote</Text>
                  </View>
                </View>
                <View style={styles.edu__item}>
                  <Text style={styles.edu__item_date}>
                    september 2020 - january 2021
                  </Text>
                  <View style={styles.edu__item_info}>
                    <Text>Wild Code School</Text>
                    <Text>Frontend Developer Remote</Text>
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
        {/* Exp Section End  */}
        {/* Skills Section Start  */}
        <View style={styles.skills}>
          <Text style={styles.skills__title}>Skills </Text>
          <View style={styles.skills__list}>
            {!cvData.skills.length === 0 ? (
              cvData.skills.map((elem) => (
                <Text style={styles.skills__title}>{elem}</Text>
              ))
            ) : (
              <>
                <Text style={styles.skills__title}>HTML</Text>
                <Text style={styles.skills__title}>CSS</Text>
                <Text style={styles.skills__title}>JS</Text>
                <Text style={styles.skills__title}>React</Text>
                <Text style={styles.skills__title}>Photoshop</Text>
              </>
            )}
          </View>
        </View>
        {/* Skills Section End  */}
        {/* Info Sections End  */}
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: "20px",
    fontWeight: "300",
    fontFamily: "Roboto",
    backgroundColor: "#F3F3F3",
  },
  intro__row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  intro__image: {
    width: "100px",
    height: "100px",
    marginRight: "40px",
    objectFit: "cover",
    borderRadius: "50%",
  },

  intro__job: {
    fontSize: "14pt",
  },

  intro__info: {
    fontSize: "10pt",
    marginLeft: "100px",
  },

  intro__info_item: {
    marginBottom: "3px",
  },

  about: {
    marginTop: "40px",
    flexDirection: "row",
    marginBottom: "40px",
    borderBottom: "2px",
    borderBottomColor: "#4C2C69",
    paddingBottom: "20px",
  },

  about__title: {
    width: "100px",
  },

  about__description: {
    fontSize: "13pt",
    lineHeight: "1.4",
    maxWidth: "380px",
  },

  edu__item: {
    flexDirection: "row",
    display: "flex",
    fontSize: "12pt",
    marginBottom: "15px",
  },

  edu: {
    flexDirection: "row",
    marginBottom: "40px",
    borderBottom: "2px",
    borderBottomColor: "#4C2C69",
    paddingBottom: "20px",
  },

  edu__title: {
    marginBottom: "10px",
    width: "100px",
  },

  edu__item_date: {
    width: "100px",
    marginRight: "60px",
  },

  edu__item_info: {
    flexDirection: "column",
  },

  edu__item_info_title: {},

  edu__item_info_description: {
    paddingTop: "5px",
    fontSize: "10px",
    width: "240px",
  },

  exp: {
    marginBottom: "40px",
    flexDirection: "row",
    borderBottom: "2px",
    borderBottomColor: "#4C2C69",
    paddingBottom: "20px",
  },

  exp__item: {
    flexDirection: "row",
    display: "flex",
    fontSize: "12pt",
    marginBottom: "15px",
  },

  exp__title: {
    marginBottom: "10px",
    width: "100px",
  },

  exp__item_date: {
    width: "100px",
    marginRight: "60px",
  },

  exp__item_info: {
    flexDirection: "column",
  },

  exp__item_info_title: {},

  exp__item_info_description: {
    paddingTop: "5px",
    width: "240px",
    fontSize: "10px",
  },

  skills: {
    marginBottom: "40px",
    flexDirection: "row",
  },

  skills__title: {
    marginBottom: "10px",
    width: "100px",
  },

  skills__list: {
    flexDirection: "row",
    maxWidth: "400px",
    flexWrap: "wrap",
  },

  skills__item: {
    backgroundColor: "black",
    color: "white",
    padding: "8px",
    fontSize: "12pt",
    borderRadius: "5pt",
    margin: "5px",
  },
});

export default CvTemplate2;
