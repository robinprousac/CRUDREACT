  
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el Context
export const ProductosContext = createContext();

// Provider es donde se encuentran las funciones y state
const ProductosProvider = (props) => {

    // crear el state del Context en este caso productos para el manejo de productos y un producto a editar
    // useState (HOOK) para definir un state
    const [productos, guardarProductos] = useState([]);
    const [productoeditar, guardarProductoeditar] = useState();

    // useEffect (HOOK) para ejecutar el llamado a la api una vez que se utilice desde el componente productos con useContext
    useEffect(() => {
        //uso de asyn await para paticion asincrona 
        const obtenerProductos = async () => {
            const url = 'http://localhost:4000/productos';
            const productos = await axios.get(url);
           // console.log(productos);
           //se guarda el state (productos) con los productos que vienen del endpoint que devuelve todos los productos
            guardarProductos(productos.data);
        }

        obtenerProductos();
    }, []);

    //funcion para hacer uso del endpoint para eliminar un producto enviando el id del producto
    const deleteAxios = async (id) => {
        const resultado =  await axios.delete(`http://localhost:4000/productos/${id}`);
    }

    //funcion para eliminar un producto, recibe como parametro el id del producto a eliminar
    const deleteProducts = (productoeliminar) => {
        deleteAxios(productoeliminar);
        //se guarda el state (productos) utilizando el metodo .filter y la condicion para filtrar dejando fuera el producto a eliminar
        guardarProductos(productos.filter( producto => producto.id !== productoeliminar));
    }

    //funcion para agregar un producto, recibe como parametro el objeto producto para poder postearlo
    const agregarProducto = async (producto) => {
        const resultado =  await axios.post('http://localhost:4000/productos', producto);
        //se guarda el state (productos) utilizando spread operator
        // referencia : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        //se resume en que toma una copia de los productos existentes y agrega uno nuevo
        guardarProductos([...productos,producto]);
       // console.log(resultado)
    }

    //funcion que guarda el producto a editar, recibe como parametro el producto al momento de dar click en editar
    //NOTA: ESTA NO ES LA MEJOR MANERA DE MANEJAR LA EDICION DE UN PRODUCTO, ES MEJOR OBTENER EL PRODUCTO CON OTRO ENDPOINT
    const setProducto = (producto) => {
        //Guarda el state (productoeditar) seteando el que viene como parametro para poder editarlo en la vista de edicion
        guardarProductoeditar(producto);
  
    }

    //funcion para guardar cambios en producto editado recibe como parametro el producto editado
    const guardareditado= async (productoe) => {

        const resultado =  await axios.put(`http://localhost:4000/productos/${productoe.id}`, productoe); 
        //guarda el state (productos) valiendose de la funcion map donde la restriccion es para sustituir el producto
        // que tenga el mismo id del editado
        guardarProductos(productos.map( producto => 
            producto.id === productoe.id ? producto = productoe : producto
        ));
       // console.log(resultado)
    }

    return (
        <ProductosContext.Provider
            value={{
                //todas las "variables" y funciones que se quieren tener el uso del contexto
                productos,
                deleteProducts,
                agregarProducto,
                setProducto,
                productoeditar,
                guardareditado
            }}
        >
            {props.children}
        </ProductosContext.Provider>
    )
}
export default ProductosProvider;
//nota: faltan muchas validaciones para las peticiones  , confirmaciones , etc