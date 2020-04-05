// eslint-disable-next-line linebreak-style
import { TextArea } from './scripts/TextArea.js';
import { Header } from './scripts/Header.js';
import { Describe } from './scripts/Describe.js';
import { GenerateKeys } from './scripts/GenerateKeys.js';
import { CheckPushKeys } from './scripts/CheckPushKeys.js';

const main = document.createElement('main');
main.className = 'main';
const textArea = new TextArea().generateTextArea();
const header = new Header().generateHeader();
const describe = new Describe().generateDescribe();
const generateKeys = new GenerateKeys().init();
const checkPushKeys = new CheckPushKeys();
let isShiftPush = false;
let isAltPush = false;
let countCapsLockPush = 0;

if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', 'en');
}
let lang = localStorage.getItem('lang');
// eslint-disable-next-line func-names
document.addEventListener('keydown', function (event) {
  document.getElementById('t-id').focus();
  lang = localStorage.getItem('lang');
  console.log(`${event.code}`);
  console.log(`${event.key}`);
  console.log(`${event.keyCode}`);

  switch (event.code) {
    case 'ShiftLeft':
      isShiftPush = true;
      checkPushKeys.shift(lang);
      checkPushKeys.changeLang(isAltPush && isShiftPush, lang);
      break;
    case 'AltLeft':
      isAltPush = true;
      event.preventDefault();
      checkPushKeys.changeLang(isAltPush && isShiftPush, lang);
      break;
    case 'Tab':
    case 'AltRight':
    case 'MetaLeft':
    // case 'Ctrl':
      event.preventDefault();
      break;
    case 'CapsLock':
      checkPushKeys.capsLock(countCapsLockPush, lang);
      countCapsLockPush = (countCapsLockPush > 0) ? 0 : countCapsLockPush + 1;
      break;
    default:
      break;
  }
  const a = document.querySelector(`.${event.code}`);
  if (a) {
    a.classList.add('active_key');
  }
});

// eslint-disable-next-line func-names
document.addEventListener('keyup', function (event) {
  document.getElementById('t-id').focus();
  lang = localStorage.getItem('lang');
  const a = document.querySelector(`.${event.code}`);
  if (a) {
    if (a.classList.contains('active_key')) {
      a.classList.remove('active_key');
    }
  }
  if (event.code === 'ShiftLeft') {
    isShiftPush = false;
    checkPushKeys.unshift(lang);
  }
  if (event.code === 'AltLeft') {
    isAltPush = false;
  }
});


const body = document.body;

main.appendChild(textArea);
main.appendChild(generateKeys);
main.appendChild(describe);
body.appendChild(header);
body.appendChild(main);

let hiddenLang = (lang === 'ru') ? 'en' : 'ru';

let node = document.querySelectorAll(`.${hiddenLang}`);
node.forEach(item => {
  item.classList.add('hidden');
});
node = document.querySelectorAll('.unshift');
node.forEach(item => {
  item.classList.add('hidden');
});

const nodeKeys = document.querySelectorAll('.key');
nodeKeys.forEach(item=> {
  item.addEventListener('click', (event) => {
    console.dir(event);
    console.log(event.target.innerText);
    switch (event.target.innerText) {
      case 'Backspace':
        if (textArea.value.length !== 0) {
          textArea.value = textArea.value.slice(0, -1);
        }
        break;
      case 'Alt':
      case 'Shift':
      case 'Ctrl':
      case 'Win':
      case 'CapsLock':
        break;
      case 'Tab':
        // eslint-disable-next-line no-tabs
        textArea.value += '    ';
        break;
      case 'Enter':
        // eslint-disable-next-line no-tabs
        textArea.value += '\n';
        break;
      default:
        if (event.target.classList.contains('Space')) {
          textArea.value += ' ';
        } else {
          textArea.value += event.target.innerText;
        }
        break;
    }
  });
});
