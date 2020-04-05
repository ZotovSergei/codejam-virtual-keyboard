export class Header {
  // eslint-disable-next-line class-methods-use-this
  generateHeader() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.className = 'h1';
    h1.innerHTML = 'Codejam: Virtual Keyboard';
    header.className = 'header';
    header.appendChild(h1);
    return header;
  }
}
