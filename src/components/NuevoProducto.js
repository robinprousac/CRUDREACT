import React ,{useState, useContext} from 'react'
import { ProductosContext } from '../context/ProductosContext';


function NuevoProducto({history}) {


    const { agregarProducto } = useContext(ProductosContext);
    const [producto , guardarProducto] =  useState({
        nombre : '',
        precio : 0
    });

    const {nombre, precio} = producto;

    const actualizarState = e => {
        guardarProducto({
            ... producto,
            [e.target.name]: e.target.value
        })
    }

    const submitNuevoProducto = e => {
        e.preventDefault();

        // validar formulario
        if(nombre.trim() === '' || precio <= 0) {

            alert("Hello! I am an alert box!!");

            return;
        }



        // crear el nuevo producto
        agregarProducto(producto);

        // redireccionar
        history.push('/');
    }

    return (
<div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>

                      

                        <form
                         onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={actualizarState}
                                />
                            </div>

                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={precio}
                                    onChange={actualizarState}
                                />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>

                      </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto
