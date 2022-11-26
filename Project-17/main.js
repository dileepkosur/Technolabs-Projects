class School {
  constructor(name, level, numberOfStudents) {
    this._name=name;
    this._level=level;
    this._numberOfStudents=numberOfStudents;
  }
  get name(){
    return this._name;
  }

  get level(){
    return this._level;
  }

  get numberOfStudents(){
    return this._numberOfStudents;
  }
  set numberOfStudents(){
    if (typeof newNumber==='number'){
      this._numberOfStudents=newNumber;
    } else {
      console.log ('Invalid input: numberOfStudents must be set to a Number.');
    }
  }

  quickFacts(){
    console.log(this._name+" educates "+this._numberOfStudents+" students at the "+this._level+" school level.");
  }
  static pickSubstituteTeacher(substituteTeachers){
    let randomNumber=Math.floor(Math.random()*substituteTeachers.length);
    return substituteTeachers[randomNumber];
  }
}

class PrimarySchool extends School{
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy=pickupPolicy;
  }

  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class HighSchool extends School{
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high', numberOfStudents);
    this._sportsTeams=sportsTeams;
  }

  get sportsTeams(){
    console.log(this._sportsTeams);
    return this._sportsTeams;
  }
}

const lorraine_hansbury=new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraine_hansbury.quickFacts();
const sub=School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])
const al_e_Smith=new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(al_e_Smith.sportsTeams);
