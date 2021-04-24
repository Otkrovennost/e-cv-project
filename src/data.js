// import violetCv from '../src/assets/cv-previews/violet.png';
import steelBlueCV from "../src/assets/cv-previews/cv-1.png";
import blueColdCV from "../src/assets/cv-previews/cv-3.png";
import greenCV from "../src/assets/cv-previews/cv-4.png";
import blueDarkCV from "../src/assets/cv-previews/cv-5.png";
import goldDarkCV from "../src/assets/cv-previews/cv-6.png";
import cv_2_violet from "../src/assets/cv-previews/violet.png";
import cv_2_red from "../src/assets/cv2-assets/red-1.png";
import cv_2_green from "../src/assets/cv2-assets/green-1.png";
import cv_2_blue from "../src/assets/cv2-assets/blue-1.png";
import cardImageFirst from "../src/assets/card-img.png";
import cardImageSecond from "../src/assets/card-img-2.jpg";
import cardImageThird from "../src/assets/card-img-3.png";
import cardImageFourth from "../src/assets/card-img-4.jpg";

export const cvCards = [
  {
    id: "1",
    cvName: "CvTemplate",
    cvTitle: "Dublin",
    cvImage: steelBlueCV,
    cvColors: ["#dskflf", "#dfd445", "#dfd445"],
    subject: "CV",
  },
  {
    id: "2",
    cvName: "CvTemplate2",
    cvTitle: "Stockholm",
    cvImage: cv_2_violet,
    cvModalImages: {
      purple: cv_2_violet,
      red: cv_2_red,
      green: cv_2_green,
      blue: cv_2_blue,
    },
    cvColors: [
      {
        color: "red",
        hash: "#D6A1A1",
        id: 1,
      },
      {
        color: "blue",
        hash: "#A1B3D6",
        id: 2,
      },
      {
        color: "green",
        hash: "#A6D9A5",
        id: 3,
      },
      {
        color: "purple",
        hash: "#4C2C69",
        id: 4,
      },
    ],
    subject: "CV",
  },
  {
    id: "3",
    cvName: "CvTemplate3",
    cvTitle: "Santiago",
    cvImage: blueColdCV,
    cvColors: ["#dskflf", "#dfd445", "#dfd445"],
    subject: "CV",
  },
  {
    id: "4",
    cvName: "CvTemplate4",
    cvTitle: "Amsterdam",
    cvImage: greenCV,
    cvColors: ["#dskflf", "#dfd445", "#dfd445"],
    subject: "CV",
  },
  {
    id: "5",
    cvName: "CvTemplate5",
    cvTitle: "Sydney",
    cvImage: blueDarkCV,
    cvColors: ["#dskflf", "#dfd445", "#dfd445"],
    subject: "CV",
  },
  {
    id: "6",
    cvName: "CvTemplate6",
    cvTitle: "London",
    cvImage: goldDarkCV,
    cvColors: ["#dskflf", "#dfd445", "#dfd445"],
    subject: "CV",
  },
];

export const businessCards = [
  {
    id: "1",
    cardName: "BusinessCardTemplate",
    cardImage: cardImageFirst,
    subject: "businessCard",
  },
  {
    id: "2",
    cardName: "BusinessCardTemplate2",
    cardImage: cardImageSecond,
    subject: "businessCard",
  },
  {
    id: "3",
    cardName: "BusinessCardTemplate3",
    cardImage: cardImageThird,
    subject: "businessCard",
  },
  {
    id: "4",
    cardName: "BusinessCardTemplate4",
    cardImage: cardImageFourth,
    subject: "businessCard",
  },
];
