export class Key {            
    constructor(key,idNumber,code,classEn='en',classRu='ru',valuEn,valueRu,exp) {
        this.key = key;
        this.idNumber = idNumber;
        this.code = code;
        // this.view = view;
        // this.className = className;
        this.classEn = classEn;
        this.classRu = classRu;
        this.valuEn = valuEn;
        this.valueRu = valueRu;
        this.exp = exp;

    }

    generate() {
        const div = document.createElement('div');
        const divRu = document.createElement('div');
        const divEn = document.createElement('div');
        if (this.exp) {
            div.className = `key ${this.code}`;                
            // divRu.className = 'ru';
            // divEn.className = 'en';
            div.setAttribute('id',this.idNumber.toString());                
            // divRu.innerHTML = this.ru;
            divEn.innerHTML = this.valuEn;
            // div.appendChild(divRu);
            div.appendChild(divEn);
        }
        else {
            div.className = `key ${this.code}`;                            
            divRu.className = this.classRu;
            divEn.className = this.classEn;
            div.setAttribute('id',this.idNumber.toString());                
            divRu.innerHTML = this.valueRu;
            divEn.innerHTML = this.valuEn;
            div.appendChild(divRu);
            div.appendChild(divEn);
        }

        
        return div;
    }

}