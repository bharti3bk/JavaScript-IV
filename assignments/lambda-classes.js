// CODE here for your Lambda Classes

class Person {

 constructor(personAttributes){
    this.age = personAttributes.age;
    this.name = personAttributes.name;
    this.locations = personAttributes.locations;
 }
 speak(){
    return `Hello my name is ${this.name} `; 
 }

}  


class Instructor extends Person {

    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPharse = instructorAttributes.catchPharse;
    }  

    demo(subject){
    console.log("Today we are learning about " + subject);
    }  

    grade(student , subject){
     console.log(this.name + " recives a perfect score on " + subject);
    }
}     


class Student extends Person {

    constructor(studentAttribuites){
     super(studentAttribuites);
     this.previousBackground = studentAttribuites.previousBackground;
     this.className = studentAttribuites.className;
     this.favSubjects = studentAttribuites.favSubjects;
    }

   listsSubjects()
   {
       console.log(this.favSubjects);
   } 
   
   PRAssignment(subject){
      console.log(this.name + " has submitted a PR for " + subject);
   }
   
  sprintChallenge(subject){
      console.log(this.name + " has begun sprint challenge on " + subject);
   }

}  

class ProjectManagers extends Instructor {
   
    constructor(pmAttribuites){
      super(pmAttribuites);
      this.gradClassName = pmAttribuites.gradClassName;
      this.favInstructor = pmAttribuites.favInstructor;  
    }  

   standUp(slackChannelName){
      console.log(this.name + " announces to " + slackChannelName );
   }  

   debugsCode(studentinfo ,subjectName){
       console.log( this.name + " debuges " + subjectName);
   }

}  



/* Testing Classes ................................................................*/
const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!', 
   
});

  const Peggy = new Student({
    name: 'Peggy',
    age: 18,
    location: 'Florida',
    previousBackground: 'High School last month',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});
    const kevin = new Student({
    name: "Kevin",
    age: 28,
    location: "California",
    previousBackground: "Table Games Dealer",
    className: "WEB21",
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});
  


  const Joe = new ProjectManagers({
    name: 'Joe',
    age: 'Maybe 26',
    gradClassName: 'WEBPT2',
    favInstructor: 'Me?',
    location: 'California',
    specialty: 'React',
    favLanguage: 'JavaScript, Python, Elm etc.',
    catchPhrase: "Practice Flex Zombies !!!",
});

  const Sam = new ProjectManagers({
    name: 'Sam',
    age: '34',
    gradClassName: 'WEB18',
    favInstructor: 'Professor Lambda',
    location: 'Maine',
    specialty: 'Redux',
    favLanguage: 'JavaScript, C++, Python.',
    catchPhrase: "You shall not pass!",
});

console.log(Peggy.speak());
console.log(dan.demo("CSS"));
console.log(dan.grade( "Peggy" , "HTML"));
console.log(Peggy. listsSubjects());
console.log(Peggy.PRAssignment("JavaScript"));
console.log(Peggy.sprintChallenge("Java"));
console.log(Sam.standUp("WEB21")); 
console.log(Sam.debugsCode("beck" , "Oprating System"));



