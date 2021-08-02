/* eslint-disable no-duplicate-case */
import React, { useReducer, useEffect } from 'react'
import styled from 'styled-components';


const initialState = { count: 0 } // * nunca cambia
const contadorReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action) { //* Acciones que editan el state 
        case 'incrementar':
            return {
                ...state,
                count: state.count + 1
            }
        case 'decrementar':
            return {
                ...state,
                count: state.count - 1
            }
        case 'cuadrado':
            return {
                ...state,
                count: state.count * state.count
            }
        case 'reset':
            return {
                ...state,
                count: state.count = 0
            }
        case 'raiz':
            let num = state.count;
            if (num < 0) {
                alert("Math Error");
                num = 0;
            } else {
                num = Math.sqrt(num);
            }
            return {
                ...state,
                count: num
            }
        default:
            return state;
    }
}




//const initialArray = [{ name: "Jorge", alive: true }];
const arrayReducer = (state, action) => {
    switch (action.action) {
        case 'eliminar':
            let newState0 = state;
            newState0.filter((index) => {
                if (index.name !== action.id) {
                    console.log(index)
                    return index;
                }
                return "";
            })

            //console.log(newState0)
            return newState0;
        case "mata":
            let newState = state;
            newState.forEach(element => {
                //console.log(element);
                if (element.name === action.id) {
                    //console.log(element.name, " = ", action.id);
                    element.alive = false;
                }
            });
            return newState;
        case "revive":
            let newState2 = state;
            newState2.forEach(element => {
                //console.log(element);
                if (element.name === action.id) {
                    //console.log(element.name, " = ", action.id);
                    element.alive = true;
                }
            });
            return newState2;
        case "addElement":
            console.log("addElement: active;");
            return [...state, { name: Math.random(), alive: true }];

        case 'update':
            return [...state];
        default:
            return state;
    }
}

const TableAlive = () => {
    /*
      *  contadorReducer:Es la funcion que identifica la accion y cambia el state. 
      *  initialState: Es el estado inicial del hook, es el valor predeterminado.
    */


    const [stateCount, dispatchCount] = useReducer(contadorReducer, initialState);

    const initialArray = [{ name: "Jorge", alive: true }];

    const [stateArray, dispatchArray] = useReducer(arrayReducer, initialArray)

    const handleAddElementExample = (dispatchArray1,acto) => {
        dispatchArray1();
        dispatchArray({ action: "update" });
    }


    useEffect(() => {
        console.log(stateArray);
    }, [stateArray])

    return (
        <DIV style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
            <div style={{ border: "solid 2px black" }}>
                <h1>Numero: {stateCount.count}</h1>
                <button onClick={() => { dispatchCount("reset") }}>Reset</button>
                <button onClick={() => { dispatchCount("incrementar") }}>Incrementar +</button>
                <button onClick={() => { dispatchCount("decrementar") }}>Decrementar -</button>
                <button onClick={() => { dispatchCount("cuadrado") }}>Elevar Cuadrado </button>
                <button onClick={() => { dispatchCount("raiz") }}>Raiz cuadrada</button>
            </div>


            <DIV style={{ margin: "200px" }}>
                <div style={{ border: "solid 2px black" }}>

                    <button onClick={handleAddElementExample}>console.log del State</button>
                    <button onClick={() => { dispatchArray({ action: "addElement" }) }}>addElement</button>
                    <button onClick={() => { dispatchArray({ action: "update" }) }}>update</button>
                    <DIV style={{ padding: "10px" }}>
                        <h2>Imprimir State</h2>
                        {stateArray.map((index,key) => {
                            return <div style={{ border: "solid 2px black", margin: "1px" }} key={key}>
                                name: {index.name}
                                <br></br>
                                alive: {index.alive ? "Esta vivo" : "Esta Muerto"}
                                <br></br>
                                <button onClick={() => { dispatchArray({action: "mata", id: index.name }) }}>Matar</button>
                                <button onClick={() => { dispatchArray({ action: "revive", id: index.name }) }}>Revivir</button>
                                <button onClick={() => { dispatchArray({ action: "eliminar", id: index.name }) }}>Eliminar</button>
                            </div>
                        })}
                    </DIV>
                </div>
            </DIV>
        </DIV>
    )
}


const DIV = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 600px;
`;

export default TableAlive;

/*
   const Personas = () => (
        [{ name: "name0", alive: true },
        { name: "name1", alive: true },
        { name: "name2", alive: true },
        { name: "name3", alive: true }]);
*/