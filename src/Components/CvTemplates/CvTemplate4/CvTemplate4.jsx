import React from "react";
import {
  Page,
  Text,
  Document,
  View,
  Image,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import userImage from '../../../assets/avatar.jpg';

import loraFont from '../../../assets/fonts/Lora-Regular.ttf';

Font.register({
  family: 'Lora',
  src: loraFont,
});

const DefaultExpirienceItem = () => {
  return (
    <View style={styles.exp__item}>
      <Text style={styles.exp__item_date}>2020 sep - 2021 sep</Text>
      <View style={styles.exp__item_info}>
        <Text>Google Co.</Text>
        <Text>Frontend-developer</Text>
      </View>
    </View>
  );
};

const DefaultEducationItem = () => {
  return (
    <View style={styles.edu__item}>
      <Text style={styles.edu__item_date}>2019 sep - 2020 sep</Text>
      <View style={styles.edu__item_info}>
        <Text>Wild Code School</Text>
        <Text>Frontend-developer</Text>
      </View>
    </View>
  );
};

const DefaultSkillAray = [
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "React",
  "Redux",
  "Node.js",
  "Figma",
  "TypeScript",
];

const CvTemplate4 = ({ cvData }) => {
  return (
    <Document>
      <Page wrap size="A4" style={styles.body}>
        <View style={styles.intro}>
          <View style={styles.intro__block}>
            <View style={styles.intro__name_job}>
              <Text style={styles.intro__name}>
                {cvData.name === "" ? "Irina" : cvData.name}{" "}
                {cvData.surname === "" ? "Archipova" : cvData.surname}
              </Text>
              <Text style={styles.intro__job}>
                {cvData.title === "" ? "Frontend-developer" : cvData.title}
              </Text>
            </View>
            <View style={styles.intro__info}>
              <Text style={styles.intro__info_item_phone}>
                {cvData.phone === "" ? "80291844880" : cvData.phone}
              </Text>
              <Text style={styles.intro__info_item_email}>
                {cvData.email === "" ? "Email@mail.ru" : cvData.email}
              </Text>
            </View>
          </View>
          <Image
            style={styles.intro__image}
            src={cvData.avatar === "" ? userImage : cvData.avatar[0]}
          />
        </View>
        <View style={styles.about}>
          <Text style={styles.about__title}>About</Text>
          <Text style={styles.about__description}>
            {cvData.summary === ""
              ? "An “about me” section is a brief segment in your resume that highlights who you are as a professional, describes your greatest strengths and showcases your greatest professional accomplishments. The “about me” section in a resume should briefly provide the reader with an answer to the question, “Why should we hire you?"
              : cvData.summary}
          </Text>
        </View>
        <View style={styles.exp}>
          <Text style={styles.exp__title}>Experience</Text>
          <View style={styles.exp__items}>
            {cvData.employmentHistory.length === 0 ? (
              <React.Fragment>
                <DefaultExpirienceItem />
                <DefaultExpirienceItem />
              </React.Fragment>
            ) : (
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
            )}
          </View>
        </View>
        <View style={styles.edu}>
          <Text style={styles.edu__title}>Education</Text>
          <View style={styles.edu__items}>
            {cvData.educationHistory.length === 0 ? (
              <React.Fragment>
                <DefaultEducationItem />
                <DefaultEducationItem />
              </React.Fragment>
            ) : (
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
            )}
          </View>
        </View>
        <View style={styles.skills}>
          <Text style={styles.skills__title__main}>Skills </Text>
          <View style={styles.skills__list}>
            {cvData.skills.length === 0
              ? DefaultSkillAray.map((elem) => (
                  <Text style={styles.skills__item}>{elem}</Text>
                ))
              : cvData.skills.map((elem) => (
                  <Text style={styles.skills__item}>{elem}</Text>
                ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: '25px',
    fontFamily: 'Lora',
  },

  intro: {
    flexDirection: "row",
    padding: "10px",
    color: "white",
    alignItems: "center",
  },

  intro__image: {
    width: "100px",
    height: "100px",
    marginLeft: 'auto',
    marginRight: "40px",
    objectFit: "cover",
  },

  intro__block: {
    minWidth: '350px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#9ebda6',
    borderRadius: '5px'
  },

  intro__job: {
    color: "white",
    fontSize: "14pt",
  },

  intro__name :{
    marginBottom: '10pt',
    fontWeight: '700',
  },

  intro__info: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: "10px",
    fontSize: "12pt",
  },

  intro__info_item_email: {
    marginLeft: 'auto'
  },

  about: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: "20px",
    marginBottom: "20px",
    borderBottomWidth: "2px",
    borderBottomColor: "#9ebda6",
    paddingBottom: "20px",
  },

  about__title: {
    marginBottom: '20px',
    color: '#2F4F4F'
  },

  about__description: {
    fontSize: "13pt",
    lineHeight: "1.4",
    width: '100%'
  },

  edu: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: "40px",
    borderBottomWidth: "2px",
    borderBottomColor: "#9ebda6",
    paddingBottom: "15px",
  },

  edu__items: {
    width: '100%',
    flexDirection: "column",
  },

  edu__item: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-between',
    display: "flex",
    fontSize: "12pt",
    paddingBottom: '10px',
    marginBottom: "10px",
    borderBottomWidth: "2px",
    borderBottomColor: "#2F4F4F",
    borderBottomStyle: 'dotted'
  },

  edu__title: {
    marginBottom: "20px",
    color: '#2F4F4F'
  },

  edu__item_date: {
    marginRight: "60px",
    color: '#4B0082'
  },

  exp: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: "20px",
    borderBottomWidth: "2px",
    borderBottomColor: "#9ebda6",
    paddingBottom: "20px",
  },

  exp__items: {
    width: '100%',
    flexDirection: "column",
  },

  exp__item: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-between',
    display: "flex",
    fontSize: "12pt",
    paddingBottom: '10px',
    marginBottom: "10px",
    borderBottomWidth: "2px",
    borderBottomColor: "#2F4F4F",
    borderBottomStyle: 'dotted'
  },

  exp__title: {
    marginBottom: "20px",
    color: '#2F4F4F'
  },

  exp__item_date: {
    marginRight: "60px",
    color: '#4B0082'
  },

  skills: {
    marginBottom: "40px",
    padding: ' 0 15px',
    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: '#9ebda6',
    borderRadius: '10px'
  },

  skills__title__main: {
    marginBottom: "10px",
    width: "120px",
    color: '#2F4F4F'
  },

  skills__title: {
    marginBottom: "10px",
    width: "100px",
  },

  skills__list: {
    flexDirection: "row",
    flexWrap: "wrap"
  },

  skills__item: {
    color: "#fff",
    padding: "10px",
    fontSize: "14pt",
    margin: "5px",
  },
});

export default CvTemplate4;
