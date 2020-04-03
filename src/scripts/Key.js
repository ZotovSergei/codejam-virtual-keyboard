export class Key {            
    constructor(key,idNumber,code,en,ru) {
        this.key = key;
        this.idNumber = idNumber;
        this.code = code;
        // this.view = view;
        // this.className = className;        
        this.en = en;
        this.ru = ru;
    }

    generate() {
        const div = document.createElement('div');
        const divRu = document.createElement('div');
        const divEn = document.createElement('div');
        div.className = `key ${this.code}`;        
        divRu.className = 'ru';
        divEn.className = 'en';
        div.setAttribute('id',this.idNumber.toString());                
        divRu.innerHTML = this.ru;
        divEn.innerHTML = this.en;
        div.appendChild(divRu);
        div.appendChild(divEn);
        return div;
    }

}