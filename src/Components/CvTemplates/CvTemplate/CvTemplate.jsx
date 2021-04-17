import React from "react";
import {
  Page,
  Text,
  Document,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import userImage from "../../../assets/user-image.png";

const DefaultExpirienceItem = () => {
  return (
    <View style={styles.edu__item}>
      <Text style={styles.edu__item_date}>2020 sep - 2021 sep</Text>
      <View style={styles.edu__item_info}>
        <Text>Google Co.</Text>
        <Text>Frontend-devlop</Text>
      </View>
    </View>
  );
};

const DefaultEducationItem = () => {
  return (
    <View style={styles.edu__item}>
      <Text style={styles.edu__item_date}>2019 sep - 2020 sep</Text>
      <View style={styles.edu__item_info}>
        <Text>Wild code School</Text>
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

const CvTemplate = ({ cvData }) => {
  return (
    <Document>
      <Page wrap size="A4" style={styles.body}>
        <View style={styles.intro}>
          <Image
            style={styles.intro__image}
            src={cvData.avatar === "" ? userImage : cvData.avatar[0]}
          />
          <View>
            <View style={styles.intro__name_job}>
              <Text style={styles.intro__name}>
                {cvData.name === "" ? "Nazar" : cvData.name}{" "}
                {cvData.surname === "" ? "Archakov" : cvData.surname}
              </Text>
              <Text style={styles.intro__job}>
                {cvData.title === "" ? "Frontend-developer" : cvData.title}
              </Text>
            </View>
            <View style={styles.intro__info}>
              <Text style={styles.intro__info_item}>
                {cvData.phone === "" ? "80291844650" : cvData.phone}
              </Text>
              <Text style={styles.intro__info_item}>
                {cvData.email === "" ? "Email@mail.ru" : cvData.email}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.about}>
          <Text style={styles.about__title}>About</Text>
          <Text style={styles.about__description}>
            {cvData.summary === ""
              ? "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore suscipit neque earum repellat laudantium dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium deserunt cum qui veniam alias laboriosam nesciunt."
              : cvData.summary}
          </Text>
        </View>
        <View style={styles.edu}>
          <Text style={styles.edu__title}>Experience</Text>
          <View style={styles.edu__items}>
            {cvData.employmentHistory.length === 0 ? (
              <DefaultExpirienceItem />
            ) : (
              cvData.employmentHistory.map((elem) => (
                <View style={styles.edu__item}>
                  <Text style={styles.edu__item_date}>
                    {elem.dateStart} - {elem.dateEnd}
                  </Text>
                  <View style={styles.edu__item_info}>
                    <Text>{elem.company}</Text>
                    <Text>{elem.title}</Text>
                  </View>
                </View>
              ))
            )}
          </View>
        </View>
        <View style={styles.exp}>
          <Text style={styles.exp__title}>Education</Text>
          <View style={styles.exp__items}>
            {cvData.educationHistory.length === 0 ? (
              <DefaultEducationItem />
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
          <Text style={styles.skills__title}>Skills </Text>
          <View style={styles.skills__list}>
            {cvData.skills.length === 0
              ? DefaultSkillAray.map((elem) => (
                  <Text style={styles.skills__title}>{elem}</Text>
                ))
              : cvData.skills.map((elem) => (
                  <Text style={styles.skills__title}>{elem}</Text>
                ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: "50px",
  },
  intro: {
    flexDirection: "row",
  },

  intro__image: {
    width: "100px",
    height: "100px",
    marginRight: "40px",
    objectFit: "cover",
  },

  intro__job: {
    color: "#5E5E5E",
    fontSize: "14pt",
  },

  intro__info: {
    marginTop: "10px",
    fontSize: "12pt",
  },

  intro__info_item: {
    marginBottom: "3px",
  },

  about: {
    marginTop: "40px",
    flexDirection: "row",
    marginBottom: "40px",
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
  },

  edu__title: {
    marginBottom: "10px",
    width: "100px",
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
    width: "100px",
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

export default CvTemplate;
