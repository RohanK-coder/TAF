// Using context-api here
import React, { createContext } from 'react'
import { useState } from 'react';

export const AppContext = createContext()
export const AppProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [vatascore, SetVataScore] = useState(0);
    const [pittascore, SetPittaScore] = useState(0);
    const [kaphascore, SetKaphaScore] = useState(0);
  
    return (
      <AppContext.Provider value={{ name, setName,vatascore,SetVataScore,pittascore,SetPittaScore,kaphascore,SetKaphaScore}}>
        {children}
      </AppContext.Provider>
    );
  };
