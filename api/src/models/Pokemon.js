const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{ 
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,//crea una id ramdom de 32 caracteres
      allowNull:false,//no puede estar vacio
      primaryKey: true//clave primaria o id
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    hp:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    attack:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    defense:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    speed:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    weight:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    height:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },

  },{
    timestamps:false
  });
};
