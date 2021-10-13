import React from 'react'

const Tablero = () => {
    return (
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid px-4">
                    <h1 className="mt-4">Tablero</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item active">Tablero</li>
                    </ol>
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-primary text-white mb-4">
                                <div className="card-body">Ventas</div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="#">Ver Ventas</a>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-warning text-white mb-4">
                                <div className="card-body">Productos</div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="#">Ver Productos</a>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-success text-white mb-4">
                                <div className="card-body">CLientes</div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="#">Ver Clientes</a>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-danger text-white mb-4">
                                <div className="card-body">Usuario</div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="#">Ver Usuarios</a>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-table me-1"></i> Listado Ventas
                        </div>
                        <div className="card-body">
                            <table id="datatablesSimple">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Fecha</th>
                                        <th>Cliente</th>
                                        <th>Vendedor</th>
                                        <th>Valor Total</th>
                                        <th>Tipo de Pago</th>
                                        <th>Accion</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>ID</th>
                                        <th>Fecha</th>
                                        <th>Cliente</th>
                                        <th>Vendedor</th>
                                        <th>Valor Total</th>
                                        <th>Tipo de Pago</th>
                                        <th>Accion</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    <tr>
                                        <td>1234567</td>
                                        <td>2011/04/25</td>
                                        <td>Carlos Perez</td>
                                        <td>Juan Gallo</td>
                                        <td>$320,800</td>
                                        <td>Efectivo</td>
                                        <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                            <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1234567</td>
                                        <td>2011/04/25</td>
                                        <td>Carlos Perez</td>
                                        <td>Juan Gallo</td>
                                        <td>$320,800</td>
                                        <td>Efectivo</td>
                                        <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                            <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1234567</td>
                                        <td>2011/04/25</td>
                                        <td>Carlos Perez</td>
                                        <td>Juan Gallo</td>
                                        <td>$320,800</td>
                                        <td>Efectivo</td>
                                        <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                            <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1234567</td>
                                        <td>2011/04/25</td>
                                        <td>Carlos Perez</td>
                                        <td>Juan Gallo</td>
                                        <td>$320,800</td>
                                        <td>Efectivo</td>
                                        <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                            <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1234567</td>
                                        <td>2011/04/25</td>
                                        <td>Carlos Perez</td>
                                        <td>Juan Gallo</td>
                                        <td>$320,800</td>
                                        <td>Efectivo</td>
                                        <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                            <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1234567</td>
                                        <td>2011/04/25</td>
                                        <td>Carlos Perez</td>
                                        <td>Juan Gallo</td>
                                        <td>$320,800</td>
                                        <td>Efectivo</td>
                                        <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                            <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1234567</td>
                                        <td>2011/04/25</td>
                                        <td>Carlos Perez</td>
                                        <td>Juan Gallo</td>
                                        <td>$320,800</td>
                                        <td>Efectivo</td>
                                        <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                            <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1234567</td>
                                        <td>2011/04/25</td>
                                        <td>Carlos Perez</td>
                                        <td>Juan Gallo</td>
                                        <td>$320,800</td>
                                        <td>Efectivo</td>
                                        <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                            <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1234567</td>
                                        <td>2011/04/25</td>
                                        <td>Carlos Perez</td>
                                        <td>Juan Gallo</td>
                                        <td>$320,800</td>
                                        <td>Efectivo</td>
                                        <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                            <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1234567</td>
                                        <td>2011/04/25</td>
                                        <td>Carlos Perez</td>
                                        <td>Juan Gallo</td>
                                        <td>$320,800</td>
                                        <td>Efectivo</td>
                                        <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                            <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1234567</td>
                                        <td>2011/04/25</td>
                                        <td>Carlos Perez</td>
                                        <td>Juan Gallo</td>
                                        <td>$320,800</td>
                                        <td>Efectivo</td>
                                        <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                            <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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

export default Tablero
