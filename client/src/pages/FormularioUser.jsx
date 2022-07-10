import React, { Component } from 'react';
import axios from 'axios';

export default class FormularioUser extends Component {
    
    state = {
        pases: [],
        nombre: '',
        fecha_compra: '',
        pase: '',
    }

    componentDidMount() {
        this.getPasesData()
    }

    async getPasesData() {
        axios.get('http://localhost:5000/api/pases')
            .then((response) => {
                this.setState({ pases: response.data })
            })
    }

    insertUser = () => {
        const { nombre, fecha_compra, pase} = this.state
        axios.post('http://localhost:5000/api/usuarios', {
            nombre,
            fecha_compra,
            pase,
        }).then((response) => {
            window.location.replace("/")
        })
    }

    render() {
        return (
            <div className='row'>
                <div className='col-md-4'>
                    <label className='form-label'>Nombre:</label>
                    <input type="text" className="form-control" id="nombre" required
                        onChange={(e) => { this.setState({nombre: e.target.value}) }} />
                </div>
                <div className='col-md-4'>
                    <label className='form-label'>Fecha:</label>
                    <input type="date" className="form-control" id="fecha" required
                        onChange={(e) => { this.setState({fecha_compra: e.target.value}) }} />
                </div>
                <div className='col-md-4'>
                    <label className='form-label'>Pase:</label>
                    <select className='form-select' id='pase' required
                        onChange={(e) => { this.setState({pase: e.target.value}) }} >
                        <option defaultValue>Seleccione el Pase</option>
                        {
                            this.state.pases.map((pase) => {
                                return(
                                    <option key={pase.id} value={pase.id}>{pase.tipo}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='col-md-4'><br />
                    <button className='btn btn-primary' onClick={this.insertUser}>Guardar</button><br/>
                </div>  
            </div>
        )
    }
}