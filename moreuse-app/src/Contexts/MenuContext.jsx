import React, { createContext, useState } from "react";

const initialState = {
  isOpen: false
};

export const MenuContext = createContext(initialState);

export const MenuContextStore = (props) => {

  const [menuState, setMenuState] = useState(initialState);

  //funcion para que se cambie el estado
  const changeMenuState = () => {
    //descompone el objeto y luego setea el dato al campo que desea modificar
    setMenuState({...menuState, isOpen: !menuState.isOpen});
  }

  //funcion para que se cambie el estado
  const closeMenu = () => {
    //descompone el objeto y luego setea el dato al campo que desea modificar
    setMenuState({...menuState, isOpen: false});
  }

  return (
    //se expone el estado que es un objeto y una funcion que permita cambiar el estado
    <MenuContext.Provider value={{menuState, changeMenuState, closeMenu}}>
      {props.children}
    </MenuContext.Provider>
  )

}
