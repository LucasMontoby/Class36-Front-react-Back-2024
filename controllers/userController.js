const User = require('../models/User');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');

const userController = {
    register: async (req, res) =>{
        const {username, email, password} = req.body;
    try{
            console.log('cuerpo de la solicitud', req.body);
            console.log('Antes de crear el usuario', {username, email, password} );
        

        if(!username || !email || !password){
            return res.status(400).json({error:'Todos los campos deben ser completados'});
        }

        const user = new User({username, email, password});
        await user.save();

        console.log('Luego de crear el usuario', user);
        res.status(201).json({message: 'Usuario registrado'})
        }
    
    catch (error){
                console.error('Error el registrar usuario', error)
        }
    },

    login: async (req, res) => {
        const {username, password} = req.body;

try{
        let user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: 'No existe un usuario con ese nombre' })
        }

        const passwordCompare = await bcrypt.compare(password, username);
        if (!passwordCompare) {
            return res.status(400).json({ message: 'Contraseña incorrecta' })
        } 

        const secretKey = process.env.SECRET_KEY || 'defaultsecret';
        const token = jwt.sign({userId: user._id}, secretKey, {expiresIn: '1h'})
        res.status(200).json({token})
    }
    catch(error){
        res.status(500).json({error: 'Error en el incio de sesión'})
    }
}

};

module.exports = userController;