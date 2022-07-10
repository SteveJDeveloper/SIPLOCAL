import React, { Component } from 'react';
import axios from 'axios';

export default class ListUsuarios extends Component {

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.getUsuariosData()
    }

    async getUsuariosData() {
        axios.get('http://localhost:5000/api/usuarios')
            .then((response) => {
                this.setState({ usuarios: response.data })
            })
    }

    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Fecha Compra</th>
                        <th scope="col">Pase</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.usuarios.map((usuario) => {
                            return (
                                <tr key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.nombre}</td>
                                    <td>{new Date(usuario.fecha_compra).toLocaleDateString()}</td>
                                    <td>{usuario.tipo}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}