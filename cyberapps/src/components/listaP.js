import React from 'react'

const listaP = () => {
    return(
        <div id="layoutSidenav_content">
        <main>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Tables</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item"><a href="index.html">Tablero</a></li>
                    <li className="breadcrumb-item active">Lista de Productos</li>
                </ol>
                <!-- Tabla con productos -->
                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-table me-1"></i> Listado de Productos
                    </div>
                    <div className="card-body">
                        <table id="datatablesSimple">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Codigo Barras</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Marca</th>
                                    <th>Cantidad</th>
                                    <th>Imagen</th>
                                    <th>Accion</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>ID</th>
                                    <th>Codigo Barras</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Marca</th>
                                    <th>Cantidad</th>
                                    <th>Imagen</th>
                                    <th>Accion</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>78945611</td>
                                    <td>Disco SDD 240GB</td>
                                    <td>$180.000</td>
                                    <td>ADATA</td>
                                    <td>100</td>
                                    <td><img src="assets/img/discosdd240.jpg" height="50px" alt=""></td>
                                    <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                        <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>78945611</td>
                                    <td>Disco SDD 240GB</td>
                                    <td>$180.000</td>
                                    <td>ADATA</td>
                                    <td>100</td>
                                    <td><img src="assets/img/discosdd240.jpg" height="50px" alt=""></td>
                                    <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                        <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>78945611</td>
                                    <td>Disco SDD 240GB</td>
                                    <td>$180.000</td>
                                    <td>ADATA</td>
                                    <td>100</td>
                                    <td><img src="assets/img/discosdd240.jpg" height="50px" alt=""></td>
                                    <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                        <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>78945611</td>
                                    <td>Disco SDD 240GB</td>
                                    <td>$180.000</td>
                                    <td>ADATA</td>
                                    <td>100</td>
                                    <td><img src="assets/img/discosdd240.jpg" height="50px" alt=""></td>
                                    <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                        <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>78945611</td>
                                    <td>Disco SDD 240GB</td>
                                    <td>$180.000</td>
                                    <td>ADATA</td>
                                    <td>100</td>
                                    <td><img src="assets/img/discosdd240.jpg" height="50px" alt=""></td>
                                    <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                        <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>78945611</td>
                                    <td>Disco SDD 240GB</td>
                                    <td>$180.000</td>
                                    <td>ADATA</td>
                                    <td>100</td>
                                    <td><img src="assets/img/discosdd240.jpg" height="50px" alt=""></td>
                                    <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                        <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>78945611</td>
                                    <td>Disco SDD 240GB</td>
                                    <td>$180.000</td>
                                    <td>ADATA</td>
                                    <td>100</td>
                                    <td><img src="assets/img/discosdd240.jpg" height="50px" alt=""></td>
                                    <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                        <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>78945611</td>
                                    <td>Disco SDD 240GB</td>
                                    <td>$180.000</td>
                                    <td>ADATA</td>
                                    <td>100</td>
                                    <td><img src="assets/img/discosdd240.jpg" height="50px" alt=""></td>
                                    <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                        <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>78945611</td>
                                    <td>Disco SDD 240GB</td>
                                    <td>$180.000</td>
                                    <td>ADATA</td>
                                    <td>100</td>
                                    <td><img src="assets/img/discosdd240.jpg" height="50px" alt=""></td>
                                    <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                        <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>78945611</td>
                                    <td>Disco SDD 240GB</td>
                                    <td>$180.000</td>
                                    <td>ADATA</td>
                                    <td>100</td>
                                    <td><img src="assets/img/discosdd240.jpg" height="50px" alt=""></td>
                                    <td><a className="btn btn-xs btn-warning"><i className="fa fa-edit"></i></a>
                                        <a className="btn btn-xs btn-danger"><i className="fas fa-trash-alt"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>78945611</td>
                                    <td>Disco SDD 240GB</td>
                                    <td>$180.000</td>
                                    <td>ADATA</td>
                                    <td>100</td>
                                    <td><img src="assets/img/discosdd240.jpg" height="50px" alt=""></td>
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
export default listaP
