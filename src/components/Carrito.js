import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Carrito = ({ carrito, eliminarCarrito }) => {
    //console.log("Carrito.length ",carrito.length);
    return (
        <div>
            <h3>Carrito de Compras: </h3>
            {carrito.length <= 0 ?
                <p>"No hay nada en el carrito"</p>
                :
                carrito.map((productos, key) => {
                    return <ProductoDiv key={key} >
                        <NombreProducto>  Nombre: {productos.name}</NombreProducto>
                        <p style={{ fontWeight: "lighter" }}>cantidad:{productos.stok}</p>
                        <Boton onClick={() => eliminarCarrito(productos.id)} >Eliminar</Boton>
                    </ProductoDiv>
                })
            }
        </div>
    )
}

const Boton = styled.button`
    border: none;
    background: #e81c1c;
    color: #fff;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
    border-radius: 3px;
    transition: .3s ease all;
 
    &:hover {
	background: #b91c3e;
    }
`;


const ProductoDiv = styled.div`
    margin: 5px;
    border-bottom: 1px solid #ebebf3;
    font-size: 14px;
`;
const NombreProducto = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #000;
`;
const mapStateToProps = (estado) => {
    return {
        carrito: estado.carrito
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        eliminarCarrito: (id) => {
            dispatch({
                type: "ELIMINAR_CARRITO",
                id: id
            });
        }
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Carrito);
