stamina = 10

function run(){
  console.log("Your stamina is "+stamina)
  stamina -= 1
}

for (tiredness = 1; tiredness <= 10; tiredness++){
  run()
  if(stamina == 0){
    console.log('Your stamina is gone. Stamina ' + stamina+ '.')
  }
}
console.log('I\'m too tired to keep running!')