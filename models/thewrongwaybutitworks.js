// whole things needs to be reformated for sequelize 
// const {Model, DataTypes}= require ("sequelize")
// const sequelize = require('../config/connection');

// class Character extends Model{
//   Character.init()
//     constructor(name, race, classType, level, hitPoints, armorClass, speed, proficiencyBonus, passiveWisdom, skills, abilities, savingThrows, equipment, spells) {
//       this.name = name;
//       this.race = race;
//       this.classType = classType;
//       this.level = level;
//       this.hitPoints = hitPoints;
//       this.armorClass = armorClass;
//       this.speed = speed;
//       this.proficiencyBonus = proficiencyBonus;
//       this.passiveWisdom = passiveWisdom;
//       this.skills = skills;
//       this.abilities = abilities;
//       this.savingThrows = savingThrows;
//       this.equipment = equipment;
//       this.spells = spells;
//     }
  
//     // Getters and setters
//     getName() {
//       return this.name;
//     }
  
//     setName(name) {
//       this.name = name;
//     }
  
//     getRace() {
//       return this.race;
//     }
  
//     setRace(race) {
//       this.race = race;
//     }
  
//     getClass() {
//       return this.classType;
//     }
  
//     setClass(classType) {
//       this.classType = classType;
//     }
  
//     getLevel() {
//       return this.level;
//     }
  
//     setLevel(level) {
//       this.level = level;
//     }
  
//     getHitPoints() {
//       return this.hitPoints;
//     }
  
//     setHitPoints(hitPoints) {
//       this.hitPoints = hitPoints;
//     }
  
//     getArmorClass() {
//       return this.armorClass;
//     }
  
//     setArmorClass(armorClass) {
//       this.armorClass = armorClass;
//     }
  
//     getSpeed() {
//       return this.speed;
//     }
  
//     setSpeed(speed) {
//       this.speed = speed;
//     }
  
//     getProficiencyBonus() {
//       return this.proficiencyBonus;
//     }
  
//     setProficiencyBonus(proficiencyBonus) {
//       this.proficiencyBonus = proficiencyBonus;
//     }
  
//     getPassiveWisdom() {
//       return this.passiveWisdom;
//     }
  
//     setPassiveWisdom(passiveWisdom) {
//       this.passiveWisdom = passiveWisdom;
//     }
  
//     getSkills() {
//       return this.skills;
//     }
  
//     setSkills(skills) {
//       this.skills = skills;
//     }
  
//     getAbilities() {
//       return this.abilities;
//     }
  
//     setAbilities(abilities) {
//       this.abilities = abilities;
//     }
  
//     getSavingThrows() {
//       return this.savingThrows;
//     }
  
//     setSavingThrows(savingThrows) {
//       this.savingThrows = savingThrows;
//     }
  
//     getEquipment() {
//       return this.equipment;
//     }
  
//     setEquipment(equipment) {
//       this.equipment = equipment;
//     }
  
//     getSpells() {
//       return this.spells;
//     }
  
//     setSpells(spells) {
//       this.spells = spells;
//     }
//   }
  
//   class Skill {
//     constructor(name, modifier, proficient) {
//       this.name = name;
//       this.modifier = modifier;
//       this.proficient = proficient;
//     }
  
//     // Getters and setters
//     getName() {
//       return this.name;
//     }
  
//     setName(name) {
//       this.name = name;
//     }
  
//     getModifier() {
//       return this.modifier;
//     }
  
//     setModifier(modifier) {
//       this.modifier = modifier;
//     }
  
//     isProficient() {
//       return this.proficient;
//     }
  
//     setProficient(proficient) {
//       this.proficient = proficient;
//     }
//   }
  
//   class Ability {
//     constructor(name, score, modifier)
//   }