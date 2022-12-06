const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{ 
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,//no puede estar vacio
      primaryKey: true//clave primaria o id
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        is: /^[a-zA-Z\s]*$/
      }
    },
    img:{
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        min:1,
        max:100
      },
    },
    hp:{
      type:DataTypes.STRING,
      allowNull:true,
      validate:{
        min:1,
        max:150
      },
    },
    attack:{
      type:DataTypes.STRING,
      allowNull:true,
      validate:{
        min:1,
        max:200
      },
    },
    defense:{
      type:DataTypes.STRING,
      allowNull:true,
      validate:{
        min:1,
        max:200
      },
    },
    speed:{
      type:DataTypes.STRING,
      allowNull:true,
      validate:{
        min:1,
        max:100
      },
    },
    weight:{
      type:DataTypes.STRING,
      allowNull:true,
      validate:{
        min:1,
        max:1500
      }
    },
    height:{
      type:DataTypes.STRING,
      allowNull:true,
      validate:{
        min:1,
        max:100
      }
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
