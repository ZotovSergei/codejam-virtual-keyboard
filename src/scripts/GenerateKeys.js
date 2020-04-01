import {Key} from './Key.js'; 

/* eslint-disable no-debugger */
const divWrapper = document.createElement('div');
divWrapper.className = 'wraper__keyboard';
export class GenerateKeys {    
    generateLetter (start,end,sign) {
        let map = new Map();
        for (let i = start; i < end; i++) {
            start++;
            const element = String.fromCharCode(start);
            const a = new Key(element,start,`${sign}${element}`,`${element.toLowerCase()}`).generate();
            map.set(element,a);
        }
        return map;
    }
    generateExp() {
        let map = new Map();
        map.set('`', new Key('`' ,192,'Backquote','`').generate());
        map.set('-', new Key('-' ,189,'Minus','-').generate());
        map.set('=', new Key('=' ,187,'Equal','=').generate());
        map.set('Backspace', new Key('Backspace' , 8,'Backspace','Backspace').generate());
        map.set('Tab', new Key('Tab' ,9,'Tab','Tab').generate());
        map.set('[', new Key('[' ,219,'BracketLeft','[').generate());
        map.set(']', new Key(']' ,221,'BracketRight',']').generate());
        map.set('\\', new Key('\\' ,220,'Backslash','\\').generate());
        map.set('CapsLock', new Key('CapsLock' , 20,'CapsLock','CapsLock').generate());
        map.set(';', new Key(';' ,186,'Semicolon',';').generate());
        map.set('\'', new Key('\'' ,222,'Quote','\'').generate());
        map.set('Enter', new Key('Enter' ,13,'NumpadEnter','Enter').generate());
        map.set('ShiftLeft', new Key('Shift' ,16,'ShiftLeft','Shift').generate());
        map.set(',', new Key(',' ,188,'Comma',',').generate());
        map.set('.', new Key('.' ,190,'Period','.').generate());
        map.set('/', new Key('/' ,191,'Slash','/').generate());
        map.set('ShiftRight', new Key('Shift' ,16,'ShiftRight','Shift').generate());
        map.set('ArrowUp', new Key('ArrowUp' ,38,'ArrowUp','Up').generate());
        map.set('ControlLeft', new Key('Control' ,17,'ControlLeft','Ctrl').generate());
        map.set('MetaLeft', new Key('Meta' ,91,'MetaLeft','Win').generate());
        map.set('AltLeft', new Key('Alt' ,18,'AltLeft','Alt').generate());
        map.set('Space', new Key('Space' ,32,'Space',' ').generate());
        map.set('AltRight', new Key('Alt' ,18,'AltRight','Alt').generate());
        map.set('ControlRight', new Key('Ctrl' ,17,'ControlRight','Ctrl').generate());
        map.set('ArrowLeft', new Key('ArrowLeft' ,37,'ArrowLeft','Left').generate());
        map.set('ArrowDown', new Key('ArrowDown' ,40,'ArrowDown','Down').generate());
        map.set('ArrowRight', new Key('ArrowRight' ,39,'ArrowRight','Right').generate());
        return map;
    }
    generate1row(mapLetters,keyExp) {
        const div  = document.createElement('div');
        div.className = 'row_keys 1_row'; 

        div.append(keyExp.get('Tab'));
        div.append(mapLetters.get('Q'));
        div.append(mapLetters.get('W'));
        div.append(mapLetters.get('E'));
        div.append(mapLetters.get('R'));
        div.append(mapLetters.get('T'));
        div.append(mapLetters.get('Y'));
        div.append(mapLetters.get('U'));
        div.append(mapLetters.get('I'));
        div.append(mapLetters.get('O'));
        div.append(mapLetters.get('P'));
        div.append(keyExp.get('['));
        div.append(keyExp.get(']'));
        div.append(keyExp.get('\\'));
        return div;        
    }
    generate2row(mapLetters,keyExp) {
        const div  = document.createElement('div');
        div.className = 'row_keys 2_row';
        div.append(keyExp.get('CapsLock'));
        div.append(mapLetters.get('A'));
        div.append(mapLetters.get('S'));
        div.append(mapLetters.get('D'));
        div.append(mapLetters.get('F'));
        div.append(mapLetters.get('G'));
        div.append(mapLetters.get('H'));
        div.append(mapLetters.get('J'));
        div.append(mapLetters.get('K'));
        div.append(mapLetters.get('L'));
        div.append(keyExp.get(';'));
        div.append(keyExp.get('\''));
        div.append(keyExp.get('Enter'));        
        return div;
    }
    generate3row(mapLetters,keyExp) {
        const div  = document.createElement('div');
        div.className = 'row_keys 3_row';
        div.append(keyExp.get('ShiftLeft'));
        div.append(mapLetters.get('Z'));
        div.append(mapLetters.get('X'));
        div.append(mapLetters.get('C'));
        div.append(mapLetters.get('V'));
        div.append(mapLetters.get('B'));
        div.append(mapLetters.get('N'));
        div.append(mapLetters.get('M'));
        div.append(keyExp.get(','));
        div.append(keyExp.get('.'));
        div.append(keyExp.get('/'));        
        div.append(keyExp.get('ArrowUp'));
        div.append(keyExp.get('ShiftRight'));
        return div;        
    }
    generate4row(keyExp) {
        const div  = document.createElement('div');
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
    generateNrow(mapLetters,keyExp) {
        const div  = document.createElement('div');
        div.className = 'row_keys number_row';
        div.append(keyExp.get('`'));
        div.append(mapLetters.get('1'));
        div.append(mapLetters.get('2'));
        div.append(mapLetters.get('3'));
        div.append(mapLetters.get('4'));
        div.append(mapLetters.get('5'));
        div.append(mapLetters.get('6'));
        div.append(mapLetters.get('7'));
        div.append(mapLetters.get('8'));
        div.append(mapLetters.get('9'));
        div.append(mapLetters.get('0'));
        div.append(keyExp.get('-'));
        div.append(keyExp.get('='));
        div.append(keyExp.get('Backspace'));
        return div;        
    }
    init() {
        let keys = this.generateLetter(64,90,'Key');
        let keysNumber = this.generateLetter(47,57,'Digit');
        let keyExp = this.generateExp();
    
        let divNrow = this.generateNrow(keysNumber,keyExp);
        let div1row = this.generate1row(keys,keyExp);
        let div2row = this.generate2row(keys,keyExp);
        let div3row = this.generate3row(keys,keyExp);
        let div4row = this.generate4row(keyExp);
        
        divWrapper.appendChild(divNrow);
        divWrapper.appendChild(div1row);
        divWrapper.appendChild(div2row);
        divWrapper.appendChild(div3row);
        divWrapper.appendChild(div4row);
        return divWrapper;
    }
}
