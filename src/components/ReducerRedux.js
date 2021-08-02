const estadoInicial = {
    productos: [
        { id: 1, name: "producto 1" },
        { id: 2, name: "producto 2" },
        { id: 3, name: "producto 3" },
        { id: 4, name: "producto 4" },
    ],
    carrito: []
};
const ReducerRedux = (estado = estadoInicial, accion) => {
    switch (accion.type) {
        case 'AGREGAR_PRODUCTO_AL_CARRO':
            if (estado.carrito.length === 0) {
                return {
                    ...estado, carrito: [{ id: accion.id, name: accion.name, stok: 1 }]
                }
            } else {
                const nuevoEstado = [...estado.carrito];
                const check = estado.carrito.filter((index) => {
                    //console.log(index);
                    return index.id === accion.id;
                }).length > 0;

                if (check) {
                    nuevoEstado.forEach((element) => {
                        //console.log(element);
                        if (element.id === accion.id) {
                            element.stok += 1;
                        }
                    });

                } else {
                    nuevoEstado.push({ id: accion.id, name: accion.name, stok: 1 });
                }
                return {
                    ...estado, carrito: nuevoEstado
                };
            }
        case "ELIMINAR_CARRITO":
            const nuevoEstado = estado.carrito.filter((element) => {
                if (element.id !== accion.id) {
                    return element;
                } else {
                    return "";
                }
            });
            return {
                ...estado,
                carrito: nuevoEstado
            };

        // eslint-disable-next-line no-fallthrough
        default:
            return estado;
    }
}


export default ReducerRedux;
