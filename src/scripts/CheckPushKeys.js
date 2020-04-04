export class CheckPushKeys {
    shift(lang) {
        let node = document.querySelectorAll(`.${lang}`)
        node.forEach (item => {
         item.innerHTML = item.innerHTML.toLocaleUpperCase();
        })
        node = document.querySelectorAll(`.shift`);
        node.forEach (item => {
            item.classList.add('hidden');
        })
        node = document.querySelectorAll(`.unshift`);
        node.forEach (item => {
            item.classList.remove('hidden');
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
        node = document.querySelectorAll(`.unshift`);
        node.forEach (item => {
            item.classList.add('hidden');
        })
        node = document.querySelectorAll(`.shift`);
        node.forEach (item => {
            item.classList.remove('hidden');
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
        if (lang == 'ru') {            
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