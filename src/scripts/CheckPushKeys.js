export class CheckPushKeys {
  // eslint-disable-next-line class-methods-use-this
  shift(lang) {
    let node = document.querySelectorAll(`.${lang}`);
    node.forEach(item => {
      // eslint-disable-next-line no-param-reassign
      item.innerHTML = item.innerHTML.toLocaleUpperCase();
    });
    node = document.querySelectorAll('.shift');
    node.forEach(item => {
      item.classList.add('hidden');
    });
    node = document.querySelectorAll(`.unshift.${lang}`);
    node.forEach(item => {
      item.classList.remove('hidden');
    });

    // Exception
    if (lang === 'en') {
      document.querySelector('#\\31 91 > div.en').innerText = '?';
    }
  }

  // eslint-disable-next-line class-methods-use-this
  unshift(lang) {
    let node = document.querySelectorAll(`.${lang}`);
    node.forEach(item => {
      // eslint-disable-next-line no-param-reassign
      item.innerHTML = item.innerHTML.toLocaleLowerCase();
    });
    node = document.querySelectorAll('.unshift');
    node.forEach(item => {
      item.classList.add('hidden');
    });
    node = document.querySelectorAll('.shift');
    node.forEach(item => {
      item.classList.remove('hidden');
    });
    // Exception
    if (lang === 'ru') {
      node = document.querySelectorAll('.shift.en');
      node.forEach(item => {
        item.classList.add('hidden');
      });
    }
    if (lang === 'en') {
      node = document.querySelector('.shift.ru');
      node.classList.add('hidden');
      document.querySelector('#\\31 91 > div.en').innerText = '/';
    }
  }

  changeLang(sign, lang) {
    if (sign) {
      if (lang === 'ru') {
        localStorage.setItem('lang', 'en');
        this.changeLetters('en');
      } else {
        localStorage.setItem('lang', 'ru');
        this.changeLetters('ru');
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  changeLetters(lang) {
    if (lang === 'ru') {
      // en = hidden
      // ru = visible
      let nodeRu = document.querySelectorAll(`.${lang}`);
      nodeRu.forEach(item=> {
        item.classList.remove('hidden');
      });
      let nodeEn = document.querySelectorAll('.en');
      nodeEn.forEach(item=> {
        item.classList.add('hidden');
      });
    } else {
      let nodeEn = document.querySelectorAll(`.${lang}`);
      nodeEn.forEach(item=> {
        item.classList.remove('hidden');
      });
      let nodeRu = document.querySelectorAll('.ru');
      nodeRu.forEach(item=> {
        item.classList.add('hidden');
      });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  capsLock(countCapsLockPush, lang) {
    console.log(countCapsLockPush);
    if (countCapsLockPush < 1) {
      let node = document.querySelectorAll(`.${lang}`);
      node.forEach(item => {
        // eslint-disable-next-line no-param-reassign
        item.innerHTML = item.innerHTML.toLocaleUpperCase();
      });
    } else {
      let node = document.querySelectorAll(`.${lang}`);
      node.forEach(item => {
        // eslint-disable-next-line no-param-reassign
        item.innerHTML = item.innerHTML.toLocaleLowerCase();
      });
    }
  }
}
