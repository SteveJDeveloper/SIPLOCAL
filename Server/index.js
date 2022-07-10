const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { compare } = require('bcryptjs');

//Connexion a la base de datos
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_sip'
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))

/**Testing */
app.listen(5000,"localhost", () => {
    console.log('Funcionando')
})

/*== PASES ==*/
app.get("/api/pases", (req, res) => {
    const sqlSelect = "SELECT * FROM tb_pases";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

/*== USUARIOS ==*/
app.get("/api/usuarios", (req, res) => {
    const sqlSelect = "SELECT tb_usuarios.id, tb_usuarios.nombre, tb_usuarios.fecha_compra, tb_pases.tipo FROM tb_usuarios INNER JOIN tb_pases ON tb_usuarios.id_pase = tb_pases.id";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.post("/api/usuarios", (req, res) => {
    const nombre = req.body.nombre
    const fecha_compra = req.body.fecha_compra
    const id_pase = req.body.pase
    const sqlInsert = "INSERT INTO tb_usuarios (nombre, fecha_compra, id_pase) VALUES (?,?,?)";
    db.query(sqlInsert, [nombre, fecha_compra, id_pase],(err, result) => {
        res.send("Enviado");
    });
})

/*== REPORTE ==*/
app.get("/api/reporte/:desde/:hasta", (req, res) => {
    const desde = req.params.desde
    const hasta = req.params.hasta
    const sqlSelect = "SELECT tb_usuarios.id, tb_usuarios.nombre, tb_usuarios.fecha_compra, tb_pases.tipo, tb_pases.costo, tb_pases.pases FROM tb_usuarios INNER JOIN tb_pases ON tb_usuarios.id_pase = tb_pases.id WHERE tb_usuarios.fecha_compra >= ? AND tb_usuarios.fecha_compra <= ?";
    db.query(sqlSelect, [desde,hasta], (err, result) => {
        res.send(result);
    })
})

