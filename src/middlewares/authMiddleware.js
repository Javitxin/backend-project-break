const jwt = require('jsonwebtoken');
const {hashedSecret} = require('../config/configcryp')

function generateToken(user){
    return jwt.sign({user: user.uid},hashedSecret, {expiresIn: '1h'})
}

const authenticate = async (req, res, next) =>{
    const token = req.session.token;
    if(!token){
        console.log('token no generado')
        return res.status(401).send('<h2>Error de Acceso<h2><a href="/">Volver</a>');
    }
    jwt.verify(token, hashedSecret, (err, decoded)=>{
        if(err){
            return res.status(401).json({mensaje:'token invalido'});
        }
        req.user = decoded.user;
        next();
    })  
}

module.exports = {authenticate, generateToken}