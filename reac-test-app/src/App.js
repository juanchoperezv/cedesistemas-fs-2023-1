import React, { useState } from "react"
import { Button } from "./Button"

export const App = () => {
    //estructiras
    //const pets = ['Gumball', 'Tomasa']

    //hooks
    const [pets, setPets] = useState(['Gumball', 'Tomasa']);
    const [inputPet, setInputPet] = useState("");

    //eventos
    const onChangeInputPet = (event) => {
      setInputPet(event.target.value);
    }

    //funciones
    const onAddPet = () => {
      setPets(...pets, inputPet);
    }

    return ( 
      <React.Fragment>
        <h1>hola react :)</h1>
        <Button text="Enviar" />
        <br /><br />
        <Button text="Descargar" />
        <br /><br />
        <input type="text" placeholder="Ingresar mascota" />
        <Button value={inputPet} onChange={onChangeInputPet} text="Agregar" onPress={onAddPet} />
        <ul>
          { 
            pets.map(item => <li>{item}</li>)
          }
        </ul>
      </React.Fragment>
    );
}