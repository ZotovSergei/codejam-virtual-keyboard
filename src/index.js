// eslint-disable-next-line linebreak-style
import {TextArea} from './scripts/TextArea.js';
import {GenerateKeys} from './scripts/GenerateKeys.js';

const main = document.createElement('main');
main.className = 'main'
const textArea = new TextArea().generateTextArea();
const generateKeys = new GenerateKeys().init();
console.log(generateKeys);
// const keysUpper = new Keys().generateLetter();
// console.log(keysUpper);
// const keyabord = new Keys().init();
document.addEventListener('keydown', function(event) {
  // if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
    // alert('Отменить!')
    console.log(`${event.code}`);
    console.log(`${event.key}`);
    console.log(`${event.keyCode}`);
    const a = document.querySelector(`.${event.code}`);    
    a.classList.add('active_key');    
});

document.addEventListener('keyup', function(event) {
  // if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
    // alert('Отменить!')    
    const a = document.querySelector(`.${event.code}`);
    if (a.classList.contains('active_key')) {
      a.classList.remove('active_key');
    }    
});

const body = document.body;
main.appendChild(textArea);
main.appendChild(generateKeys);
body.appendChild(main);
// body.appendChild(keys);


