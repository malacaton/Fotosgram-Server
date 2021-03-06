import { Schema } from 'mongoose';

const usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: [ true, 'El nombre es requerido' ]
  },
  avatar: {
    type: String,
    default: 'av-1.png'
  },
  email: {
    type: String,
    unique: true,
    required: [ true, 'El correo es requerido' ]
  },
  password: {
    type: String,
    required: [ true, 'La contraseña es requerida' ]
  }
});