import { Key } from './Key.js';


export class GenerateKeys {
  constructor() {
    this.divWrapper = document.createElement('div');
    this.divWrapper.className = 'wraper__keyboard';
    this.map = new Map();
    this.lang = localStorage.getItem('lang') || 'en';
  }

  generateExp() {
    this.map.set('`', new Key('`', 192, 'Backquote', 'shift en', 'ru', 'unshift en', '~', '`', 'ё').generate());
    this.map.set('-', new Key('-', 189, 'Minus', 'shift', 'unshift en', 'unshift ru ', '_', '-', '_').generate());
    this.map.set('=', new Key('=', 187, 'Equal', 'shift', 'unshift en', 'unshift ru ', '+', '=', '+').generate());
    this.map.set('Backspace', new Key('Backspace', 8, 'Backspace', 'en', 'ru', null, null, 'Backspace', 'Backspace', true).generate());
    this.map.set('Tab', new Key('Tab', 9, 'Tab', 'en', 'ru', null, null, 'Tab', 'Tab', true).generate());
    this.map.set('[', new Key('[', 219, 'BracketLeft', 'shift en', 'ru', 'unshift en', '{', '[', 'х').generate());
    this.map.set(']', new Key(']', 221, 'BracketRight', 'shift en', 'ru', 'unshift en', '}', ']', 'ъ').generate());
    this.map.set('\\', new Key('\\', 220, 'Backslash', 'shift', 'unshift en', 'unshift ru', '/', '\\', '|').generate());
    this.map.set('CapsLock', new Key('CapsLock', 20, 'CapsLock', 'en', 'ru', null, null, 'CapsLock', 'CapsLock', true).generate());
    this.map.set(';', new Key(';', 186, 'Semicolon', 'shift en', 'ru', 'unshift en', ':', ';', 'ж').generate());
    this.map.set('\'', new Key('\'', 222, 'Quote', 'shift en', 'ru', 'unshift en', '"', '\'', 'э').generate());
    this.map.set('Enter', new Key('Enter', 13, 'NumpadEnter', 'en', 'ru', null, null, 'Enter', 'Enter', true).generate());
    this.map.set('ShiftLeft', new Key('Shift', 16, 'ShiftLeft', 'en', 'ru', null, null, 'Shift', 'Shift', true).generate());
    this.map.set(',', new Key(',', 188, 'Comma', 'shift en', 'ru', 'unshift en', '<', ',', 'б').generate());
    this.map.set('.', new Key('.', 190, 'Period', 'shift en', 'ru', 'unshift en', '>', '.', 'ю').generate());
    this.map.set('/', new Key('/', 191, 'Slash', 'en', 'shift ru', 'unshift ru', ',', '/', '.').generate());
    this.map.set('ShiftRight', new Key('Shift', 16, 'ShiftRight', 'en', 'ru', null, null, 'Shift', 'Shift', true).generate());
    this.map.set('ArrowUp', new Key('ArrowUp', 38, 'ArrowUp', 'en', 'ru', null, null, 'Up', 'Up', true).generate());
    this.map.set('ControlLeft', new Key('Control', 17, 'ControlLeft', 'en', null, null, 'ru', 'Ctrl', 'Ctrl', true).generate());
    this.map.set('MetaLeft', new Key('Meta', 91, 'MetaLeft', 'en', 'ru', null, null, 'Win', 'Win', true).generate());
    this.map.set('AltLeft', new Key('Alt', 18, 'AltLeft', 'en', 'ru', null, null, 'Alt', 'Alt', true).generate());
    this.map.set('Space', new Key('Space', 32, 'Space', 'en', 'ru', null, null, ' ', ' ', true).generate());
    this.map.set('AltRight', new Key('Alt', 18, 'AltRight', 'en', 'ru', null, null, 'Alt', 'Alt', true).generate());
    this.map.set('ControlRight', new Key('Ctrl', 17, 'ControlRight', 'en', 'ru', null, null, 'Ctrl', 'Ctrl', true).generate());
    this.map.set('ArrowLeft', new Key('ArrowLeft', 37, 'ArrowLeft', 'en', 'ru', null, null, 'Left', 'Left', true).generate());
    this.map.set('ArrowDown', new Key('ArrowDown', 40, 'ArrowDown', 'en', 'ru', null, null, 'Down', 'Down', true).generate());
    this.map.set('ArrowRight', new Key('ArrowRight', 39, 'ArrowRight', 'en', 'ru', null, null, 'Right', 'Right', true).generate());
    return this.map;
  }

  // eslint-disable-next-line class-methods-use-this
  generate1row(keyExp) {
    const div = document.createElement('div');
    div.className = 'row_keys 1_row';
    div.append(keyExp.get('Tab'));
    div.append(new Key('Q', 81, 'KeyQ', 'en', 'ru', null, null, 'q', 'й').generate());
    div.append(new Key('W', 87, 'KeyQ', 'en', 'ru', null, null, 'w', 'ц').generate());
    div.append(new Key('E', 69, 'KeyE', 'en', 'ru', null, null, 'e', 'у').generate());
    div.append(new Key('R', 82, 'KeyR', 'en', 'ru', null, null, 'r', 'к').generate());
    div.append(new Key('T', 84, 'KeyT', 'en', 'ru', null, null, 't', 'е').generate());
    div.append(new Key('Y', 89, 'KeyY', 'en', 'ru', null, null, 'y', 'н').generate());
    div.append(new Key('U', 85, 'KeyU', 'en', 'ru', null, null, 'u', 'г').generate());
    div.append(new Key('I', 73, 'KeyI', 'en', 'ru', null, null, 'i', 'ш').generate());
    div.append(new Key('O', 79, 'KeyO', 'en', 'ru', null, null, 'o', 'щ').generate());
    div.append(new Key('P', 80, 'KeyP', 'en', 'ru', null, null, 'p', 'з').generate());
    div.append(keyExp.get('['));
    div.append(keyExp.get(']'));
    div.append(keyExp.get('\\'));
    return div;
  }

  // eslint-disable-next-line class-methods-use-this
  generate2row(keyExp) {
    const div = document.createElement('div');
    div.className = 'row_keys 2_row';
    div.append(keyExp.get('CapsLock'));
    div.append(new Key('A', 65, 'KeyA', 'en', 'ru', null, null, 'a', 'ф').generate());
    div.append(new Key('S', 83, 'KeyS', 'en', 'ru', null, null, 's', 'ы').generate());
    div.append(new Key('D', 68, 'KeyD', 'en', 'ru', null, null, 'd', 'в').generate());
    div.append(new Key('F', 70, 'KeyF', 'en', 'ru', null, null, 'f', 'а').generate());
    div.append(new Key('G', 71, 'KeyG', 'en', 'ru', null, null, 'g', 'п').generate());
    div.append(new Key('H', 72, 'KeyH', 'en', 'ru', null, null, 'h', 'р').generate());
    div.append(new Key('J', 74, 'KeyJ', 'en', 'ru', null, null, 'j', 'о').generate());
    div.append(new Key('K', 75, 'KeyK', 'en', 'ru', null, null, 'k', 'л').generate());
    div.append(new Key('L', 76, 'KeyL', 'en', 'ru', null, null, 'l', 'д').generate());
    div.append(keyExp.get(';'));
    div.append(keyExp.get('\''));
    div.append(keyExp.get('Enter'));
    return div;
  }

  // eslint-disable-next-line class-methods-use-this
  generate3row(keyExp) {
    const div = document.createElement('div');
    div.className = 'row_keys 3_row';
    div.append(keyExp.get('ShiftLeft'));
    div.append(new Key('Z', 90, 'KeyZ', 'en', 'ru', null, null, 'z', 'я').generate());
    div.append(new Key('X', 88, 'KeyX', 'en', 'ru', null, null, 'x', 'ч').generate());
    div.append(new Key('C', 67, 'KeyC', 'en', 'ru', null, null, 'c', 'с').generate());
    div.append(new Key('V', 86, 'KeyV', 'en', 'ru', null, null, 'v', 'м').generate());
    div.append(new Key('B', 66, 'KeyB', 'en', 'ru', null, null, 'b', 'и').generate());
    div.append(new Key('N', 78, 'KeyN', 'en', 'ru', null, null, 'n', 'т').generate());
    div.append(new Key('M', 77, 'KeyM', 'en', 'ru', null, null, 'm', 'ь').generate());
    div.append(keyExp.get(','));
    div.append(keyExp.get('.'));
    div.append(keyExp.get('/'));
    div.append(keyExp.get('ArrowUp'));
    div.append(keyExp.get('ShiftRight'));
    return div;
  }

  // eslint-disable-next-line class-methods-use-this
  generate4row(keyExp) {
    const div = document.createElement('div');
    div.className = 'row_keys 4_row';
    div.append(keyExp.get('ControlLeft'));
    div.append(keyExp.get('MetaLeft'));
    div.append(keyExp.get('AltLeft'));
    div.append(keyExp.get('Space'));
    div.append(keyExp.get('AltRight'));
    div.append(keyExp.get('ControlRight'));
    div.append(keyExp.get('ArrowLeft'));
    div.append(keyExp.get('ArrowDown'));
    div.append(keyExp.get('ArrowRight'));
    return div;
  }

  // eslint-disable-next-line class-methods-use-this
  generateNrow(keyExp) {
    const div = document.createElement('div');
    div.className = 'row_keys number_row';
    div.append(keyExp.get('`'));
    div.append(new Key('1', 49, 'Digit1', 'shift', 'unshift en', 'unshift ru', '!', '1', '!').generate());
    div.append(new Key('2', 50, 'Digit2', 'shift', 'unshift en', 'unshift ru', '"', '2', '@').generate());
    div.append(new Key('3', 51, 'Digit3', 'shift', 'unshift en', 'unshift ru', '№', '3', '#').generate());
    div.append(new Key('4', 52, 'Digit4', 'shift', 'unshift en', 'unshift ru', ';', '4', '$').generate());
    div.append(new Key('5', 53, 'Digit5', 'shift', 'unshift en', 'unshift ru', '%', '5', '%').generate());
    div.append(new Key('6', 54, 'Digit6', 'shift', 'unshift en', 'unshift ru', ':', '6', '^').generate());
    div.append(new Key('7', 55, 'Digit7', 'shift', 'unshift en', 'unshift ru', '?', '7', '&').generate());
    div.append(new Key('8', 56, 'Digit8', 'shift', 'unshift en', 'unshift ru', '*', '8', '*').generate());
    div.append(new Key('9', 57, 'Digit9', 'shift', 'unshift en', 'unshift ru', '(', '9', '(').generate());
    div.append(new Key('0', 48, 'Digit0', 'shift', 'unshift en', 'unshift ru', ')', '0', ')').generate());
    div.append(keyExp.get('-'));
    div.append(keyExp.get('='));
    div.append(keyExp.get('Backspace'));
    return div;
  }

  init() {
    let keyExp = this.generateExp();

    let divNrow = this.generateNrow(keyExp);
    let div1row = this.generate1row(keyExp);
    let div2row = this.generate2row(keyExp);
    let div3row = this.generate3row(keyExp);
    let div4row = this.generate4row(keyExp);

    this.divWrapper.appendChild(divNrow);
    this.divWrapper.appendChild(div1row);
    this.divWrapper.appendChild(div2row);
    this.divWrapper.appendChild(div3row);
    this.divWrapper.appendChild(div4row);

    return this.divWrapper;
  }
}
