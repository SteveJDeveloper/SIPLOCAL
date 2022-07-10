import React, { useState, useEffect } from 'react';
import ListPases from './ListPases';
import ListUsuarios from './ListUsuarios';
import FormularioUser from './FormularioUser';
import Reporte from './Reporte';

export const Funcionalidad = () => {
    return (
        <div className='container'><br />
            <div className='abs-center'><h2>Bienvenido a SIP - Sistema Informatico de Pases</h2></div><br />
            <div className='row'>
                <div className='col-md-6'>
                    <h3>Usuarios</h3><br />
                    <FormularioUser />
                    <ListUsuarios />
                </div>
                <div className='col-md-6'>
                    <h3>Pases</h3><br />
                    <ListPases />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Reporte</h3>
                    <Reporte />
                </div>
            </div>
        </div>
    )
}