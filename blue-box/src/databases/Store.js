import React, { useContext, useState } from 'react';

const initialState = {
    username: 'patrick'
};

export const Context = React.createContext();

const Store = ({ children }) => {
    const [state, setState] = useState(initialState);

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );
};

export default Store;

// const Component = () => {
//     const [state, setState] = useContext(Context) 
//     const handleEvent = (username) => {
//         setState(username)
//     }
// }

// set global state to username