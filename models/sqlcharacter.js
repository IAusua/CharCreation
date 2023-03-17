const {Model, DataTypes}= require ("sequelize")
const sequelize = require('../config/connection');

class Character extends Model{
    checkPassword(loginPw){
        return bcrypt.compareSync(loginPw,this.password);
    }
}

Character.init(
    {
    name: {
      type: DataTypes.STRING
    },
    race: {
      type: DataTypes.STRING
    },
    classType: {
      type: DataTypes.STRING
    },
    level: {
      type: DataTypes.INTEGER
    },
    hitpoints: {
      type: DataTypes.INTEGER
    },
    armorClass: {
        type: DataTypes.INTEGER
      },
    speed: {
        type: DataTypes.INTEGER
      },
    proficiencyBonus: {
        type: DataTypes.INTEGER
      },
     
    passiveWisdom: {
        type: DataTypes.INTEGER
      },
    
    skills: {
        type: DataTypes.STRING
      },
   
    abilities: {
        type: DataTypes.STRING
      },
   
    savingThrows: {
        type: DataTypes.INTEGER
      },
    
    equipment: {
        type: DataTypes.STRING
      },
   
    spells: {
        type: DataTypes.STRING 
      },
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: 'character'
    }
);
  
module.exports = character;