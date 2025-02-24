const readLineSync = require('readline-sync'); 

const languages = ['Javascript', 'Python', 'Java', 'C++']; 


const selectedIndex = readLineSync.keyInSelect(languages, 'What is your preferred language?');

if (selectedIndex === -1) {
  console.log('No language selected.'); 
} else {
  console.log(`You selected: ${languages[selectedIndex]}`); 
}