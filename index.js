function scuberGreetingForFeet(distance){
  if (distance<400){
    return "This one is on me!"
  }
  else if (distance>2000 && distance<=2500){
    return 'I will gladly take your thirty bucks.'
  }
  else if (distance>2500){
    return 'No can do.'
  }
}

// console.log (scuberGreetingForFeet(2600))

function ternaryCheckCity(city){

  return city === 'NYC'? 'Ok, sounds good.':'No go.'
}

function switchOnCharmFromTip(tip){
  let answ;

  switch (tip){
    case 'generous': 
      answ = 'Thank you so much.';
      break;
    case 'not as generous': 
      answ= 'Thank you';
      break;
    default: 
      answ='Bye.';
      break;

  }
return answ
}

console.log (switchOnCharmFromTip('not as generous'))