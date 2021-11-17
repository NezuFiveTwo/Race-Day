let raceNumber = Math.floor(Math.random() * 1000);
let registered = false; 
let age = 18; 

if(registered && age > 18){
  raceNumber += 1000; 
}

if(registered && age > 18){
  console.log(`The race will begin at 9:30. Your race number is ${raceNumber}.`);
}else if(!registered && age > 18){
  console.log(`The race will begin at 11:00. Your race number is ${raceNumber}.`)
}else if (!registered && age < 18){
  console.log(`The race will begin at 12:30. your race number is ${raceNumber}.`)
}else if (registered &&  age === 18){
  console.log('Please see the registration desk.')
}else if (!registered && age === 18){
  console.log('Please see the registration desk.')
}
