import { createContext, useState } from 'react';
import { cvCards } from '../../data';

export const CardsContext = createContext();
const ContextProvider = ({ children }) => {
  const [chosenTemplate, setChosenTemplate] = useState(cvCards[0]);

  // Getting Id of a CV and pushing it to history.
  const cvClickHandler = (e, cvItem) => {
    setChosenTemplate(cvCards.find((item) => item.id === cvItem.id));
    localStorage.setItem(
      'cv',
      JSON.stringify(cvCards.find((item) => item.id === cvItem.id))
    );
    console.log(chosenTemplate);
  };
  return (
    <CardsContext.Provider
      value={{ chosenTemplate, setChosenTemplate, cvClickHandler }}>
      {children}
    </CardsContext.Provider>
  );
};
export default ContextProvider;
