import React from 'react'

const crearP = () => {
    return (
        <div id="layoutSidenav_content">
         <main>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Formulario de Inventario</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item"><a href="index.html">Tablero</a></li>
                    <li className="breadcrumb-item active">Inventario</li>
                </ol>

                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-chart-area me-1"></i> Productos
                    </div>
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header">
                                            <h3 className="text-center font-weight-light my-4">Formulario de Inventario </h3>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="row mb-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floating mb-3 mb-md-0">
                                                            <input className="form-control" id="inputFecha" type="date" placeholder="Ingrese la Fecha" />
                                                            <label for="inputFecha">Fecha de Adquiscion</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input className="form-control" id="idProducto" type="text" placeholder="Ingrese el Nombre del Producto" />
                                                            <label for="inputCliente">Nombre del Producto adquirido</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input className="form-control" id="inputCodioBarras" type="text" placeholder="Ingrese el codigo de barras" />
                                                            <label for="inputFecha">Codigo de Barras </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input className="form-control" id="inputMarca" type="text" placeholder="Ingrese la Marca del Producto" />
                                                            <label for="inputCliente">Marca del Producto</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floating mb-3 mb-md-0">
                                                            <input className="form-control" id="inputCantidadP" type="number" placeholder="Ingrese la Cantidad del Producto Adquirido" />
                                                            <label for="inputCantidad">Cantidad</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating mb-3 mb-md-0">
                                                            <input className="form-control" id="inputCantidadP" type="file" placeholder="Ingrese la imagen del archivo" size="19"/>
                                                        
                                                            <label for="inputCantidad">Imagen</label>
                                                        </div>
                                                    </div>

                                                </div>


                                                <h4 className="mb-3">Tipo de Pago</h4>

                                                <div className="my-3">
                                                    <div className="form-check">
                                                        <input id="tCredito" name="MetodoPago" type="radio" className="form-check-input" checked required>
                                                        <label className="form-check-label" for="tCredito">Contado</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input id="tDebito" name="MetodoPago" type="radio" className="form-check-input" required>
                                                        <label className="form-check-label" for="tDebito">Factura 30 días</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input id="efectivo" name="MetodoPago" type="radio" className="form-check-input" required>
                                                        <label className="form-check-label" for="efectivo">Factura 60 días</label>
                                                    </div>
                                                </div>
                                                <div className="mt-4 mb-0">
                                                    <div className="d-grid"><a className="btn btn-primary btn-block" href="#">Agregar al Inventario</a></div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                 </div>
            </div>
           </main>
           <footer className="py-4 bg-light mt-auto">
                <div className="container-fluid px-4">
                    <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted">Copyright &copy; MisionTic 2021</div>
                        <div>
                            <div className="text-muted">Desarrollado por CyberApps</div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default crearP
