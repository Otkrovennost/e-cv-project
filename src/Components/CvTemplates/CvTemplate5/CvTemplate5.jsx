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

import userImage from '../../../assets/avatar.jpg';

import loraFont from '../../../assets/fonts/Lora-Regular.ttf';

Font.register({
  family: 'Lora',
  src: loraFont,
});

const CvTemplate5 = ({ cvData }) => {
  return (
    <Document>
      <Page wrap size="A4" style={styles.body}>
        <View style={styles.wrapper}>
          {/* Left Side */}
          <View style={styles.left__bar}>
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
                  {cvData.educationHistory.length !== 0 ? 
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
                  : 
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
                  }
                </View>
              </View>
              {/* Experience  */}
              {/* Experince Section Start  */}
              <View style={styles.exp}>
                <Text style={styles.exp__title}>Experience</Text>
                <View style={styles.exp__items}>
                  {cvData.employmentHistory.length !== 0 ? 
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
                    )) : 
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
                    </>
                  }
                </View>
              </View>
            </View>
          </View>
          <View style={styles.right__bar}>
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
            <View style={styles.skills}>
              <Text style={styles.skills__title}>Skills</Text>
              <View style={styles.skills__list}>
                {cvData.skills.length !== 0 ? (
                  cvData.skills.map((elem) => (
                    <Text style={styles.skills__item}>{elem}</Text>
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
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  body: {
    fontWeight: "300",
    fontFamily: "Lora",
    height: "100%",
  },

  wrapper: {
    flexDirection: "row",
  },

  right__bar: {
    display: 'flex',
    flexDirection: 'column',
    height: "840px",
    width: "250px",
    padding: "10px",
    alignItems: "center",
    backgroundColor: "#191970",
  },

  left__bar: {
    width: "100%",
  },

  info__section: {
    padding: "20px",
  },

  contact: {
    display: 'flex',
    fontSize: '12px',
    marginBottom: '20px'
  },

  contact__title: {
    fontSize: '20px',
    color: '#fff',
    marginBottom: '15px',
    paddingBottom: '10px',
    borderBottomColor: '#fff',
    borderBottomWidth: '3px',
    textAlign: 'center'
  },

  contact__item: {
    marginBottom: '15px',
    color: '#fff',
  },

  skills: {
    display: 'flex',
    flexDirection: 'column'
  },

  skills__list: {
    display: 'flex',
    flexDirection: 'column'
  },

  skills__title: {
    fontSize: '20px',
    color: '#fff',
    marginBottom: '15px',
    paddingBottom: '10px',
    borderBottomColor: '#fff',
    borderBottomWidth: '3px',
    // textAlign: 'center'
  },

  skills__item: {
    marginBottom: '15px',
    fontSize: '16px',
    color: '#fff'
  },

  intro: {
    width: "100%",
    padding: "20px",
    textAlign: "center",
    justifyContent: "center",
  },

  intro__name: {
    paddingBottom: '15px',
    borderBottom: "2px",
    borderBottomColor: "#4C2C69",
    color: '#191970',
    fontSize: '22px'
  },

  intro__job: {
    paddingTop: '15px'
  },

  intro__image: {
    width: "100px",
    height: "100px",
    marginRight: "40px",
    marginBottom: '30px',
    objectFit: "cover",
    borderRadius: "50%",
  },

  about__title: {
    marginBottom: '15px',
    fontSize: '20px',
    textAlign: 'center', 
    color: '#191970',
  },

  about__description: {
    textAlign: 'center',
    color: '#696969',
    marginBottom: '15px',
    paddingBottom: '15px',
    borderBottomWidth: "2px",
    borderBottomColor: "#191970",
    borderBottomStyle: 'dotted',
  },

  edu: {
    paddingBottom: '15px',
    marginBottom: '15px',
    borderBottomWidth: "2px",
    borderBottomColor: "#191970",
    borderBottomStyle: 'dotted',
  },

  edu__title: {
    marginBottom: '15px',
    fontSize: '20px',
    textAlign: 'center', 
    color: '#191970',
  },

  edu__item: {
    marginBottom: '15px',
    color: '#696969',
  }, 

  edu__item_date: {
    marginBottom: '10px',
    color: '#778899'
  },

  exp: {
    paddingBottom: '15px',
    marginBottom: '15px',
    borderBottomWidth: "2px",
    borderBottomColor: "#191970",
    borderBottomStyle: 'dotted',
  },

  exp__title: {
    marginBottom: '15px',
    fontSize: '20px',
    textAlign: 'center', 
    color: '#191970',
  },

  exp__item: {
    marginBottom: '15px',
    color: '#696969',
  }, 

  exp__item_date: {
    marginBottom: '10px',
    color: '#778899'
  }
});

export default CvTemplate5;
