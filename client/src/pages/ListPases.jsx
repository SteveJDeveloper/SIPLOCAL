import React, { Component } from 'react';
import axios from 'axios';

export default class ListPases extends Component {

    state = {
        pases: []
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

    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">Tipo</th>
                        <th scope="col">Costo</th>
                        <th scope="col">Pases</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.pases.map((pase) => {
                            return (
                                <tr key={pase.id}>
                                    <td>{pase.tipo}</td>
                                    <td>{pase.costo}</td>
                                    <td>{pase.pases}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}