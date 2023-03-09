import React, { createContext, useContext, useEffect, useState } from 'react'

const Crypto = createContext()

const Crypto_context = ({children}) => {
    const[currency,setCurrency] = useState("INR")
    const[symbol,setSymbol] = useState("₹")

    useEffect(() => {
        if (currency === "INR") setSymbol("₹");
        else if (currency === "USD") setSymbol("$");
        else if (currency === "Yen") setSymbol("¥");
        else if (currency === "rubel") setSymbol("$");
      }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
        {children}
    </Crypto.Provider>
  )
}

export default Crypto_context
export const CryptoState = () =>{
    return useContext(Crypto)
}
