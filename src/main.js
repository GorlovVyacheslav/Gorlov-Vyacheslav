const number = '25,1';
const project = 'проект';
const team = `команда`;
const howMuch = 'Сколько';
const sentence = 'нужно программистов чтобы сделать проект?'
console.log(`${howMuch} ${sentence.replace('проект',project)} ${number.replace('25,1','1,25')} ${team}`);
const buddaarray = ['Так, когда Будда достиг Просветления',
  'он обнаружил',
  'что больше',
  'не',
  'ощущает себя мишенью',
  'Он',
  'не',
  'был больше ни телом,к которому рано или поздно',
  '...']
console.log(buddaarray.join());


const oldjaScript = 'jaScript';
console.log(oldjaScript.replace('jaScript', 'JavaScript'));

const frameworks = [4.7, 'Angular', '6Angular', 'React/Redux'] 
 
 
const x =
  'google released new version ' + frameworks[1] + Math.floor(frameworks[0]) +
  ' But real speed is ' + `${frameworks[frameworks.length - 1]}`; 
console.log(x); 
 
const angular4 = frameworks[1] + Math.floor(frameworks[0])
const reactredux = frameworks[frameworks.length - 1]
const solution = `google released new version ${angular4} But real speed is ${reactredux} `
console.log(solution);

const myCars = 'BMW,VAZ'
const speed = [360];
console.log(`Все мои ${myCars} ездят на скорости ${speed}`);

const myname = 'VYACHESLAV';

const upper = myname[0].toLowerCase() + myname.slice(1);

console.log(upper);

alert('Осторожно Вяч вышел в хакеры!');
//запомнить
