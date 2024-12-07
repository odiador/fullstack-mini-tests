const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const UserModel = require('./model/users.js');
const connectDB = require('./database/mongo.js');
dotenv.config();
const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.post('/api/addUser', async function (req, res) {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    const user = new UserModel({ name, email, password });
    const userFound = await UserModel.findOne({ email });
    if (userFound) {
        return res.status(409).json({ error: "El correo ya está registrado." });
    }
    user.save();
    return res.status(200).json({
        msg: `Felicidades ${name}, ¡has sido registrado exitosamente!`
    });
});


app.post("/api/get", async (req, res) => {
    const { email } = req.body;
    if (!email)
        return res.status(400).json({
            error: "Todos los campos son obligatorios"
        });
    const user = await UserModel.findOne({ email });
    if (user)
        return res.status(200).json({
            msg: "El usuario fue encontrado",
            user: { name: user.name, email: user.email }
        });
    return res.status(400).json({
        error: "No se encontró el usuario con el email ingresado"
    });
});


app.post('/api/login', async function (req, res) {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ error: "Todos los campos son obligatorios" });

    const userFound = await UserModel.findOne({ email });
    if (userFound) {
        if (userFound.password !== password)
            return res.status(401).json({ error: "Correo o contraseña incorrecta." });
        return res.status(200).send({
            name: userFound.name,
        });
    }
    return res.status(401).json({ error: "Correo o contraseña incorrecta." });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
}); 
