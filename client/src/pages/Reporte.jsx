import React, { Component } from 'react';
import axios from 'axios';

export default class Reporte extends Component {

    state = {
        desde: '',
        hasta: '',
        reportes: []
    }

    componentDidMount() {
        var date = new Date()
        this.setState({hasta: date.toLocaleDateString()})
    }

    ObtenerReporte = () => {
        const { desde, hasta }  = this.state
        var cadenas = hasta.split('/')
        var aux = cadenas[2]+'-'+cadenas[1]+'-'+cadenas[0]
        axios.get('http://localhost:5000/api/reporte/'+desde+'/'+aux)
            .then((response) => {
                var today = new Date().getTime()
                var data = []
                var datos = response.data
                datos.forEach(element => {
                    var exp = new Date(element.fecha_compra)
                    var origin = exp.getTime()
                    switch (element.tipo){
                        case 'Mensual':
                            exp.setMonth(exp.getMonth()+1)
                            break
                        case 'Semestral':
                            exp.setMonth(exp.getMonth()+6)
                            break
                        case 'Anual':
                            exp.setMonth(exp.getMonth()+12)
                            break
                    }
                    element.fecha_compra = exp
                    var cant = Math.round(((today-origin)/(1000*60*60*24))-0.5)
                    element.pases = element.pases - cant
                    data.push(element)
                });
                this.setState({ reportes: data })
            })
    }

    render() {
        return (
            <div className='row'>
                <div className='row'>
                    <div className='col-md-4'>
                        <label className='form-label'>Fecha Desde:</label>
                        <input type="date" className="form-control" id="desde" required
                            onChange={(e) => { this.setState({desde: e.target.value}) }} />
                    </div>
                    <div className='col-md-4'>
                        <label className='form-label'>Fecha Hasta:</label>
                        <input type="text" className="form-control" id="hasta" required readOnly value={this.state.hasta}/>
                    </div>
                    <div className='col-md-4'><br />
                    <button className='btn btn-primary' onClick={this.ObtenerReporte}>Buscar</button><br/>
                </div> 
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">Usuario</th>
                            <th scope="col">Fecha Expira</th>
                            <th scope="col">Pases</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            
                            this.state.reportes.map((reporte) => {
                                return (
                                    <tr key={reporte.id}>
                                        <td>{reporte.nombre}</td>
                                        <td>{new Date(reporte.fecha_compra).toLocaleDateString()}</td>
                                        <td>{reporte.pases}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}