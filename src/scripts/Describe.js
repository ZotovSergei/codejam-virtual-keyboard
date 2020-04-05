/* eslint-disable class-methods-use-this */
export class Describe {
  generateDescribe() {
    const div = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.className = 'describe';
    p1.innerText = 'Клавиатура создана в операционной системе Windows';
    p2.className = 'describe';
    p2.innerText = 'Для переключения языка используйте клавиши: Левый Shift и Левый Alt';
    div.appendChild(p1);
    div.appendChild(p2);
    return div;
  }
}
