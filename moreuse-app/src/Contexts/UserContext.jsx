import React, { createContext, useState, useEffect } from "react";
import { getToken, removeToken } from "../Utils/TokenLocalStorage";
import { HTTTP_METHODS, httpRequest } from "../Utils/HttpRequest";


const initialState = {
  isAuth: false,
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

  const validateSesion = () => {
    const token = getToken();
    if (token && !userState.isAuth) {
      userRequest();
    }
  }

  const userRequest =  async () => {
    try {

      const response = await httpRequest({
        method: HTTTP_METHODS.GET,
        endpoint: '/auth',
        token: getToken()
      });

      const {data} = response;
      console.log(response);
      setUserAuth(data);

    } catch (error) {
      console.log(error);
      removeUserAuth();
      removeToken();
    }
  }

  return (
    //se expone el estado que es un objeto y una funcion que permita cambiar el estado, o las funciones necesarias
    <UserContext.Provider value={{userState, changeUserState, setUserAuth, removeUserAuth, validateSesion}}>
      {props.children}
    </UserContext.Provider>
  )

}
