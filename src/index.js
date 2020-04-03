// eslint-disable-next-line linebreak-style
import {TextArea} from './scripts/TextArea.js';
import {GenerateKeys} from './scripts/GenerateKeys.js';
import {CheckPushKeys} from './scripts/CheckPushKeys.js';

const main = document.createElement('main');
main.className = 'main'
const textArea = new TextArea().generateTextArea();
const generateKeys = new GenerateKeys().init();
const checkPushKeys = new CheckPushKeys();
let isShiftPush = false;
let isAltPush = false;


if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', 'en');
}
let lang = localStorage.getItem('lang');
// console.log(generateKeys);
// const keysUpper = new Keys().generateLetter();
// console.log(keysUpper);
// const keyabord = new Keys().init();
document.addEventListener('keydown', function(event) {
    let lang = localStorage.getItem('lang');
    console.log(`${event.code}`);
    console.log(`${event.key}`);
    console.log(`${event.keyCode}`);
    
    if (event.code == 'ShiftLeft') {        
        isShiftPush = true;
        checkPushKeys.shift(lang);        
        // checkPushKeys.changeLang(isAltPush && isShiftPush,generateKeys);
        checkPushKeys.changeLang(isAltPush && isShiftPush,lang);        
        // checkPushKeys.changeLetters(localStorage.getItem('lang'), generateKeys);
    }
    if (event.code == 'AltLeft') {
        
        isAltPush = true;
        checkPushKeys.changeLang(isAltPush && isShiftPush,lang);
        
    }    
    const a = document.querySelector(`.${event.code}`);
    a.classList.add('active_key');    
});

document.addEventListener('keyup', function(event) {  
    let lang = localStorage.getItem('lang');
    const a = document.querySelector(`.${event.code}`);

    if (a.classList.contains('active_key')) {
        a.classList.remove('active_key');
    }
    if (event.code == 'ShiftLeft') {   
      isShiftPush = false;      
      checkPushKeys.unshift(lang);
    }
    if (event.code == 'AltLeft') {
      isAltPush = false;      
    }
});

const body = document.body;
main.appendChild(textArea);
main.appendChild(generateKeys);
body.appendChild(main);

let hiddenLang = (lang == 'ru') ? 'en' : 'ru';

let node = document.querySelectorAll(`.${hiddenLang}`)
node.forEach (item => {
  item.classList.add('hidden');
})
// body.appendChild(keys);


