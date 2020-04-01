export class Key {            
    constructor(key,idNumber,code,view) {
        this.key = key;
        this.idNumber = idNumber;
        this.code = code;
        this.view = view;
    }

    generate() {
        const div = document.createElement('div');
        div.className = `key ${this.code}`;
        div.setAttribute('id',this.idNumber);
        div.innerHTML = this.view;
        return div;
    }

}