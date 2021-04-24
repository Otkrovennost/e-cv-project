import { createContext, useState } from 'react';
import Loader from '../Components/Common/loader/Loader';
import * as Cards from '../Components/CvTemplates/index';
export const CardsContext = createContext();

const cvDataInit = {
  avatar: '',
  title: '',
  name: '',
  surname: '',
  email: '',
  phone: '',
  summary: '',
  employmentHistory: [],
  educationHistory: [],
  skills: [],
  colorHash: '',
  color: '',
};

const ContextProvider = ({ children }) => {
  const [cvData, setCvData] = useState(cvDataInit);
  const [selectedCv, setSelectedCv] = useState(
    JSON.parse(localStorage.getItem('chosenTemplate'))
  );

  const cvClickHandler = (e, cvItem) => {
    setSelectedCv(cvItem);
    localStorage.setItem('chosenTemplate', JSON.stringify(cvItem));
  };

  const renderCard = (selectedCard) => {
    if (!selectedCard) {
      return <Loader />;
    }
    const CvTemplate = Cards[selectedCard];
    return <CvTemplate cvData={cvData} />;
  };
  return (
    <CardsContext.Provider
      value={{
        selectedCv,
        setSelectedCv,
        cvClickHandler,
        renderCard,
        cvData,
        setCvData,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
export default ContextProvider;
