import React, { createContext, useState } from "react";

export const ConversionContext = createContext();

// ConversionContext.Provider
export const ConversionContextProvider = ({ children }) => {
    const [baseCurrency, setBaseCurrency] = useState("USD");
    const [quoteCurrency, setQuoteCurrency] = useState("GBP");
    const swapCurrencies = () => {
        setBaseCurrency(quoteCurrency);
        setQuoteCurrency(baseCurrency);
      };
    const contextValue = {
        baseCurrency,
        setBaseCurrency,
        quoteCurrency,
        setQuoteCurrency,
        swapCurrencies,
    }
  return (
      <ConversionContext.Provider value={contextValue}>
          {children}
      </ConversionContext.Provider>
  )
};
// ConversionContext.Consumer
