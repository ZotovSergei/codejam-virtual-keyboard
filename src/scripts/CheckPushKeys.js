export class CheckPushKeys {
    shift(lang) {
        let node = document.querySelectorAll(`.${lang}`)
        node.forEach (item => {
         item.innerHTML = item.innerHTML.toLocaleUpperCase();
        })
        // for (let index = 65; index <= 90; index++) {
        //     const element = document.getElementById(`${index}`);
        //     element.innerHTML = element.innerHTML.toLocaleUpperCase();            
        // }
    }
    unshift(lang) {
        let node = document.querySelectorAll(`.${lang}`)
        node.forEach (item => {
         item.innerHTML = item.innerHTML.toLocaleLowerCase();
        })
        // for (let index = 65; index <= 90; index++) {
        //     const element = document.getElementById(`${index}`);
        //     element.innerHTML = element.innerHTML.toLocaleLowerCase();
        // }
    }
    changeLang(sign,lang) {        
        if (sign) {
            if (lang == 'ru') {
                localStorage.setItem('lang','en')
                this.changeLetters('en');                
            } else {
                localStorage.setItem('lang','ru');
                this.changeLetters('ru');
            }
        }
    }
    changeLetters(lang) {
        
        console.log('------------');
        console.log(lang);
        if (lang == 'ru') {
            console.log('ru');
            // en = hidden
            // ru = visible
            let nodeRu = document.querySelectorAll(`.${lang}`)
            nodeRu.forEach(item=> {
                item.classList.remove('hidden');                
            })
            let nodeEn = document.querySelectorAll(`.en`)
            nodeEn.forEach(item=> {
                item.classList.add('hidden');
                // item.innerHTML = item.innerHTML.toLocaleLowerCase();
            })
              
        } else {
            console.log('en');
            let nodeEn = document.querySelectorAll(`.${lang}`)
            nodeEn.forEach(item=> {
                item.classList.remove('hidden');
            })
            let nodeRu = document.querySelectorAll(`.ru`)
            nodeRu.forEach(item=> {
                item.classList.add('hidden');
                // item.innerHTML = item.innerHTML.toLocaleLowerCase();
            })
            
        }                
    }
}