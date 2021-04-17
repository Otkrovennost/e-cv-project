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

import userImage from "../../../assets/user-image.png";

import robotoLightFont from "../../../assets/fonts/Roboto-Light.ttf";

Font.register({
  family: "Roboto",
  src: robotoLightFont,
});

const CvTemplate3 = ({ cvData }) => {
  return (
    <Document>
      <Page wrap size="A4" style={styles.body}>
        <View style={styles.wrapper}>
          {/* Left Side */}
          <View style={styles.left__bar}>
            <Image
              style={styles.intro__image}
              src={cvData.avatar === "" ? userImage : cvData.avatar[0]}
            />
            {/* Contact Info  */}
            <View style={styles.contact}>
              <Text style={styles.contact__title}>Contact</Text>
              <Text style={styles.contact__item}>
                {cvData.phone ? cvData.phone : "+375 29 533 63 19"}
              </Text>
              <Text style={styles.contact__item}>
                {cvData.email ? cvData.email : "nazar.archakov@gmail.com"}
              </Text>
            </View>
            {/* Skills  */}
            <View style={styles.contact}>
              <Text style={styles.skills__title}>Skills</Text>
              <View style={styles.skills__list}>
                {!cvData.skills.length === 0 ? (
                  cvData.skills.map((elem) => (
                    <Text style={styles.skills__title}>{elem}</Text>
                  ))
                ) : (
                  <>
                    <Text style={styles.skills__item}>HTML</Text>
                    <Text style={styles.skills__item}>CSS</Text>
                    <Text style={styles.skills__item}>JS</Text>
                    <Text style={styles.skills__item}>React</Text>
                    <Text style={styles.skills__item}>Photoshop</Text>
                  </>
                )}
              </View>
            </View>
          </View>
          {/* Left Side */}
          <View style={styles.right__bar}>
            {/* INTRO    */}
            <View style={styles.intro}>
              <Text style={styles.intro__name}>
                {cvData.name ? cvData.name : "Nazar"}{" "}
                {cvData.surname ? cvData.surname : "Archakov"}
              </Text>
              <Text style={styles.intro__job}>
                {cvData.title ? cvData.title : "Frontend Developer"}
              </Text>
            </View>
            <View style={styles.info__section}>
              {/* About Section Start  */}
              <View style={styles.about}>
                <Text style={styles.about__title}>About Me</Text>
                <Text style={styles.about__description}>
                  {cvData.summary
                    ? cvData.summary
                    : "An “about me” section is a brief segment in your resume that highlights who you are as a professional, describes your greatest strengths and showcases your greatest professional accomplishments. The “about me” section in a resume should briefly provide the reader with an answer to the question, “Why should we hire you?"}
                </Text>
              </View>
              {/* Education  */}
              <View style={styles.edu}>
                <Text style={styles.edu__title}>Education</Text>
                {/* Education Items  */}
                <View style={styles.edu__items}>
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
              {/* Experience  */}
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
                            Working as a Frontend developer at one of the main
                            offices
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
                            Working as a Frontend developer at one of the main
                            offices
                          </Text>
                        </View>
                      </View>
                    </>
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  body: {
    fontWeight: "300",
    fontFamily: "Roboto",
    height: "100%",
  },

  wrapper: {
    flexDirection: "row",
  },

  left__bar: {
    backgroundColor: "#9EB2BD",
    height: "840px",
    width: "180px",
    padding: "20px",
    alignItems: "center",
  },

  right__bar: {
    width: "100%",
  },

  info__section: {
    padding: "20px",
  },

  intro: {
    backgroundColor: "#C4D4D7",
    width: "100%",
    padding: "20px",
    paddingTop: "40px",
    paddingBottom: "40px",
    textAlign: "center",
    justifyContent: "center",
  },

  intro__name: {
    borderBottom: "2px",
    borderBottomColor: "#4C2C69",
  },

  intro__image: {
    width: "100px",
    height: "100px",
    marginRight: "40px",
    objectFit: "cover",
    borderRadius: "50%",
  },
});

export default CvTemplate3;
