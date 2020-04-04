export class TextArea {
  // eslint-disable-next-line class-methods-use-this
  generateTextArea() {
    const textArea = document.createElement('textarea');
    textArea.className = 'text__area';
    textArea.setAttribute('t-id', 't-id1');
    textArea.setAttribute('autofocus', 'autofocus');
    return textArea;
  }
}
