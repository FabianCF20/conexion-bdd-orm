const { Sequelize, DataTypes } = require('sequelize');

// Configurar la conexión a la base de datos
const sequelize = new Sequelize('parqueadero_2023', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' 
});

// Definir el modelo Administrador
const Administrador = sequelize.define('Administrador', {
  IdAdministrador: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Celular: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Contraseña: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Cedula: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'administrador',
  timestamps: false
});

// Conectar a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente.');

    // Obtener todos los registros de la tabla Administrador
    return Administrador.findAll();
  })
  .then(administradores => {
    console.log('Administradores encontrados:');
    console.log(administradores);
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });