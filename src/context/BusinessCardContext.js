import { createContext, useState } from "react";
import Loader from "../Components/Common/loader/Loader";
import * as BusinessCards from "../Components/Pages/BusinessCardsPage/BisnessCardTemplate/index";
export const BusinessCardsContext = createContext();

const businessCardDataInit = {
  name: 'it is your name',
  profession: 'position',
  phone: 'phone call',
  email: 'email',
  extra: 'extra info',
};

const CardContextProvider = ({ children }) => {
  const [businessCardData, setBusinessCardData] = useState(businessCardDataInit);
  const [selectedCard, setSelectedCard] = useState(
    JSON.parse(localStorage.getItem("chosenCard"))
  );

  const cardClickHandler = (e, cardItem) => {
    setSelectedCard(cardItem);
    localStorage.setItem("chosenCard", JSON.stringify(cardItem));
  };

  const renderBusinessCard = (selCard) => {
    if (!selCard) {
      return <Loader />;
    }
    const BusinessCardTemplate = BusinessCards[selCard];
    return <BusinessCardTemplate businessCardData={businessCardData} />;
  };
  return (
    <BusinessCardsContext.Provider
      value={{
        selectedCard,
        setSelectedCard,
        cardClickHandler,
        renderBusinessCard,
        businessCardData,
        setBusinessCardData,
      }}
    >
      {children}
    </BusinessCardsContext.Provider>
  );
};
export default CardContextProvider;
