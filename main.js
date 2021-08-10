let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = false;
let runnerAge = 15;
if(runnerAge > 18 && earlyRegister){
  raceNumber += 1000;
}

if(runnerAge > 18 && earlyRegister){
  console.log(`Runner ${raceNumber} will ran the race at 9:30 am.`);
}
else if(runnerAge > 18 && !earlyRegister){
  console.log(`Runner ${raceNumber} will ran the race at 11:30 am.`);
}
else if(runnerAge < 18){
  console.log(`Runner ${raceNumber} will ran the race at 12:30 pm.`);
}
else{
  console.log(`See the registration desk`);
}