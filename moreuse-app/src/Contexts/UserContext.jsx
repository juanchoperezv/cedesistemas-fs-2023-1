import React, { createContext, useState } from "react";

const initialState = {
  isAuth: true,
  name: '',
  email: '',
  phone: '',
  address: ''

};

export const UserContext = createContext(initialState);

export const UserContextStore = (props) => {

  const [userState, setUserState] = useState(initialState);

  //funcion para que se cambie el estado
  const changeUserState = () => {
    //descompone el objeto y luego setea el dato al campo que desea modificar
    setUserState({...userState, isAuth: !userState.isAuth});
  }

  //funcion para que se cambie el estado
  const setUserAuth = (userData) => {
    setUserState({...userData, isAuth: true});
  }

  //funcion para que se cambie el estado
  const removeUserAuth = () => {
    setUserState(initialState);
  }

  return (
    //se expone el estado que es un objeto y una funcion que permita cambiar el estado
    <UserContext.Provider value={{userState, changeUserState, setUserAuth, removeUserAuth}}>
      {props.children}
    </UserContext.Provider>
  )

}
