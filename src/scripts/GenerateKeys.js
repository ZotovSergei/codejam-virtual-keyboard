import {Key} from './Key.js'; 


export class GenerateKeys {

    constructor () {
        this.divWrapper = document.createElement('div');
        this.divWrapper.className = 'wraper__keyboard';
        this.map = new Map();
        this.lang = localStorage.getItem('lang') || 'en';
    }
    generateLetter (start,end,sign) {        
        for (let i = start; i < end; i++) {
            start++;
            const element = String.fromCharCode(start);
            const a = new Key(element,start,`${sign}${element}`,`${element.toLowerCase()}`,`${element.toLowerCase()}`).generate();
            this.map.set(element,a);
        }
        return this.map;
    }
    generateExp() {
        // let map = new Map();
        this.map.set('`', new Key('`' ,192,'Backquote','`','ё').generate());
        this.map.set('-', new Key('-' ,189,'Minus','-').generate());
        this.map.set('=', new Key('=' ,187,'Equal','=').generate());
        this.map.set('Backspace', new Key('Backspace' , 8,'Backspace','Backspace','Backspace').generate());
        this.map.set('Tab', new Key('Tab' ,9,'Tab','Tab','Tab').generate());
        this.map.set('[', new Key('[' ,219,'BracketLeft','[','х').generate());
        this.map.set(']', new Key(']' ,221,'BracketRight',']','ъ').generate());
        this.map.set('\\', new Key('\\' ,220,'Backslash','\\','\\').generate());
        this.map.set('CapsLock', new Key('CapsLock' , 20,'CapsLock','CapsLock','CapsLock').generate());
        this.map.set(';', new Key(';' ,186,'Semicolon',';','ж').generate());
        this.map.set('\'', new Key('\'' ,222,'Quote','\'','э').generate());
        this.map.set('Enter', new Key('Enter' ,13,'NumpadEnter','Enter','Enter').generate());
        this.map.set('ShiftLeft', new Key('Shift' ,16,'ShiftLeft','Shift','Shift').generate());
        this.map.set(',', new Key(',' ,188,'Comma',',','б').generate());
        this.map.set('.', new Key('.' ,190,'Period','.','ю').generate());
        this.map.set('/', new Key('/' ,191,'Slash','/','.').generate());
        this.map.set('ShiftRight', new Key('Shift' ,16,'ShiftRight','Shift','Shift').generate());
        this.map.set('ArrowUp', new Key('ArrowUp' ,38,'ArrowUp','Up','Up').generate());
        this.map.set('ControlLeft', new Key('Control' ,17,'ControlLeft','Ctrl','Ctrl').generate());
        this.map.set('MetaLeft', new Key('Meta' ,91,'MetaLeft','Win','Win').generate());
        this.map.set('AltLeft', new Key('Alt' ,18,'AltLeft','Alt','Alt').generate());
        this.map.set('Space', new Key('Space' ,32,'Space',' ',' ').generate());
        this.map.set('AltRight', new Key('Alt' ,18,'AltRight','Alt','Alt').generate());
        this.map.set('ControlRight', new Key('Ctrl' ,17,'ControlRight','Ctrl','Ctrl').generate());
        this.map.set('ArrowLeft', new Key('ArrowLeft' ,37,'ArrowLeft','Left','Left').generate());
        this.map.set('ArrowDown', new Key('ArrowDown' ,40,'ArrowDown','Down','Down').generate());
        this.map.set('ArrowRight', new Key('ArrowRight' ,39,'ArrowRight','Right','Right').generate());
        return  this.map;
    }
    generate1row(keyExp) {
        const div  = document.createElement('div');        
        div.className = 'row_keys 1_row'; 
        div.append(keyExp.get('Tab'));
        div.append(new Key('Q' ,81,'KeyQ','q','й').generate());
        div.append(new Key('W' ,87,'KeyQ','w','ц').generate());
        div.append(new Key('E' ,69,'KeyE','e','у').generate());
        div.append(new Key('R' ,82,'KeyR','r','к').generate());
        div.append(new Key('T' ,84,'KeyT','t','е').generate());
        div.append(new Key('Y' ,89,'KeyY','y','н').generate());
        div.append(new Key('U' ,85,'KeyU','u','г').generate());
        div.append(new Key('I' ,73,'KeyI','i','ш').generate());
        div.append(new Key('O' ,79,'KeyO','o','щ').generate());
        div.append(new Key('P' ,80,'KeyP','p','з').generate());        


        // div.append(mapLetters.get('Q'));
        // div.append(mapLetters.get('W'));
        // div.append(mapLetters.get('E'));
        // div.append(mapLetters.get('R'));
        // div.append(mapLetters.get('T'));
        // div.append(mapLetters.get('Y'));
        // div.append(mapLetters.get('U'));
        // div.append(mapLetters.get('I'));
        // div.append(mapLetters.get('O'));
        // div.append(mapLetters.get('P'));
        div.append(keyExp.get('['));
        div.append(keyExp.get(']'));
        div.append(keyExp.get('\\'));
        return div;        
    }
    generate2row(keyExp) {
        const div  = document.createElement('div');
        div.className = 'row_keys 2_row';
        div.append(keyExp.get('CapsLock'));

        div.append(new Key('A' ,65,'KeyA','a','ф').generate());
        div.append(new Key('S' ,83,'KeyS','s','ы').generate());
        div.append(new Key('D' ,68,'KeyD','d','в').generate());
        div.append(new Key('F' ,70,'KeyF','f','а').generate());
        div.append(new Key('G' ,71,'KeyG','g','п').generate());
        div.append(new Key('H' ,72,'KeyH','h','р').generate());
        div.append(new Key('J' ,74,'KeyJ','j','о').generate());
        div.append(new Key('K' ,75,'KeyK','k','л').generate());
        div.append(new Key('L' ,76,'KeyL','l','д').generate());          

        // div.append(mapLetters.get('A'));
        // div.append(mapLetters.get('S'));
        // div.append(mapLetters.get('D'));
        // div.append(mapLetters.get('F'));
        // div.append(mapLetters.get('G'));
        // div.append(mapLetters.get('H'));
        // div.append(mapLetters.get('J'));
        // div.append(mapLetters.get('K'));
        // div.append(mapLetters.get('L'));
        div.append(keyExp.get(';'));
        div.append(keyExp.get('\''));
        div.append(keyExp.get('Enter'));        
        return div;
    }
    generate3row(keyExp) {
        const div  = document.createElement('div');
        div.className = 'row_keys 3_row';
        div.append(keyExp.get('ShiftLeft'));

        div.append(new Key('Z' ,90,'KeyZ','z','я').generate());
        div.append(new Key('X' ,88,'KeyX','x','ч').generate());
        div.append(new Key('C' ,67,'KeyC','c','с').generate());
        div.append(new Key('V' ,86,'KeyV','v','м').generate());
        div.append(new Key('B' ,66,'KeyB','b','и').generate());
        div.append(new Key('N' ,78,'KeyN','n','т').generate());
        div.append(new Key('M' ,77,'KeyM','m','ь').generate());
        



        // div.append(mapLetters.get('Z'));
        // div.append(mapLetters.get('X'));
        // div.append(mapLetters.get('C'));
        // div.append(mapLetters.get('V'));
        // div.append(mapLetters.get('B'));
        // div.append(mapLetters.get('N'));
        // div.append(mapLetters.get('M'));
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
        // let keys = this.generateLetter(64,90,'Key');
        let keysNumber = this.generateLetter(47,57,'Digit');
        let keyExp = this.generateExp();
    
        let divNrow = this.generateNrow(keysNumber, keyExp);
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
