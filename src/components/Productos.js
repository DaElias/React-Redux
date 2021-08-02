import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

const Productos = ({ productos, agregarProductosCarrito }) => {

    return (
        <div>
            <h3>Productos</h3>
            <ContenedorProductos>
                {productos.map((indexProductos, key) => {
                    //console.log(key);
                    return <ProductoDIV key={key}>
                        {indexProductos.name}
                        <Boton
                            onClick={() => agregarProductosCarrito(indexProductos.name, indexProductos.id)}
                        >Agregar Carrito</Boton>
                    </ProductoDIV>
                })}
            </ContenedorProductos>
        </div>
    )
}

const ContenedorProductos = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 0;
`;

const ProductoDIV = styled.div`
    padding: 20px;
    border: 1px solid #ebeef3;
    border-radius: 5px;
    text-align: center;
 
    p {
        margin-bottom: 10px;
        font-weight: bold;
    }
`;

const Boton = styled.button`
    border: none;
    background: #1c85e8;
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
        background: #1c6ab9;
    }
`;

//* Imprime los productos
const mapStateToProps = (estado) => {
    return {
        productos: estado.productos //productos: ese es el nombre del props productos de arriba..
    }
}
//* Llama la funcion del ReducerRedux para agregar al carrito
const mapDispachToProps = (dispatch) => {
    return {
        agregarProductosCarrito: (nameProducto, idProducto) => {
            dispatch({
                type: "AGREGAR_PRODUCTO_AL_CARRO",
                id: idProducto,
                name: nameProducto
            });
        }
    }
}




export default connect(mapStateToProps, mapDispachToProps)(Productos);
