import React,{useState, createContext} from 'react';

export const GlobalContext = createContext();

const GlobalWrapper = (props) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const endpoint = 'http://localhost:3000';

    return (
        <GlobalContext.Provider value={{loggedIn, setLoggedIn, endpoint}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalWrapper;