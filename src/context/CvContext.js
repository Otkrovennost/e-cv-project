import { createContext, useState } from 'react';
import Loader from '../Common/loader/Loader';
import * as Cards from '../CvTemplates/index';

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
};

const ContextProvider = ({ children }) => {
  const [cvData, setCvData] = useState(cvDataInit);
  const [selectedCv, setSelectedCv] = useState('');

  const cvClickHandler = (e, cvItem) => {
    setSelectedCv(cvItem.cvName);
  };
  localStorage.setItem('chosenTemplate', JSON.stringify(selectedCv));

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
      }}>
      {children}
    </CardsContext.Provider>
  );
};
export default ContextProvider;
