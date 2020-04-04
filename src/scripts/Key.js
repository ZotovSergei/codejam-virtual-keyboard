export class Key {
  constructor(key, idNumber, code, classEn = 'en', classRu = 'ru', classShift = null, valueShift = null, valuEn, valueRu, exp) {
    this.key = key;
    this.idNumber = idNumber;
    this.code = code;
    // this.view = view;
    // this.className = className;
    this.classEn = classEn;
    this.classRu = classRu;
    this.valuEn = valuEn;
    this.valueRu = valueRu;
    this.valueShift = valueShift;
    this.classShift = classShift;
    this.exp = exp;
  }

  generate() {
    const div = document.createElement('div');
    const divRu = document.createElement('div');
    const divEn = document.createElement('div');
    const divN = document.createElement('div');
    if (this.valueShift && this.classShift) {
      div.className = `key ${this.code}`;
      divRu.className = this.classRu;
      divEn.className = this.classEn;
      divN.className = this.classShift;
      div.setAttribute('id', this.idNumber.toString());
      divRu.innerHTML = this.valueRu;
      divEn.innerHTML = this.valuEn;
      divN.innerHTML = this.valueShift;
      div.appendChild(divRu);
      div.appendChild(divEn);
      div.appendChild(divN);
    } else if (this.exp) {
      div.className = `key ${this.code}`;
      div.setAttribute('id', this.idNumber.toString());
      divEn.innerHTML = this.valuEn;
      div.appendChild(divEn);
    } else {
      div.className = `key ${this.code}`;
      divRu.className = this.classRu;
      divEn.className = this.classEn;
      div.setAttribute('id', this.idNumber.toString());
      divRu.innerHTML = this.valueRu;
      divEn.innerHTML = this.valuEn;
      div.appendChild(divRu);
      div.appendChild(divEn);
    }
    return div;
  }
}
